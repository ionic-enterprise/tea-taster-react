import { IonPage, IonContent, IonCard, IonCardContent, IonCardTitle, IonButton, IonIcon } from '@ionic/react';
import { lockOpenOutline, arrowRedoOutline } from 'ionicons/icons';
import { useHistory } from 'react-router-dom';
import { clearSession, restoreSession } from '../../utils/session-vault';

import './UnlockPage.css';

const UnlockPage: React.FC = () => {
  const history = useHistory();

  const handleRedo = async (): Promise<void> => {
    await clearSession();
    history.replace('/login');
  };

  const handleUnlock = async (): Promise<void> => {
    try {
      await restoreSession();
      history.replace('/');
    } catch (err) {
      // Handle or log the error, or remove the try-catch block entirely
    }
  };

  return (
    <IonPage>
      <IonContent className="unlock-page ion-text-center main-content">
        <IonCard>
          <IonCardContent>
            <IonCardTitle>The Tasting Room is Locked</IonCardTitle>
            <IonButton className="unlock-button" expand="full" fill="clear" onClick={() => handleUnlock()}>
              <IonIcon slot="end" icon={lockOpenOutline} />
              Unlock
            </IonButton>
            <IonButton expand="full" color="secondary" onClick={() => handleRedo()}>
              <IonIcon slot="end" icon={arrowRedoOutline} />
              Redo Sign In
            </IonButton>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};
export default UnlockPage;
