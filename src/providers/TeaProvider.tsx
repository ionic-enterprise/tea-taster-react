import { ReactNode, createContext, useContext, useEffect, useState } from 'react';
import { Tea } from '../models';
import { client } from '../utils/backend-api';

type Props = { children?: ReactNode };
type Context = { teas: Tea[] };

const images: Array<string> = ['green', 'black', 'herbal', 'oolong', 'dark', 'puer', 'white', 'yellow'];

const unpack = (data: Omit<Tea, 'image'>[]): Tea[] => {
  return data.map((t) => ({ ...t, image: `/assets/images/${images[t.id - 1]}.jpg` }));
};

const TeaContext = createContext<Context | undefined>(undefined);
const TeaProvider = ({ children }: Props) => {
  const [teas, setTeas] = useState<Tea[]>([]);

  const loadTeas = async () => {
    const { data } = await client.get<Omit<Tea, 'image'>[]>('/tea-categories');
    setTeas(unpack(data) || []);
  };

  useEffect(() => {
    loadTeas();
  }, []);

  return <TeaContext.Provider value={{ teas }}>{children}</TeaContext.Provider>;
};
export const useTea = () => {
  const context = useContext(TeaContext);
  if (context === undefined) throw new Error('useTea must be used within TeaProvider');
  return context;
};
export default TeaProvider;
