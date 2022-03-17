import React, { useEffect, useState } from 'react';
import {
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonPage,
  IonSelect,
  IonSelectOption,
  IonTitle,
  IonToolbar,
  isPlatform,
} from '@ionic/react';
import { Device } from '@ionic-enterprise/identity-vault';
import { useHistory } from 'react-router';
import { arrowRedoOutline, lockOpenOutline, logInOutline } from 'ionicons/icons';
import { useSession } from '../core/auth';
import { UnlockMode, useSessionVault } from '../core/vault';

const LoginPage: React.FC = () => {
  const { checkAuthenticationStatus, login, logout, isAuthenticated, error } = useSession();
  const { canUnlock: canUnlockVault } = useSessionVault();
  const { isLocked } = useSessionVault();
  const history = useHistory();
  const [canUnlock, setCanUnlock] = useState<boolean>(false);
  const [hasDeviceSecurity, setHasDeviceSecurity] = useState<boolean>(false);
  const [mode, setMode] = useState<UnlockMode>('NeverLock');

  useEffect(() => {
    canUnlockVault().then((isUnlockable) => setCanUnlock(isUnlockable && isPlatform('hybrid')));
  }, [canUnlockVault]);

  useEffect(() => {
    Device.isSystemPasscodeSet().then(setHasDeviceSecurity);
  }, []);

  // Add useEffect to call checkAuthenticationStatus
  // if Vault is Secure Storage

  useEffect(() => {
    !isLocked && isAuthenticated && history.replace('/tabs');
  }, [isLocked, isAuthenticated, history]);

  const handleLogin = async () => {
    await login(mode);
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
    const isUnlockable = await canUnlockVault();
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
            <IonItem>
              <IonLabel>Session Locking</IonLabel>
              <IonSelect onIonChange={(e) => setMode(e.detail.value! as UnlockMode)} value={mode}>
                {hasDeviceSecurity && <IonSelectOption value={'Device'}>Device Security</IonSelectOption>}
                <IonSelectOption value={'SessionPIN'}>Session PIN Unlock</IonSelectOption>
                <IonSelectOption value={'NeverLock'}>Never Lock Session</IonSelectOption>
                <IonSelectOption value={'ForceLogin'}>Force Login</IonSelectOption>
              </IonSelect>
            </IonItem>
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
