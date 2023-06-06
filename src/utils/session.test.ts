import { Mock, vi } from 'vitest';
import { Preferences } from '@capacitor/preferences';
import { Session } from '../models';
import { clearSession, getSession, setSession } from './session';

vi.mock('@capacitor/preferences');

describe('Session Utilities', () => {
  const testSession: Session = {
    user: {
      id: 314159,
      firstName: 'Testy',
      lastName: 'McTest',
      email: 'test@test.com',
    },
    token: '123456789',
  };

  beforeEach(() => vi.clearAllMocks());

  it('starts with an undefined session', async () => {
    expect(await getSession()).toBeUndefined();
  });

  describe('setSession', () => {
    it('sets the session', async () => {
      await setSession(testSession);
      expect(await getSession()).toEqual(testSession);
    });

    it('stores the session', async () => {
      await setSession(testSession);
      expect(Preferences.set).toHaveBeenCalledTimes(1);
      expect(Preferences.set).toHaveBeenCalledWith({ key: 'session', value: JSON.stringify(testSession) });
    });
  });

  describe('clearSession', () => {
    beforeEach(async () => await setSession(testSession));

    it('clears the session', async () => {
      await clearSession();
      expect(await getSession()).toBeUndefined();
    });

    it('removes the session from preferences', async () => {
      await clearSession();
      expect(Preferences.remove).toHaveBeenCalledTimes(1);
      expect(Preferences.remove).toHaveBeenCalledWith({ key: 'session' });
    });
  });

  describe('getSession', () => {
    beforeEach(async () => await clearSession());

    it('gets the session from preferences', async () => {
      (Preferences.get as Mock).mockResolvedValue({ value: JSON.stringify(testSession) });
      expect(await getSession()).toEqual(testSession);
      expect(Preferences.get).toHaveBeenCalledTimes(1);
      expect(Preferences.get).toHaveBeenCalledWith({ key: 'session' });
    });

    it('caches the retrieved session', async () => {
      (Preferences.get as Mock).mockResolvedValue({ value: JSON.stringify(testSession) });
      await getSession();
      await getSession();
      expect(Preferences.get).toHaveBeenCalledTimes(1);
    });

    it('caches the session set via setSession', async () => {
      await setSession(testSession);
      expect(await getSession()).toEqual(testSession);
      expect(Preferences.get).not.toHaveBeenCalled();
    });
  });
});
