import { ReactNode, createContext, useContext } from 'react';
import { Device } from '@ionic-enterprise/identity-vault';
import { Preferences } from '@capacitor/preferences';

type Props = { children?: ReactNode };
type UnlockMode = 'Biometrics' | 'BiometricsWithPasscode' | 'SystemPasscode' | 'CustomPasscode' | 'SecureStorage';

type Context = {};
const SessionVaultContext = createContext<Context | undefined>(undefined);
const SessionVaultProvider = ({ children }: Props) => {
  return <SessionVaultContext.Provider value={{}}>{children}</SessionVaultContext.Provider>;
};
export default SessionVaultContext;
