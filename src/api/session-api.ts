import { Session } from '../models';
import { Preferences } from '@capacitor/preferences';

const key = 'session';
let session: Session | undefined;

const clearSession = async (): Promise<void> => {
  session = undefined;
  await Preferences.remove({ key });
};

const getSession = async (): Promise<Session | undefined> => {
  if (!session) {
    const { value } = await Preferences.get({ key });
    value && (session = JSON.parse(value));
  }
  return session;
};

const setSession = async (value: Session): Promise<void> => {
  session = value;
  await Preferences.set({ key, value: JSON.stringify(value) });
};

export { clearSession, getSession, setSession };
