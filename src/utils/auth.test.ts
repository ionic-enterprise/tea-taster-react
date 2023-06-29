import { vi, Mock } from 'vitest';
import { clearSession, getSession, setSession } from './session-vault';
import { getAccessToken, isAuthenticated, login, logout } from './auth';
import { AuthConnect, CognitoProvider } from '@ionic-enterprise/auth';

vi.mock('@ionic-enterprise/auth');
vi.mock('@ionic/react', async (getOriginal) => {
  const original: any = await getOriginal();
  return { ...original, isPlatform: vi.fn().mockReturnValue(true) };
});
vi.mock('./session-vault');

describe('Auth Utilities', () => {
  const refreshedAuthResult = {
    accessToken: 'refreshed-access-token',
    refreshToken: 'refreshed-refresh-token',
    idToken: 'refreshed-id-token',
  };
  const testAuthResult = {
    accessToken: 'test-access-token',
    refreshToken: 'test-refresh-token',
    idToken: 'test-id-token',
  };

  beforeEach(() => vi.clearAllMocks());

  describe('isAuthenticated', () => {
    describe('if there is no auth result', () => {
      beforeEach(() => (getSession as Mock).mockResolvedValue(undefined));

      it('does not check for an expired access token', async () => {
        await isAuthenticated();
        expect(AuthConnect.isAccessTokenExpired).not.toHaveBeenCalled();
      });

      it('resolves false', async () => expect(await isAuthenticated()).toBe(false));
    });

    describe('if there is an auth result', () => {
      beforeEach(() => (getSession as Mock).mockResolvedValue(testAuthResult));

      describe('if the access token is not expired', () => {
        beforeEach(() => (AuthConnect.isAccessTokenExpired as Mock).mockResolvedValue(false));

        it('resolves true', async () => expect(await isAuthenticated()).toBe(true));
      });

      describe('if the access token is expired', () => {
        beforeEach(() => (AuthConnect.isAccessTokenExpired as Mock).mockResolvedValue(true));

        describe('if a refresh token exists', () => {
          beforeEach(() => (AuthConnect.isRefreshTokenAvailable as Mock).mockResolvedValue(true));

          it('attempts a refresh', async () => {
            await isAuthenticated();
            expect(AuthConnect.refreshSession).toHaveBeenCalledTimes(1);
            expect(AuthConnect.refreshSession).toHaveBeenCalledWith(expect.any(CognitoProvider), testAuthResult);
          });

          describe('when the refresh is successful', () => {
            beforeEach(() => (AuthConnect.refreshSession as Mock).mockResolvedValue(refreshedAuthResult));

            it('saves the new auth result', async () => {
              await isAuthenticated();
              expect(setSession).toHaveBeenCalledTimes(1);
              expect(setSession).toHaveBeenCalledWith(refreshedAuthResult);
            });

            it('resolves true', async () => expect(await isAuthenticated()).toBe(true));
          });

          describe('when the refresh fails', () => {
            beforeEach(() =>
              (AuthConnect.refreshSession as Mock).mockImplementationOnce(() => Promise.reject('refresh failed'))
            );

            it('clears the vault', async () => {
              await isAuthenticated();
              expect(clearSession).toHaveBeenCalledTimes(1);
            });

            it('resolves false', async () => expect(await isAuthenticated()).toBe(false));
          });
        });

        describe('if a refresh token does not exist', () => {
          beforeEach(() => (AuthConnect.isRefreshTokenAvailable as Mock).mockResolvedValue(false));

          it('does not attempt a refresh', async () => {
            await isAuthenticated();
            expect(AuthConnect.refreshSession).not.toHaveBeenCalled();
          });

          it('clears the Vault', async () => {
            await isAuthenticated();
            expect(clearSession).toHaveBeenCalledTimes(1);
          });

          it('resolves false', async () => expect(await isAuthenticated()).toBe(false));
        });
      });
    });
  });

  describe('getAccessToken', () => {
    describe('if there is no auth result', () => {
      beforeEach(() => (getSession as Mock).mockResolvedValue(undefined));

      it('does not check for an expired access token', async () => {
        await getAccessToken();
        expect(AuthConnect.isAccessTokenExpired).not.toHaveBeenCalled();
      });

      it('resolves undefined', async () => expect(await getAccessToken()).toBeUndefined());
    });

    describe('if there is an auth result', () => {
      beforeEach(() => (getSession as Mock).mockResolvedValue(testAuthResult));

      describe('if the access token is not expired', () => {
        beforeEach(() => (AuthConnect.isAccessTokenExpired as Mock).mockResolvedValue(false));

        it('resolves the access token', async () => expect(await getAccessToken()).toBe(testAuthResult.accessToken));
      });

      describe('if the access token is expired', () => {
        beforeEach(() => (AuthConnect.isAccessTokenExpired as Mock).mockResolvedValue(true));

        describe('if a refresh token exists', () => {
          beforeEach(() => (AuthConnect.isRefreshTokenAvailable as Mock).mockResolvedValue(true));

          it('attempts a refresh', async () => {
            await getAccessToken();
            expect(AuthConnect.refreshSession).toHaveBeenCalledTimes(1);
            expect(AuthConnect.refreshSession).toHaveBeenCalledWith(expect.any(CognitoProvider), testAuthResult);
          });

          describe('when the refresh is successful', () => {
            beforeEach(() => (AuthConnect.refreshSession as Mock).mockResolvedValue(refreshedAuthResult));

            it('saves the new auth result', async () => {
              await getAccessToken();
              expect(setSession).toHaveBeenCalledTimes(1);
              expect(setSession).toHaveBeenCalledWith(refreshedAuthResult);
            });

            it('resolves the new token', async () => {
              expect(await getAccessToken()).toEqual(refreshedAuthResult.accessToken);
            });
          });

          describe('when the refresh fails', () => {
            beforeEach(() =>
              (AuthConnect.refreshSession as Mock).mockImplementationOnce(() => Promise.reject('refresh failed'))
            );

            it('clears the Vault', async () => {
              await getAccessToken();
              expect(clearSession).toHaveBeenCalledTimes(1);
            });

            it('resolves undefined', async () => expect(await getAccessToken()).toBeUndefined());
          });
        });

        describe('if a refresh token does not exist', () => {
          beforeEach(() => (AuthConnect.isRefreshTokenAvailable as Mock).mockResolvedValue(false));

          it('does not attempt a refresh', async () => {
            await getAccessToken();
            expect(AuthConnect.refreshSession).not.toHaveBeenCalled();
          });

          it('clears the Vault', async () => {
            await getAccessToken();
            expect(clearSession).toHaveBeenCalledTimes(1);
          });

          it('resolves undefined', async () => expect(await getAccessToken()).toBeUndefined());
        });
      });
    });
  });

  describe('login', () => {
    it('performs a login', async () => {
      await login();
      expect(AuthConnect.login).toHaveBeenCalledTimes(1);
      expect(AuthConnect.login).toHaveBeenCalledWith(expect.any(CognitoProvider), {
        clientId: '64p9c53l5thd5dikra675suvq9',
        discoveryUrl:
          'https://cognito-idp.us-east-2.amazonaws.com/us-east-2_YU8VQe29z/.well-known/openid-configuration',
        redirectUri: 'msauth://auth-action-complete',
        logoutUrl: 'msauth://auth-action-complete',
        scope: 'openid email profile',
        audience: '',
      });

      it('sets the auth result value', async () => {
        (AuthConnect.login as Mock).mockResolvedValue(testAuthResult);
        await login();
        expect(setSession).toHaveBeenCalledTimes(1);
        expect(setSession).toHaveBeenCalledWith(testAuthResult);
      });
    });
  });

  describe('logout', () => {
    it('gets the current auth result', async () => {
      await logout();
      expect(getSession).toHaveBeenCalledTimes(1);
    });

    describe('if there is no auth result', () => {
      beforeEach(() => (getSession as Mock).mockResolvedValue(undefined));

      it('does not call logout', async () => {
        await logout();
        expect(AuthConnect.logout).not.toHaveBeenCalled();
      });
    });

    describe('if there is an auth result', () => {
      beforeEach(() => (getSession as Mock).mockResolvedValue(testAuthResult));

      it('calls logout', async () => {
        await logout();
        expect(AuthConnect.logout).toHaveBeenCalledTimes(1);
        expect(AuthConnect.logout).toHaveBeenCalledWith(expect.any(CognitoProvider), testAuthResult);
      });

      it('clears the auth result', async () => {
        await logout();
        expect(clearSession).toHaveBeenCalledTimes(1);
      });
    });
  });
});
