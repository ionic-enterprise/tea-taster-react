import { useState } from 'react';
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonIcon,
  IonPage,
  IonToast,
} from '@ionic/react';
import { logoAmazon } from 'ionicons/icons';
import { useHistory } from 'react-router-dom';
import { login } from '../../utils/auth';

import './LoginPage.css';

const LoginPage: React.FC = () => {
  const history = useHistory();
  const [loginFailed, setLoginFailed] = useState<boolean>(false);

  const handleSignIn = async () => {
    try {
      await login();
      setLoginFailed(false);
      history.replace('/');
    } catch (error) {
      setLoginFailed(true);
    }
  };

  return (
    <IonPage>
      <IonContent fullscreen className="login-page main-content">
        <form>
          <IonCard>
            <IonCardHeader>
              <IonCardTitle>Login</IonCardTitle>
              <IonCardSubtitle>Welcome to Tea Taster</IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>
              <div className="auth-button-area">
                <IonButton expand="block" color="aws" onClick={() => handleSignIn()} data-testid="signin-button">
                  <IonIcon slot="end" icon={logoAmazon} />
                  Sign in with AWS
                </IonButton>
              </div>
            </IonCardContent>
          </IonCard>
        </form>
        <IonToast
          data-testid="error-toast"
          isOpen={loginFailed}
          position="bottom"
          message="Invalid email and/or password"
          duration={3000}
          onDidDismiss={() => setLoginFailed(false)}
          buttons={[
            {
              text: 'Dismiss',
              role: 'cancel',
              handler: () => setLoginFailed(false),
            },
          ]}
        />
      </IonContent>
    </IonPage>
  );
};
export default LoginPage;
