import React, { useContext, useEffect, useState } from 'react';
import {
  IonButton,
  IonButtons,
  IonCol,
  IonContent,
  IonFooter,
  IonGrid,
  IonHeader,
  IonIcon,
  IonLabel,
  IonModal,
  IonRow,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import { close } from 'ionicons/icons';
import './PinDialog.css';
import { AuthContext } from '../core/auth';

interface PinDialogProps {
  onDismiss: (opts: { data: any; role?: string }) => void;
}

const PinDialog: React.FC<PinDialogProps> = ({ onDismiss }) => {
  const [isPasscodeSetRequest, setIsPasscodeSetRequest] = useState<boolean>(
    true,
  );

  const [title, setTitle] = useState<string>('');
  const [prompt, setPrompt] = useState<string>('');
  const [displayPin, setDisplayPin] = useState<string>('');
  const [verifyPin, setVerifyPin] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [disableEnter, setDisableEnter] = useState<boolean>(false);
  const [disableInput, setDisableInput] = useState<boolean>(false);
  const [disableDelete, setDisableDelete] = useState<boolean>(false);
  const [pin, setPin] = useState<string>('');

  const initSetPasscodeMode = () => {
    setPrompt('Create Session PIN');
    setTitle('Create PIN');
    setVerifyPin('');
    setDisplayPin('');
    setPin('');
  };

  const initUnlockMode = () => {
    setPrompt('Enter PIN to Unlock');
    setTitle('Unlock');
    setDisplayPin('');
    setPin('');
  };

  const initVerifyMode = () => {
    setPrompt('Verify PIN');
    setVerifyPin(pin);
    setDisplayPin('');
    setPin('');
  };

  useEffect(() => {
    setDisableEnter(!(pin.length > 2));
    setDisableDelete(!pin.length);
    setDisableInput(!!(pin.length >= 9));
    setDisplayPin('*********'.slice(0, pin.length));
  }, [pin]);

  useEffect(() => {
    if (isPasscodeSetRequest) {
      initSetPasscodeMode();
    } else {
      return initUnlockMode();
    }
  }, [isPasscodeSetRequest]);

  const append = (n: number) => {
    setError('');
    setPin(pin.concat(n.toString()));
  };

  const truncate = () => {
    if (pin.length) {
      setPin(pin.slice(0, pin.length - 1));
    }
  };

  const enter = () => {
    if (isPasscodeSetRequest) {
      if (!verifyPin.length) {
        initVerifyMode();
      } else if (verifyPin === pin) {
        onDismiss({ data: pin });
      } else {
        setError('PINs do not match');
        initSetPasscodeMode();
      }
    } else {
      onDismiss({ data: pin });
    }
  };

  return (
    <IonModal isOpen={true}>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{title}</IonTitle>
          {!isPasscodeSetRequest && (
            <IonButtons slot="primary">
              <IonButton
                onClick={() => onDismiss({ data: undefined, role: 'cancel' })}
              >
                <IonIcon slot="icon-only" icon={close} />
              </IonButton>
            </IonButtons>
          )}
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding ion-text-center">
        <IonLabel>
          <div className="prompt">{prompt}</div>
        </IonLabel>
        <IonLabel>
          <div className="pin">{displayPin}</div>
        </IonLabel>
        <IonLabel>
          <div className="error">{error}</div>
        </IonLabel>
      </IonContent>
      <IonFooter>
        <IonGrid>
          <IonRow>
            {[1, 2, 3].map(n => (
              <IonCol key={n}>
                <IonButton
                  expand="block"
                  fill="outline"
                  onClick={() => append(n)}
                  disabled={disableInput}
                >
                  {n}
                </IonButton>
              </IonCol>
            ))}
          </IonRow>
          <IonRow>
            {[4, 5, 6].map(n => (
              <IonCol key={n}>
                <IonButton
                  expand="block"
                  fill="outline"
                  onClick={() => append(n)}
                  disabled={disableInput}
                >
                  {n}
                </IonButton>
              </IonCol>
            ))}
          </IonRow>
          <IonRow>
            {[7, 8, 9].map(n => (
              <IonCol key={n}>
                <IonButton
                  expand="block"
                  fill="outline"
                  onClick={() => append(n)}
                  disabled={disableInput}
                >
                  {n}
                </IonButton>
              </IonCol>
            ))}
          </IonRow>
          <IonRow>
            <IonCol>
              <IonButton
                color="tertiary"
                expand="block"
                onClick={() => truncate()}
                disabled={disableDelete}
              >
                Delete
              </IonButton>
            </IonCol>
            <IonCol>
              <IonButton
                expand="block"
                fill="outline"
                onClick={() => append(0)}
                disabled={disableInput}
              >
                0
              </IonButton>
            </IonCol>
            <IonCol>
              <IonButton
                color="secondary"
                expand="block"
                onClick={() => enter()}
                disabled={disableEnter}
              >
                Enter
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonFooter>
    </IonModal>
  );
};
export default PinDialog;
