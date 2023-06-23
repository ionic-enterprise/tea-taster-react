import { useEffect, useState } from 'react';
import {
  IonHeader,
  IonToolbar,
  IonButtons,
  IonButton,
  IonContent,
  IonList,
  IonListHeader,
  IonItem,
  IonToggle,
  IonLabel,
} from '@ionic/react';
import { useHistory } from 'react-router-dom';
import { logout } from '../../utils/auth';
import {
  canUseCustomPasscode,
  canHideContentsInBackground,
  hideContentsInBackground,
  canUseBiometrics,
  canUseSystemPasscode,
  isHidingContentsInBackground,
} from '../../utils/device';
import { getUnlockMode, setUnlockMode } from '../../utils/session-vault';

type Props = { onDismiss: () => void };

export const PreferencesEditor: React.FC<Props> = ({ onDismiss }) => {
  const history = useHistory();

  const [disableBiometrics, setDisableBiometrics] = useState<boolean>(true);
  const [disableSystemPasscode, setDisableSystemPasscode] = useState<boolean>(true);
  const disableCustomPasscode = !canUseCustomPasscode();
  const disableHideInBackground = !canHideContentsInBackground();

  const [hideInBackground, setHideInBackground] = useState<boolean>(false);

  const [useBiometrics, setUseBiometrics] = useState<boolean>(false);
  const [useSystemPasscode, setUseSystemPasscode] = useState<boolean>(false);
  const [useCustomPasscode, setUseCustomPasscode] = useState<boolean>(false);

  useEffect(() => {
    isHidingContentsInBackground().then((isHiding) => setHideInBackground(isHiding));
    canUseBiometrics().then((enabled) => setDisableBiometrics(!enabled));
    canUseSystemPasscode().then((enabled) => setDisableSystemPasscode(!enabled));
    getUnlockMode().then((mode) => {
      setUseBiometrics(mode === 'Biometrics' || mode === 'BiometricsWithPasscode');
      setUseSystemPasscode(mode === 'SystemPasscode' || mode === 'BiometricsWithPasscode');
      setUseCustomPasscode(mode === 'CustomPasscode');
    });
  }, []);

  const handleInBackgroundToggle = async (updatedValue: boolean) => {
    await hideContentsInBackground(updatedValue);
    setHideInBackground(updatedValue);
  };

  const handleCustomPasscodeToggle = async (updatedValue: boolean) => {
    if (updatedValue) {
      setUseBiometrics(false);
      setUseSystemPasscode(false);
    }
    setUseCustomPasscode(updatedValue);
    await setVaultLockMode(updatedValue, false, false);
  };

  const handleBiometricToggle = async (updatedValue: boolean) => {
    updatedValue && setUseCustomPasscode(false);
    setUseBiometrics(updatedValue);
    await setVaultLockMode(false, updatedValue, useSystemPasscode);
  };

  const handleSystemPasscodeToggle = async (updatedValue: boolean) => {
    updatedValue && setUseCustomPasscode(false);
    setUseSystemPasscode(updatedValue);
    await setVaultLockMode(false, useBiometrics, updatedValue);
  };

  const setVaultLockMode = (useCustomPasscode: boolean, useBiometrics: boolean, useSystemPasscode: boolean) => {
    if (useCustomPasscode) return setUnlockMode('CustomPasscode');
    if (useBiometrics && useSystemPasscode) return setUnlockMode('BiometricsWithPasscode');
    if (useBiometrics) return setUnlockMode('Biometrics');
    if (useSystemPasscode) return setUnlockMode('SystemPasscode');
    return setUnlockMode('SecureStorage');
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
            <IonToggle
              data-testid="use-biometrics-toggle"
              enableOnOffLabels={true}
              disabled={disableBiometrics}
              checked={useBiometrics}
              onIonChange={() => handleBiometricToggle(!useBiometrics)}
            >
              Use Biometrics
            </IonToggle>
          </IonItem>
          <IonItem>
            <IonToggle
              data-testid="use-system-passcode-toggle"
              enableOnOffLabels={true}
              disabled={disableSystemPasscode}
              checked={useSystemPasscode}
              onIonChange={() => handleSystemPasscodeToggle(!useSystemPasscode)}
            >
              Use System Passcode
            </IonToggle>
          </IonItem>
          <IonItem>
            <IonToggle
              data-testid="use-custom-passcode-toggle"
              enableOnOffLabels={true}
              disabled={disableCustomPasscode}
              checked={useCustomPasscode}
              onIonChange={() => handleCustomPasscodeToggle(!useCustomPasscode)}
            >
              Use Custom Passcode
            </IonToggle>
          </IonItem>
          <IonListHeader>Privacy</IonListHeader>
          <IonItem>
            <IonToggle
              data-testid="hide-contents-toggle"
              enableOnOffLabels={true}
              disabled={disableHideInBackground}
              checked={hideInBackground}
              onIonChange={() => handleInBackgroundToggle(!hideInBackground)}
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
