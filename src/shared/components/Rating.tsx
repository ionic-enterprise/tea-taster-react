import { useEffect, useState } from 'react';
import { IonIcon } from '@ionic/react';
import { star, starOutline } from 'ionicons/icons';
import './Rating.css';

interface RatingProps {
  initialRating?: number;
  disabled?: boolean;
  onRatingChange: (rating: number) => any;
}

export const Rating: React.FC<RatingProps> = ({ initialRating = 0, disabled = false, onRatingChange }) => {
  const [rating, setRating] = useState<number>(1);

  useEffect(() => setRating(initialRating), [initialRating]);

  const handleRatingChange = (rating: number) => {
    setRating(rating);
    onRatingChange(rating);
  };

  return (
    <div className="rating" style={{ opacity: disabled ? 0.25 : 1 }} data-testid="rating">
      {[1, 2, 3, 4, 5].map((num, idx) => (
        <IonIcon
          data-testid={`Rate ${num} stars`}
          key={idx}
          icon={num <= rating ? star : starOutline}
          onClick={() => !disabled && handleRatingChange(num)}
        />
      ))}
    </div>
  );
};
