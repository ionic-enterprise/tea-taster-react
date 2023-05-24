import { useState } from 'react';
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
  IonRow,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import { close } from 'ionicons/icons';

import './PinDialog.css';

type Props = {
  setPasscodeMode: boolean;
  onDismiss: (opts: { data: any; role?: string }) => void;
};

export const PinDialog: React.FC<Props> = ({ setPasscodeMode, onDismiss }) => {
  const [pin, setPin] = useState<string>('');
  const [verifyPin, setVerifyPin] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [prompt, setPrompt] = useState<string>(setPasscodeMode ? 'Create Session PIN' : 'Enter PIN to Unlock');

  const title = setPasscodeMode ? 'Create PIN' : 'Unlock';
  const displayPin = '*********'.slice(0, pin.length);

  const disableInput = pin.length > 8;
  const disableEnter = !(pin.length > 2);
  const disableDelete = !pin.length;

  const append = (n: number) => {
    setErrorMessage('');
    setPin(pin.concat(n.toString()));
  };

  const remove = () => {
    setPin(pin.slice(0, pin.length - 1));
  };

  const enter = () => {
    if (!setPasscodeMode) return onDismiss({ data: pin });

    if (!verifyPin) {
      setVerifyPin(pin);
      setPin('');
      setPrompt('Verify PIN');
    } else if (verifyPin === pin) {
      onDismiss({ data: pin });
    } else {
      setErrorMessage('PINs do not match');
      setVerifyPin('');
      setPin('');
      setPrompt('Create Session PIN');
    }
  };

  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{title}</IonTitle>
          {!setPasscodeMode && (
            <IonButtons slot="primary">
              <IonButton data-testid="cancel-button" onClick={() => onDismiss({ data: undefined, role: 'cancel' })}>
                <IonIcon slot="icon-only" icon={close} />
              </IonButton>
            </IonButtons>
          )}
        </IonToolbar>
      </IonHeader>
      <IonContent className="pin-dialog-content ion-padding ion-text-center">
        <IonLabel>
          <div className="prompt">{prompt}</div>
        </IonLabel>
        <IonLabel data-testid="display-pin">
          <div className="pin">{displayPin}</div>
        </IonLabel>
        <IonLabel color="danger">
          <div className="error">{errorMessage}</div>
        </IonLabel>
      </IonContent>
      <IonFooter className="pin-dialog-footer">
        <IonGrid>
          <IonRow>
            {[1, 2, 3].map((n) => (
              <IonCol key={n}>
                <IonButton expand="block" fill="outline" disabled={disableInput} onClick={() => append(n)}>
                  {n}
                </IonButton>
              </IonCol>
            ))}
          </IonRow>
          <IonRow>
            {[4, 5, 6].map((n) => (
              <IonCol key={n}>
                <IonButton expand="block" fill="outline" disabled={disableInput} onClick={() => append(n)}>
                  {n}
                </IonButton>
              </IonCol>
            ))}
          </IonRow>
          <IonRow>
            {[7, 8, 9].map((n) => (
              <IonCol key={n}>
                <IonButton expand="block" fill="outline" disabled={disableInput} onClick={() => append(n)}>
                  {n}
                </IonButton>
              </IonCol>
            ))}
          </IonRow>
          <IonRow>
            <IonCol>
              <IonButton color="tertiary" expand="block" disabled={disableDelete} onClick={() => remove()}>
                Delete
              </IonButton>
            </IonCol>
            <IonCol>
              <IonButton expand="block" disabled={disableInput} onClick={() => append(0)}>
                0
              </IonButton>
            </IonCol>
            <IonCol>
              <IonButton color="secondary" expand="block" disabled={disableEnter} onClick={() => enter()}>
                Enter
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonFooter>
    </>
  );
};
