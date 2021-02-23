import React, { useContext, useEffect } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { Plugins } from '@capacitor/core';
import { IonApp, IonModal, IonRouterOutlet, isPlatform } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { AuthContext, AuthProvider, PrivateRoute } from './core/auth';
import LoginPage from './login/LoginPage';
import Tabs from './Tabs';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import './theme/global.css';
import PinDialog from './pin-dialog/PinDialog';

export const TeaTaster: React.FC = () => {
  const { isPasscodeSetRequest, displayPasscodeRequest } = useContext(
    AuthContext,
  );

  useEffect(() => {
    const { SplashScreen } = Plugins;
    if (isPlatform('capacitor')) SplashScreen.hide();
  }, []);

  const handleOnDismiss = (opts: { data: any; role?: string }) => {
    console.log(opts);
  };

  return (
    <IonApp>
      <IonModal isOpen={displayPasscodeRequest}>
        <PinDialog
          onDismiss={handleOnDismiss}
          setPasscodeMode={isPasscodeSetRequest}
        />
      </IonModal>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route exact path="/login" component={LoginPage} />
          <PrivateRoute path="/tabs" component={Tabs} />
          <Route exact path="/" render={() => <Redirect to="/login" />} />
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
};

const App: React.FC = () => {
  const handlePasscodeRequest = () => {
    console.log('HELLO FROM HANDLE PASSCODE REQUEST');
    return '111';
  };

  return (
    <AuthProvider handlePasscodeRequest={handlePasscodeRequest}>
      <TeaTaster />
    </AuthProvider>
  );
};

export default App;
