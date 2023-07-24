import { AuthConnect, AuthResult, CognitoProvider, ProviderOptions } from '@ionic-enterprise/auth';
import { isPlatform } from '@ionic/react';
import { clearSession, getSession, setSession } from './session-vault';

const isMobile = isPlatform('hybrid');
const url = isMobile ? 'io.ionic.teataster://auth-action-complete' : 'http://localhost:8100/auth-action-complete';
const options: ProviderOptions = {
  clientId: '64p9c53l5thd5dikra675suvq9',
  discoveryUrl: 'https://cognito-idp.us-east-2.amazonaws.com/us-east-2_YU8VQe29z/.well-known/openid-configuration',
  logoutUrl: url,
  redirectUri: url,
  scope: 'openid email profile',
  audience: '',
};
const provider = new CognitoProvider();

const setupAuthConnect = async (): Promise<void> => {
  return AuthConnect.setup({
    platform: isMobile ? 'capacitor' : 'web',
    logLevel: 'DEBUG',
    ios: { webView: 'private' },
    web: { uiMode: 'popup', authFlow: 'PKCE' },
  });
};

const performRefresh = async (authResult: AuthResult): Promise<AuthResult | undefined> => {
  let newAuthResult: AuthResult | undefined;
  if (await AuthConnect.isRefreshTokenAvailable(authResult)) {
    try {
      newAuthResult = await AuthConnect.refreshSession(provider, authResult);
      setSession(newAuthResult);
    } catch (error) {
      await clearSession();
    }
  } else {
    await clearSession();
  }
  return newAuthResult;
};

const getAuthResult = async (): Promise<AuthResult | undefined> => {
  let authResult = await getSession();
  if (authResult && (await AuthConnect.isAccessTokenExpired(authResult))) {
    authResult = await performRefresh(authResult);
  }
  return authResult;
};

const getAccessToken = async (): Promise<string | void> => {
  const authResult = await getAuthResult();
  return authResult?.accessToken;
};

const isAuthenticated = async (): Promise<boolean> => {
  return !!(await getAuthResult());
};

const login = async (): Promise<void> => {
  const authResult = await AuthConnect.login(provider, options);
  await setSession(authResult);
};

const logout = async (): Promise<void> => {
  const authResult = await getSession();
  if (authResult) {
    await AuthConnect.logout(provider, authResult);
    await clearSession();
  }
};

export { setupAuthConnect, isAuthenticated, getAccessToken, login, logout };
