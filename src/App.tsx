import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import SplashContainer from './splash/SplashContainer';
import { PrivateRoute } from './auth/PrivateRoute';
import AuthProvider from './auth/AuthProvider';
import TeaProvider from './tea/TeaProvider';

import Tabs from './Tabs';
import LoginPage from './login/LoginPage';

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

/* Application Global Theming */
import './theme/global.css';
import SessionVaultProvider from './session-vault/SessionVaultProvider';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <SessionVaultProvider>
      <AuthProvider>
        <SplashContainer>
          <IonReactRouter>
            <IonRouterOutlet>
              <Route exact path="/login">
                <LoginPage />
              </Route>
              <Route path="/tabs">
                <PrivateRoute>
                  <TeaProvider>
                    <Tabs />
                  </TeaProvider>
                </PrivateRoute>
              </Route>
              <Route exact path="/">
                <Redirect to="/tabs" />
              </Route>
            </IonRouterOutlet>
          </IonReactRouter>
        </SplashContainer>
      </AuthProvider>
    </SessionVaultProvider>
  </IonApp>
);

export default App;
