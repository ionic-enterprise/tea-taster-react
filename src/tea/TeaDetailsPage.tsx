import { IonBackButton, IonButtons, IonContent, IonHeader, IonImg, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useTea } from './TeaProvider';
import { useParams } from 'react-router';
import { Tea } from '../models';
import { Rating } from '../shared/Rating';
import { useState } from 'react';

const TeaDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { teas } = useTea();
  const tea: Tea | undefined = teas.find((t) => t.id === parseInt(id, 10));

  const [rating, setRating] = useState<number>(2);

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
      <IonContent className="ion-padding">
        {tea && (
          <div>
            <div className="ion-justify-content-center" style={{ display: 'flex' }}>
              <IonImg src={tea.image} style={{ maxWidth: '75%', maxHeight: '512px' }} />
            </div>
            <h1 data-testid="name">{tea.name}</h1>
            <p data-testid="description">{tea.description}</p>
            <Rating rating={rating} onRatingChange={(r) => setRating(r)} />
          </div>
        )}
      </IonContent>
    </IonPage>
  );
};
export default TeaDetailsPage;
