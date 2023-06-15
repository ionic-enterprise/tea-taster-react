import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonNote,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import { useHistory } from 'react-router-dom';
import { logout } from '../../utils/auth';
import packageInfo from '../../../package.json';
import { logOutOutline } from 'ionicons/icons';

const { author, description, name, version } = packageInfo;

const AboutPage: React.FC = () => {
  const history = useHistory();

  const handleLogout = async (): Promise<void> => {
    await logout();
    history.replace('/login');
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>About Tea Taster</IonTitle>
          <IonButtons slot="end">
            <IonButton data-testid="logout-button" onClick={() => handleLogout()}>
              <IonIcon slot="icon-only" icon={logOutOutline} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-text-center ion-padding main-content">
        <IonList>
          <IonListHeader>About</IonListHeader>
          <IonItem>
            <IonLabel>Name</IonLabel>
            <IonNote slot="end">{name}</IonNote>
          </IonItem>
          <IonItem>
            <IonLabel>Description</IonLabel>
            <IonNote slot="end">{description}</IonNote>
          </IonItem>
          <IonItem>
            <IonLabel>Version</IonLabel>
            <IonNote slot="end">{version}</IonNote>
          </IonItem>
          <IonItem>
            <IonLabel>Author</IonLabel>
            <IonNote slot="end">{author.name}</IonNote>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};
export default AboutPage;
