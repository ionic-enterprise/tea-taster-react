import { useEffect, useState } from 'react';
import { IonBackButton, IonButtons, IonContent, IonHeader, IonImg, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useParams } from 'react-router-dom';
import { useTea } from '../../providers/TeaProvider';
import { Tea } from '../../models';
import { Rating } from '../../components/rating/Rating';

const TeaDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { teas, rate } = useTea();
  const [tea, setTea] = useState<Tea>();
  const [rating, setRating] = useState<number>(2);

  useEffect(() => {
    setTea(teas.find((t) => t.id === parseInt(id, 10)));
  }, [teas]);

  const handleRatingChange = async (rating: number) => {
    await rate(tea!.id, rating);
    setTea({ ...tea!, rating });
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/tabs/tea" />
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
            <Rating rating={tea.rating} onRatingChange={handleRatingChange} />{' '}
          </div>
        )}
      </IonContent>
    </IonPage>
  );
};
export default TeaDetailsPage;
