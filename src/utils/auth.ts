import { client } from './backend-api';
import { clearSession, setSession } from './session';

const login = async (email: string, password: string): Promise<boolean> => {
  const { data } = await client.post('/login', { username: email, password });
  if (data.success) {
    const { user, token } = data;
    await setSession({ user, token });
    return true;
  }
  return false;
};

const logout = async (): Promise<void> => {
  await client.post('/logout');
  await clearSession();
};

export { login, logout };
