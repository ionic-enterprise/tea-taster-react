import { Preferences } from '@capacitor/preferences';
import { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { useAuthInterceptor, useSession } from '../core/session';
import { Tea } from '../shared/models';

const images: string[] = ['green', 'black', 'herbal', 'oolong', 'dark', 'puer', 'white', 'yellow'];

export const TeaContext = createContext<{
  teas: Tea[];
  getTeas: () => Promise<void>;
  saveTea: (tea: Tea) => Promise<void>;
}>({
  teas: [],
  getTeas: () => {
    throw new Error('Method not implemented');
  },
  saveTea: () => {
    throw new Error('Method not implemented');
  },
});

export const TeaProvider: React.FC = ({ children }) => {
  const { session } = useSession();
  const { api } = useAuthInterceptor();
  const [teas, setTeas] = useState<Tea[]>([]);

  useEffect(() => {
    session === undefined && setTeas([]);
  }, [session]);

  const getTeas = useCallback(async () => {
    const { data } = await api.get('/tea-categories');
    const teas = await Promise.all(data.map(async (item: any) => await fromJsonToTea(item)));
    setTeas(teas);
  }, [api]);

  const saveTea = async (tea: Tea): Promise<void> => {
    const rating = tea.rating?.toString() || '0';
    Preferences.set({ key: `rating${tea.id}`, value: rating });
    const idx = teas.findIndex((t) => t.id === tea.id);
    teas[idx] = tea;
    setTeas(teas);
  };

  const fromJsonToTea = async (obj: any): Promise<Tea> => {
    const rating = await Preferences.get({ key: `rating${obj.id}` });
    return {
      ...obj,
      image: require(`../assets/images/${images[obj.id - 1]}.jpg`),
      rating: parseInt(rating?.value || '0', 10),
    };
  };

  return <TeaContext.Provider value={{ teas, getTeas, saveTea }}>{children}</TeaContext.Provider>;
};

export const useTea = () => {
  const { teas, getTeas, saveTea } = useContext(TeaContext);

  if (teas === undefined) {
    throw new Error('useTea must be used within a TeaProvider');
  }

  useEffect(() => {
    !teas.length && getTeas();
  }, [teas, getTeas]);

  return { teas, saveTea };
};
