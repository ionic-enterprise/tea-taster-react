import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonToolbar,
} from '@ionic/react';
import { close } from 'ionicons/icons';
import React, { useState } from 'react';

interface PinDialogProps {
  onDismiss: (opts: { data: any; role?: string }) => void;
  isSetPasscodeMode: boolean;
}

const PinDialog: React.FC<PinDialogProps> = ({ isSetPasscodeMode, onDismiss }) => {
  const [passcode] = useState<string>('1234');

  const handleCancel = () => {
    onDismiss({ data: undefined, role: 'cancel' });
  };

  const enterPasscode = () => {
    onDismiss({ data: passcode });
  };

  return (
    <>
      <IonHeader>
        <IonToolbar>
          {!isSetPasscodeMode && (
            <IonButtons slot="primary">
              <IonButton onClick={() => handleCancel()}>
                <IonIcon slot="icon-only" icon={close} />
              </IonButton>
            </IonButtons>
          )}
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonListHeader>{isSetPasscodeMode ? 'Setup Passcode' : 'Enter Passcode'}</IonListHeader>
          <IonItem>
            <IonLabel className="ion-text-wrap">
              For the purpose of this application, the passcode will be programmatically controlled.
            </IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Passcode:</IonLabel>
            <IonInput value={passcode} disabled={true} />
          </IonItem>

          <IonButton expand="block" onClick={() => enterPasscode()}>
            Confirm Passcode
          </IonButton>
        </IonList>
      </IonContent>
    </>
  );
};

export default PinDialog;
