import { IonIcon } from '@ionic/react';
import { star, starOutline } from 'ionicons/icons';
import './Rating.css';

type Props = {
  rating?: number;
  onRatingChange?: (rating: number) => any;
};

export const Rating: React.FC<Props> = ({ rating = 0, onRatingChange = () => void 0 }) => (
  <div className="rating">
    {[1, 2, 3, 4, 5].map((num, idx) => (
      <IonIcon
        key={idx}
        icon={num <= rating ? star : starOutline}
        data-testid={num <= rating ? `star` : `outline`}
        onClick={() => onRatingChange(num)}
      />
    ))}
  </div>
);
