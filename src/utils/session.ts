import { Preferences } from '@capacitor/preferences';
import { Session } from '../models';

const key = 'session';
let session: Session | undefined;
let onSessionChange: ((session: Session | undefined) => void) | undefined;

const clearSession = async (): Promise<void> => {
  session = undefined;
  await Preferences.remove({ key });
  if (onSessionChange) onSessionChange(undefined);
};

const getSession = async (): Promise<Session | undefined> => {
  if (!session) {
    const { value } = await Preferences.get({ key });
    if (value) session = JSON.parse(value);
  }
  return session;
};

const setSession = async (s: Session): Promise<void> => {
  session = s;
  await Preferences.set({ key, value: JSON.stringify(s) });
  if (onSessionChange) onSessionChange(session);
};

const registerSessionChangeCallback = (callback: (session: Session | undefined) => void) => {
  onSessionChange = callback;
};

const unregisterSessionChangeCallback = () => (onSessionChange = undefined);

export { clearSession, getSession, setSession, registerSessionChangeCallback, unregisterSessionChangeCallback };
