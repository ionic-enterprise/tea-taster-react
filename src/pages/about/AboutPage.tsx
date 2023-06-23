import { useRef, useState } from 'react';
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
  IonModal,
  IonNote,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import { settingsOutline } from 'ionicons/icons';
import { PreferencesEditor } from '../../components/preferences/PreferencesEditor';
import packageInfo from '../../../package.json';

const { author, description, name, version } = packageInfo;

const AboutPage: React.FC = () => {
  const page = useRef(undefined);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>About Tea Taster</IonTitle>
          <IonButtons slot="end">
            <IonButton data-testid="logout-button" onClick={() => setIsOpen(true)}>
              <IonIcon slot="icon-only" icon={settingsOutline} />
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
        <IonModal isOpen={isOpen} presentingElement={page.current}>
          <PreferencesEditor onDismiss={() => setIsOpen(false)} />
        </IonModal>
      </IonContent>
    </IonPage>
  );
};
export default AboutPage;
