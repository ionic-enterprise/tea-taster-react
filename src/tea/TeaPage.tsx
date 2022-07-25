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
import { logOutOutline } from 'ionicons/icons';
import { useHistory } from 'react-router';
import { useSession } from '../core/session';
import { Tea } from '../shared/models';
import './TeaPage.css';
import { useTea } from './TeaProvider';

export const listToMatrix = (teas: Tea[]): Tea[][] => {
  let teaMatrix: Tea[][] = [];
  let row: Tea[] = [];

  teas.forEach((tea) => {
    row.push(tea);
    if (row.length === 4) {
      teaMatrix.push(row);
      row = [];
    }
  });
  if (row.length) teaMatrix.push(row);

  return teaMatrix;
};

const TeaPage: React.FC = () => {
  const { teas } = useTea();
  const { logout } = useSession();
  const history = useHistory();

  const handleLogout = async () => {
    await logout();
    history.replace('/login');
  };

  const navToDetailsPage = (id: number) => {
    history.push(`/tabs/tea/details/${id}`);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tea</IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={() => handleLogout()}>
              <IonIcon icon={logOutOutline} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="main-content">
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tea</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonGrid className="tea-grid">
          {listToMatrix(teas).map((row, idx) => (
            <IonRow key={idx} className="ion-justify-content-center ion-align-items-stretch">
              {row.map((tea) => (
                <IonCol size="12" sizeMd="6" sizeXl="3" key={tea.id}>
                  <IonCard button onClick={() => navToDetailsPage(tea.id)}>
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

export default TeaPage;
