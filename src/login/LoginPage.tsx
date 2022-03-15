import React, { useEffect, useState } from 'react';
import { IonContent, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar, isPlatform } from '@ionic/react';
import { useHistory } from 'react-router';
import { arrowRedoOutline, lockOpenOutline, logInOutline } from 'ionicons/icons';
import { useSession } from '../core/auth';
import { useSessionVault } from '../core/vault';

const LoginPage: React.FC = () => {
  const { checkAuthenticationStatus, login, logout, isAuthenticated, error } = useSession();
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

  const handleLogin = async () => {
    await login();
  };

  const handleUnlock = async () => {
    // Checking the authentication status calls isAuthenticated.
    // That method will prompt the user to unlock the vault in
    // order to gain access to session information to verify
    // if the user is still authenticated.
    await checkAuthenticationStatus();
  };

  const handleRedoLogin = async () => {
    await logout();
    const isUnlockable = await canVaultUnlock();
    setCanUnlock(isUnlockable);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{canUnlock ? 'Unlock' : 'Login'}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="main-content">
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{canUnlock ? 'Unlock' : 'Login'}</IonTitle>
          </IonToolbar>
        </IonHeader>
        {!canUnlock ? (
          <>
            <div className="unlock-app ion-text-center" onClick={() => handleLogin()}>
              <IonIcon icon={logInOutline} />
              Sign In
            </div>
          </>
        ) : (
          <>
            <div className="unlock-app ion-text-center" onClick={() => handleUnlock()}>
              <IonIcon icon={lockOpenOutline} />
              Unlock
            </div>
            <div className="unlock-app ion-text-center" onClick={() => handleRedoLogin()}>
              <IonIcon icon={arrowRedoOutline} />
              Redo Sign In
            </div>
          </>
        )}

        {error && <div className="error-message">{error}</div>}
      </IonContent>
    </IonPage>
  );
};

export default LoginPage;
