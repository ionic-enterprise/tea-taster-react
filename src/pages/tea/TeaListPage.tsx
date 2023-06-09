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
import { Tea } from '../../models';
import './TeaListPage.css';
import { logOutOutline } from 'ionicons/icons';
import { useHistory } from 'react-router-dom';
import { logout } from '../../utils/auth';

export const teaData: Tea[] = [
  {
    id: 1,
    name: 'Green',
    image: '/assets/images/green.jpg',
    description:
      'Green teas have the oxidation process stopped very early on, leaving them with a very subtle flavor and ' +
      'complex undertones. These teas should be steeped at lower temperatures for shorter periods of time.',
  },
  {
    id: 2,
    name: 'Black',
    image: '/assets/images/black.jpg',
    description:
      'A fully oxidized tea, black teas have a dark color and a full robust and pronounced flavor. Black teas tend ' +
      'to have a higher caffeine content than other teas.',
  },
  {
    id: 3,
    name: 'Herbal',
    image: '/assets/images/herbal.jpg',
    description:
      'Herbal infusions are not actually "tea" but are more accurately characterized as infused beverages ' +
      'consisting of various dried herbs, spices, and fruits.',
  },
  {
    id: 4,
    name: 'Oolong',
    image: '/assets/images/oolong.jpg',
    description:
      'Oolong teas are partially oxidized, giving them a flavor that is not as robust as black teas but also ' +
      'not as subtle as green teas. Oolong teas often have a flowery fragrance.',
  },
  {
    id: 5,
    name: 'Dark',
    image: '/assets/images/dark.jpg',
    description:
      'From the Hunan and Sichuan provinces of China, dark teas are flavorful aged probiotic teas that steeps ' +
      'up very smooth with slightly sweet notes.',
  },
  {
    id: 6,
    name: 'Puer',
    image: '/assets/images/puer.jpg',
    description:
      'An aged black tea from china. Puer teas have a strong rich flavor that could be described as "woody" or "peaty."',
  },
  {
    id: 7,
    name: 'White',
    image: '/assets/images/white.jpg',
    description:
      'White tea is produced using very young shoots with no oxidation process. White tea has an extremely ' +
      'delicate flavor that is sweet and fragrant. White tea should be steeped at lower temperatures for ' +
      'short periods of time.',
  },
];

const listToMatrix = (): Tea[][] => {
  let teaMatrix: Tea[][] = [];
  let row: Tea[] = [];

  teaData.forEach((tea) => {
    row.push(tea);
    if (row.length === 4) {
      teaMatrix.push(row);
      row = [];
    }
  });

  if (row.length) teaMatrix.push(row);
  return teaMatrix;
};

const TeaListPage: React.FC = () => {
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
          {listToMatrix().map((row, idx) => (
            <IonRow key={idx} className="ion-align-items-stretch">
              {row.map((tea) => (
                <IonCol size="12" sizeMd="6" sizeXl="3" key={tea.id}>
                  <IonCard>
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
