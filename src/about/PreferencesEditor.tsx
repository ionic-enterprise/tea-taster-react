import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonToggle,
  IonToolbar,
} from '@ionic/react';
import { useHistory } from 'react-router';
import {
  canHideContentsInBackground,
  canUseBiometrics,
  canUseCustomPasscode,
  canUseSystemPasscode,
  hideContentsInBackground,
  isHidingContentsInBackground,
} from '../api/device-api';
import { useAuth } from '../auth/AuthProvider';
import { useEffect, useState } from 'react';
import { UnlockMode } from '../models';

type Props = { onDismiss: () => void };

export const PreferencesEditor: React.FC<Props> = ({ onDismiss }) => {
  const { logout } = useAuth();
  const history = useHistory();
  //const { getUnlockMode } = useSessionVault();

  const [disableBiometrics, setDisableBiometrics] = useState<boolean>(true);
  const [disableSystemPasscode, setDisableSystemPasscode] = useState<boolean>(true);

  const [unlockMode, setUnlockMode] = useState<UnlockMode>();
  const [hideInBackground, setHideInBackground] = useState<boolean>(false);

  const useBiometrics = unlockMode === 'Biometrics' || unlockMode === 'BiometricsWithPasscode';
  const useSystemPasscode = unlockMode === 'SystemPasscode' || unlockMode === 'BiometricsWithPasscode';
  const useCustomPasscode = unlockMode === 'CustomPasscode';

  useEffect(() => {
    isHidingContentsInBackground().then((isHiding) => setHideInBackground(isHiding));
    //getUnlockMode().then((mode) => setUnlockMode(mode));

    //canUseBiometrics().then((enabled) => setDisableBiometrics(!enabled));
    //canUseSystemPasscode().then((enabled) => setDisableSystemPasscode(!enabled));
  }, []);

  const hideInBackgroundChanged = async () => {
    await hideContentsInBackground(!hideInBackground);
    setHideInBackground(!hideInBackground);
  };

  const handleLogout = async (): Promise<void> => {
    await logout();
    onDismiss();
    history.replace('/login');
  };

  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="end">
            <IonButton strong={true} onClick={() => onDismiss()}>
              Dismiss
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonList>
          <IonListHeader>Session Locking</IonListHeader>
          <IonItem>
            <IonToggle>Use Biometrics</IonToggle>
          </IonItem>
          <IonItem>
            <IonToggle>Use System Passcode</IonToggle>
          </IonItem>
          <IonItem>
            <IonToggle disabled={!canUseCustomPasscode()}>Use Custom Passcode</IonToggle>
          </IonItem>
          <IonListHeader>Privacy</IonListHeader>
          <IonItem>
            <IonToggle
              data-testid="hide-contents-toggle"
              enableOnOffLabels={true}
              disabled={!canHideContentsInBackground()}
              checked={hideInBackground}
              onIonChange={() => hideInBackgroundChanged()}
            >
              Hide contents in background
            </IonToggle>
          </IonItem>
          <IonListHeader>Other Actions</IonListHeader>
          <IonItem button onClick={() => handleLogout()}>
            <IonLabel>Logout</IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </>
  );
};
