import { Device } from '@ionic-enterprise/identity-vault';
import {
  IonButton,
  IonContent,
  IonFooter,
  IonHeader,
  IonIcon,
  IonInput,
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
  email: string;
  password: string;
  unlockMode: UnlockMode;
};

const LoginPage: React.FC = () => {
  const { login, invalidate, session, error, restoreSession } = useSession();
  const { canUnlock } = useSessionVault();
  const history = useHistory();
  const [canUnlockVault, setCanUnlockVault] = useState<boolean>(false);
  const [hasDeviceSecurity, setHasDeviceSecurity] = useState<boolean>(false);

  useEffect(() => session && history.replace('/tabs'), [history, session]);

  useEffect(() => {
    Device.isSystemPasscodeSet().then((res) => setHasDeviceSecurity(res));
  }, []);

  useEffect(() => {
    canUnlock().then((res) => setCanUnlockVault(res));
  }, [canUnlock]);

  const {
    handleSubmit,
    control,
    formState: { errors, isDirty, isValid },
  } = useForm<LoginInputs>({ mode: 'onChange' });

  const handleLogin = async (data: LoginInputs) => {
    await login(data.email, data.password, data.unlockMode);
    session && history.replace('/tabs');
  };

  const handleSessionRestore = async () => {
    await restoreSession();
    session && history.replace('/tabs');
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
                    </IonSelect>
                  )}
                  control={control}
                  name="unlockMode"
                  defaultValue="NeverLock"
                />
              </IonItem>
              <IonItem>
                <IonLabel position="floating">E-Mail Address</IonLabel>
                <Controller
                  render={({ field: { onChange, value } }) => (
                    <IonInput
                      data-testid="email-input"
                      onIonChange={(e) => onChange(e.detail.value!)}
                      value={value}
                      type="email"
                    />
                  )}
                  control={control}
                  name="email"
                  rules={{
                    required: true,
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                      message: 'E-Mail Address must have a valid format',
                    },
                  }}
                />
              </IonItem>
              <IonItem>
                <IonLabel position="floating">Password</IonLabel>
                <Controller
                  render={({ field: { onChange, value } }) => (
                    <IonInput
                      data-testid="password-input"
                      onIonChange={(e) => onChange(e.detail.value!)}
                      value={value}
                      type="password"
                    />
                  )}
                  control={control}
                  name="password"
                  rules={{ required: true }}
                />
              </IonItem>
            </IonList>
          </form>
        )}
        <div className="error-message" data-testid="errors">
          <div>{errors.email?.type === 'required' && 'E-Mail Address is required'}</div>
          <div>{errors.email?.type === 'pattern' && errors.email.message}</div>
          <div>{errors.password?.type === 'required' && 'Password is required'}</div>
          {error && <div>{error}</div>}
        </div>
      </IonContent>
      {!canUnlockVault && (
        <IonFooter>
          <IonToolbar color="secondary">
            <IonButton
              expand="full"
              disabled={!isDirty || !isValid}
              data-testid="submit-button"
              onClick={handleSubmit((data) => handleLogin(data))}
            >
              Sign In
              <IonIcon slot="end" icon={logInOutline} />
            </IonButton>
          </IonToolbar>
        </IonFooter>
      )}
    </IonPage>
  );
};

export default LoginPage;
