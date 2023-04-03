import { Device } from '@ionic-enterprise/identity-vault';
import {
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonSelect,
  IonSelectOption,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import { lockOpenOutline, logInOutline } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useHistory } from 'react-router';
import { UnlockMode, useSession, useSessionVault } from '../core/session';

type LoginInputs = {
  unlockMode: UnlockMode;
};

const LoginPage: React.FC = () => {
  const { login, invalidate, user, error, restoreSession } = useSession();
  const { canUnlock } = useSessionVault();
  const history = useHistory();
  const [canUnlockVault, setCanUnlockVault] = useState<boolean>(false);
  const [hasDeviceSecurity, setHasDeviceSecurity] = useState<boolean>(false);

  useEffect(() => user && history.replace('/tabs'), [history, user]);

  useEffect(() => {
    Device.isSystemPasscodeSet().then((res) => setHasDeviceSecurity(res));
  }, []);

  useEffect(() => {
    canUnlock().then((res) => setCanUnlockVault(res));
  }, [canUnlock]);

  const { handleSubmit, control } = useForm<LoginInputs>({ mode: 'onChange' });

  const handleLogin = async (data: LoginInputs) => {
    await login(data.unlockMode);
    user && history.replace('/tabs');
  };

  const handleSessionRestore = async () => {
    await restoreSession();
    user && history.replace('/tabs');
  };

  const handleRedoSignIn = async () => {
    await invalidate();
    setCanUnlockVault(false);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{canUnlockVault ? 'Unlock' : 'Login'}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="main-content">
        {canUnlockVault ? (
          <>
            <div
              className="unlock-app ion-text-center"
              data-testid="unlock-button"
              onClick={() => handleSessionRestore()}
            >
              <IonIcon icon={lockOpenOutline} />
              Unlock
            </div>
            <div className="unlock-app ion-text-center" data-testid="redo-button" onClick={() => handleRedoSignIn()}>
              <IonIcon icon={logInOutline} />
              Sign In Instead
            </div>
          </>
        ) : (
          <form>
            <IonList>
              <IonItem>
                <IonLabel position="floating">Session Locking</IonLabel>
                <Controller
                  render={({ field: { onChange, value } }) => (
                    <IonSelect onIonChange={(e) => onChange(e.detail.value!)} value={value}>
                      {hasDeviceSecurity && <IonSelectOption value="Device">Device Security</IonSelectOption>}
                      <IonSelectOption value="SessionPin">Session PIN Unlock</IonSelectOption>
                      <IonSelectOption value="NeverLock">Never Lock Session</IonSelectOption>
                      <IonSelectOption value="ForceLogin">Force Login</IonSelectOption>
                      <IonSelectOption value="Biometric">Biometric</IonSelectOption>
                    </IonSelect>
                  )}
                  control={control}
                  name="unlockMode"
                  defaultValue="NeverLock"
                />
              </IonItem>
              <div className="unlock-app ion-text-center" onClick={handleSubmit((data) => handleLogin(data))}>
                <IonIcon icon={logInOutline} />
                Sign In
              </div>
            </IonList>
          </form>
        )}
        <div className="error-message" data-testid="errors">
          {error && <div>{error}</div>}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default LoginPage;
