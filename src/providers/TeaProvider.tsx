import { ReactNode, createContext, useContext, useEffect, useState } from 'react';
import { Preferences } from '@capacitor/preferences';
import { Tea } from '../models';
import { client } from '../utils/backend-api';

type RawData = Omit<Tea, 'image' | 'rating'>;

type Props = { children?: ReactNode };
type Context = { teas: Tea[]; rate: (id: number, rating: number) => Promise<void> };

const images: Array<string> = ['green', 'black', 'herbal', 'oolong', 'dark', 'puer', 'white', 'yellow'];

const unpack = async (data: Omit<Tea, 'image'>[]): Promise<Tea[]> => {
  return Promise.all(data.map((t) => transform(t)));
};

const transform = async (data: RawData): Promise<Tea> => {
  const image = `/assets/images/${images[data.id - 1]}.jpg`;
  const { value } = await Preferences.get({ key: `rating${data.id}` });
  return { ...data, image, rating: parseInt(value || '0', 10) };
};

const TeaContext = createContext<Context | undefined>(undefined);
const TeaProvider = ({ children }: Props) => {
  const [teas, setTeas] = useState<Tea[]>([]);

  const loadTeas = async () => {
    const { data } = await client.get<Omit<Tea, 'image'>[]>('/tea-categories');
    const unpackedTeas = await unpack(data);
    setTeas(unpackedTeas || []);
  };

  const rate = async (id: number, rating: number): Promise<void> => {
    await Preferences.set({ key: `rating${id}`, value: rating.toString() });
    const idx = teas.findIndex((t) => t.id === id);
    teas[idx].rating = rating;
    setTeas(teas);
  };

  useEffect(() => {
    loadTeas();
  }, []);

  return <TeaContext.Provider value={{ teas, rate }}>{children}</TeaContext.Provider>;
};
export const useTea = () => {
  const context = useContext(TeaContext);
  if (context === undefined) throw new Error('useTea must be used within TeaProvider');
  return context;
};
export default TeaProvider;
