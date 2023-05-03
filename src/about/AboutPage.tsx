import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const AboutPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>About Page</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="main-content"></IonContent>
    </IonPage>
  );
};
export default AboutPage;
