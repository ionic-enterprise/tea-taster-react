import { IonBackButton, IonButtons, IonContent, IonHeader, IonImg, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useParams } from 'react-router-dom';
import { useTea } from '../../providers/TeaProvider';
import { Tea } from '../../models';

const TeaDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { teas } = useTea();
  const tea: Tea | undefined = teas.find((t) => t.id === parseInt(id, 10));

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/tea" />
          </IonButtons>
          <IonTitle>Tea Details</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {tea && (
          <div>
            <div className="ion-justify-content-center" style={{ display: 'flex' }}>
              <IonImg src={tea.image} style={{ maxWidth: '75%', maxHeight: '512px' }} />
            </div>
            <h1 data-testid="name">{tea.name}</h1>
            <p data-testid="description">{tea.description}</p>
          </div>
        )}
      </IonContent>
    </IonPage>
  );
};
export default TeaDetailsPage;
