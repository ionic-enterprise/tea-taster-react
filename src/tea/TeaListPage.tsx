import {
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonImg,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import { Tea } from '../models';
import './TeaListPage.css';
import { useAuth } from '../auth/AuthProvider';
import { useHistory } from 'react-router';
import { logOutOutline } from 'ionicons/icons';
import { useTea } from './TeaProvider';

const listToMatrix = (teas: Tea[], cols: number = 4): Tea[][] => {
  const teaMatrix: Tea[][] = [];

  for (let i = 0; i < teas.length; i += cols) {
    teaMatrix.push(teas.slice(i, i + cols));
  }

  return teaMatrix;
};

const TeaListPage: React.FC = () => {
  const { teas } = useTea();
  const { logout } = useAuth();
  const history = useHistory();

  const handleLogout = async (): Promise<void> => {
    await logout();
    history.replace('/login');
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tea</IonTitle>
          <IonButtons slot="end">
            <IonButton data-testid="logout-button" onClick={() => handleLogout()}>
              <IonIcon slot="icon-only" icon={logOutOutline} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tea</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonGrid className="tea-grid">
          {listToMatrix(teas).map((row, idx) => (
            <IonRow key={idx} className="ion-align-items-stretch">
              {row.map((tea) => (
                <IonCol size="12" sizeMd="6" sizeXl="3" key={tea.id}>
                  <IonCard onClick={() => history.push(`/tabs/tea/${tea.id}`)}>
                    <IonImg src={tea.image} />
                    <IonCardHeader>
                      <IonCardTitle>{tea.name}</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent>{tea.description}</IonCardContent>
                  </IonCard>
                </IonCol>
              ))}
            </IonRow>
          ))}
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default TeaListPage;
