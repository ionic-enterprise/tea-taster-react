import { vi, Mock } from 'vitest';
import { User } from '../models';
import { client } from './backend-api';
import { clearSession, setSession } from './session-api';
import { login, logout } from './auth-api';

vi.mock('./backend-api');
vi.mock('./session-api');

describe('Auth API', () => {
  beforeEach(() => vi.clearAllMocks());

  describe('login', () => {
    beforeEach(() => (client.post as Mock).mockResolvedValue({ data: { success: false } }));

    it('posts to the login endpoint', async () => {
      await login('test@test.com', 'password');
      expect(client.post).toHaveBeenCalledTimes(1);
      expect(client.post).toHaveBeenCalledWith('/login', {
        username: 'test@test.com',
        password: 'password',
      });
    });

    describe('when the login fails', () => {
      it('resolves false', async () => {
        expect(await login('test@test.com', 'password')).toBeFalsy();
      });
    });

    describe('when the login succeeds', () => {
      const user: User = { id: 1, firstName: 'John', lastName: 'Doe', email: 'john.doe@test.com' };
      const token = '123456789';

      beforeEach(() => (client.post as Mock).mockResolvedValue({ data: { success: true, user, token } }));

      it('resolves true', async () => {
        expect(await login('test@test.com', 'password')).toBeTruthy();
      });

      it('sets the session', async () => {
        await login('test@test.com', 'password');
        expect(setSession).toHaveBeenCalledTimes(1);
        expect(setSession).toHaveBeenCalledWith({ user, token });
      });
    });
  });

  describe('logout', () => {
    it('posts to the logout endpoint', async () => {
      await logout();
      expect(client.post).toHaveBeenCalledTimes(1);
    });

    it('clears the session', async () => {
      await logout();
      expect(clearSession).toHaveBeenCalledTimes(1);
    });
  });
});
