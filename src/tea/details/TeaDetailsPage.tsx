import React, { useState, useEffect } from 'react';
import { IonBackButton, IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonImg } from '@ionic/react';
import { useParams } from 'react-router';
import { Rating } from '../../shared/components';
import { Tea } from '../../shared/models';
import { useTea } from '../useTea';

const TeaDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { getTeaById, saveTea } = useTea();
  const [tea, setTea] = useState<Tea | undefined>(undefined);

  useEffect(() => {
    const fetchTea = async (id: number) => {
      const tea = await getTeaById(id);
      setTea(tea);
    };
    fetchTea(parseInt(id, 10));
  }, [id]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/tabs/tea" />
          </IonButtons>
          <IonTitle>Details</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="main-content">
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Details</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className="ion-padding">
          <div className="ion-justify-content-center">
            <IonImg src={tea?.image} />
          </div>
          <h1>{tea?.name}</h1>
          <p>{tea?.description}</p>
          <Rating
            initialRating={tea?.rating}
            disabled={!tea}
            onRatingChange={(rating) => saveTea({ ...tea!, rating })}
          />
        </div>
      </IonContent>
    </IonPage>
  );
};
export default TeaDetailsPage;
