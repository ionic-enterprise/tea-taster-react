import { IonButton, IonCard, IonCardContent, IonCardTitle, IonContent, IonIcon, IonPage } from '@ionic/react';
import { arrowRedoOutline, lockOpenOutline } from 'ionicons/icons';
import { useHistory } from 'react-router';
import { clearSession, getSession } from '../api/session-vault-api';

import './UnlockPage.css';

const UnlockPage: React.FC = () => {
  const history = useHistory();

  const handleRedo = async (): Promise<void> => {
    await clearSession();
    history.replace('/login');
  };

  const handleUnlock = async (): Promise<void> => {
    try {
      await getSession();
      history.replace('/');
    } catch (err) {
      console.log(err);
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
