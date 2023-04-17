import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import SplashContainer from './splash/SplashContainer';
import { PrivateRoute } from './auth/PrivateRoute';

import TeaListPage from './tea/TeaListPage';
import LoginPage from './login/LoginPage';
import TeaDetailsPage from './tea/TeaDetailsPage';

import AuthProvider from './auth/AuthProvider';
import TeaProvider from './tea/TeaProvider';

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

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <AuthProvider>
      <SplashContainer>
        <IonReactRouter>
          <IonRouterOutlet>
            <Route exact path="/login">
              <LoginPage />
            </Route>
            <Route exact path="/tea">
              <PrivateRoute>
                <TeaProvider>
                  <TeaListPage />
                </TeaProvider>
              </PrivateRoute>
            </Route>
            <Route exact path="/tea/:id">
              <PrivateRoute>
                <TeaProvider>
                  <TeaDetailsPage />
                </TeaProvider>
              </PrivateRoute>
            </Route>
            <Route exact path="/">
              <Redirect to="/tea" />
            </Route>
          </IonRouterOutlet>
        </IonReactRouter>
      </SplashContainer>
    </AuthProvider>
  </IonApp>
);

export default App;
