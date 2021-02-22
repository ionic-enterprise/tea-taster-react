import { Plugins } from '@capacitor/core';
import React, { createContext, useEffect, useState } from 'react';
import { useAuthInterceptor } from '../core/auth';
import { Tea } from '../shared/models';

const images: Array<string> = [
  'green',
  'black',
  'herbal',
  'oolong',
  'dark',
  'puer',
  'white',
  'yellow',
];

export const TeaContext = createContext<{
  teas: Tea[];
  error: string;
  getTeaById: (id: number) => Tea | undefined;
  save: (tea: Tea) => Promise<void>;
}>({
  teas: [],
  error: '',
  getTeaById: id => undefined,
  save: tea => Promise.resolve(),
});

export const TeaProvider: React.FC = ({ children }) => {
  const { instance } = useAuthInterceptor();
  const [teas, setTeas] = useState<Tea[]>([]);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    (async () => {
      const url = `/tea-categories`;
      try {
        const { data } = await instance.get(url);
        const teas: Tea[] = await Promise.all(
          data.map(async (item: any) => await convert(item)),
        );
        setTeas(teas);
      } catch (error) {
        setError(error.message);
      }
    })();
  }, [instance]);

  const getTeaById = (id: number): Tea | undefined => {
    return teas.find(tea => tea.id === id);
  };

  const save = async (tea: Tea): Promise<void> => {
    const { Storage } = Plugins;
    try {
      await Storage.set({
        key: `rating${tea.id}`,
        value: tea.rating?.toString() || '0',
      });
      let index = teas.findIndex(t => t.id === tea.id);
      teas[index] = tea;
      setTeas(teas);
    } catch (error) {
      setError(error.message);
    }
  };

  const convert = async (data: any): Promise<Tea> => {
    const { Storage } = Plugins;
    const rating = await Storage.get({ key: `rating${data.id}` });
    return {
      ...data,
      image: require(`../assets/images/${images[data.id - 1]}.jpg`),
      rating: parseInt(rating?.value || '0', 10),
    };
  };

  return (
    <TeaContext.Provider value={{ teas, error, getTeaById, save }}>
      {children}
    </TeaContext.Provider>
  );
};
