import React, { useEffect, useState } from 'react';
import { IonContent, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar, isPlatform } from '@ionic/react';
import { useHistory } from 'react-router';
import { lockOpenOutline, logInOutline } from 'ionicons/icons';
import { useSession } from '../core/auth';
import { useSessionVault } from '../core/vault';

const LoginPage: React.FC = () => {
  const { checkAuthenticationStatus, login, isAuthenticated, error } = useSession();
  const { canUnlock: canVaultUnlock } = useSessionVault();
  const { isLocked } = useSessionVault();
  const history = useHistory();

  const [canUnlock, setCanUnlock] = useState<boolean>(false);

  useEffect(() => {
    canVaultUnlock().then((isUnlockable) => setCanUnlock(isUnlockable && isPlatform('hybrid')));
  }, [canVaultUnlock]);

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
        {!canUnlock ? (
          <>
            <div className="unlock-app ion-text-center" onClick={() => login()}>
              <IonIcon icon={logInOutline} />
              Sign In
            </div>
          </>
        ) : (
          <>
            <div className="unlock-app ion-text-center" onClick={() => checkAuthenticationStatus()}>
              <IonIcon icon={lockOpenOutline} />
              Unlock
            </div>
          </>
        )}

        {error && <div>{error}</div>}

        {/* DEBUG */}
        <h1>Can Unlock Vault? {canUnlock.toString()}</h1>
      </IonContent>
    </IonPage>
  );
};

export default LoginPage;
