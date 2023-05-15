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
import { useAuth } from '../auth/AuthProvider';

type Props = { onDismiss: () => void };

export const PreferencesEditor: React.FC<Props> = ({ onDismiss }) => {
  const { logout } = useAuth();
  const history = useHistory();

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
            <IonToggle>Use Custom Passcode</IonToggle>
          </IonItem>
          <IonListHeader>Privacy</IonListHeader>
          <IonItem>
            <IonToggle>Hide contents in background</IonToggle>
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
