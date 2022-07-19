import { useEffect } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { isPlatform, IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { SplashScreen } from '@capacitor/splash-screen';
import { AuthInterceptorProvider, PrivateRoute, SessionProvider } from './core/session';
import { TeaProvider } from './tea/TeaProvider';
import TeaPage from './tea/TeaPage';
import LoginPage from './login/LoginPage';
import TeaDetailsPage from './tea/details/TeaDetailsPage';

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

setupIonicReact();

const App: React.FC = () => {
  useEffect(() => {
    isPlatform('capacitor') && SplashScreen.hide();
  }, []);

  return (
    <IonApp>
      <SessionProvider>
        <AuthInterceptorProvider>
          <TeaProvider>
            <IonReactRouter>
              <IonRouterOutlet>
                <Route exact path="/login">
                  <LoginPage />
                </Route>
                <Route exact path="/tea">
                  <PrivateRoute>
                    <TeaPage />
                  </PrivateRoute>
                </Route>
                <Route path="/tea/details/:id">
                  <PrivateRoute>
                    <TeaDetailsPage />
                  </PrivateRoute>
                </Route>
                <Route exact path="/">
                  <Redirect to="/tea" />
                </Route>
              </IonRouterOutlet>
            </IonReactRouter>
          </TeaProvider>
        </AuthInterceptorProvider>
      </SessionProvider>
    </IonApp>
  );
};

export default App;
