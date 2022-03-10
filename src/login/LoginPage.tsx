import React, { useEffect } from 'react';
import { IonContent, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useHistory } from 'react-router';
import { logInOutline } from 'ionicons/icons';
import { useSession } from '../core/auth';
import { useSessionVault } from '../core/vault';

const LoginPage: React.FC = () => {
  const { login, isAuthenticated, error } = useSession();
  const { isLocked } = useSessionVault();
  const history = useHistory();

  useEffect(() => {
    !isLocked && isAuthenticated && history.replace('/tabs');
  }, [isLocked, isAuthenticated, history]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="main-content">
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Login</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className="unlock-app ion-text-center" onClick={() => login()}>
          <IonIcon icon={logInOutline} />
          Sign In
        </div>
        {error && <div>{error}</div>}
      </IonContent>
    </IonPage>
  );
};

export default LoginPage;
