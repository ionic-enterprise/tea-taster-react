/* eslint-disable import/no-anonymous-default-export */
import { isPlatform } from '@ionic/react';
import { IonicAuthOptions } from '@ionic-enterprise/auth';

export default (): { config: IonicAuthOptions } => {
  const baseConfig = {
    clientID: '64p9c53l5thd5dikra675suvq9',
    discoveryUrl: 'https://cognito-idp.us-east-2.amazonaws.com/us-east-2_YU8VQe29z/.well-known/openid-configuration',
    scope: 'openid email profile',
    audience: '',
  };

  const mobileAuthConfig: IonicAuthOptions = {
    ...baseConfig,
    authConfig: 'cognito',
    redirectUri: 'msauth://login',
    logoutUrl: 'msauth://login',
    platform: 'cordova',
    iosWebView: 'private',
    androidToolbarColor: 'Red',
  };

  const webAuthConfig: IonicAuthOptions = {
    ...baseConfig,
    authConfig: 'cognito',
    redirectUri: 'http://localhost:8100/login',
    logoutUrl: 'http://localhost:8100/login',
    platform: 'web',
  };

  const config = isPlatform('hybrid') ? mobileAuthConfig : webAuthConfig;

  return { config };
};
