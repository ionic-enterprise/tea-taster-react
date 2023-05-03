import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonSelect,
  IonSelectOption,
  IonTextarea,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import { Controller, useForm } from 'react-hook-form';
import * as yup from 'Yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { TastingNote, Tea } from '../models';
import { Rating } from '../shared/Rating';
import { useTastingNotes } from './useTastingNotes';
import { useEffect } from 'react';

type Props = { onDismiss: () => void; teas: Tea[]; note?: TastingNote };

const validationSchema = yup.object({
  brand: yup.string().required().label('Brand'),
  name: yup.string().required().label('Name'),
  teaCategoryId: yup.number().required().label('Type of Tea'),
  rating: yup.number().required().label('Rating'),
  notes: yup.string().required().label('Notes'),
});

export const TastingNoteEditor: React.FC<Props> = ({ onDismiss, teas, note }) => {
  const { merge } = useTastingNotes();
  const {
    handleSubmit,
    control,
    formState: { errors, isValid, touchedFields, dirtyFields },
    reset,
  } = useForm<TastingNote>({ mode: 'onTouched', resolver: yupResolver(validationSchema) });

  useEffect(() => {
    note && reset(note);
  }, [note]);

  const getClassNames = (field: keyof TastingNote) =>
    [
      errors[field] ? 'ion-invalid' : 'ion-valid',
      touchedFields[field] ? 'ion-touched' : 'ion-untouched',
      dirtyFields[field] ? 'ion-dirty' : 'ion-pristine',
    ].join(' ');

  const cancel = () => onDismiss();

  const submit = async (data: TastingNote) => {
    await merge(data);
    onDismiss();
  };

  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton data-testid="cancel-button" onClick={() => cancel()}>
              Cancel
            </IonButton>
          </IonButtons>
          <IonButtons slot="end">
            <IonButton
              strong={true}
              data-testid="submit-button"
              onClick={handleSubmit((data) => submit(data))}
              disabled={!isValid}
            >
              {note ? 'Update' : 'Add'}
            </IonButton>
          </IonButtons>
          <IonTitle className="ion-text-center">{note ? 'Update' : 'Add New'} Tasting Note</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <form>
          <IonList lines="none">
            <IonItem>
              <Controller
                name="brand"
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <IonInput
                    label="Brand"
                    labelPlacement="floating"
                    value={value}
                    onIonBlur={onBlur}
                    onIonInput={(e) => onChange(e.detail.value!)}
                    errorText={errors.brand?.message}
                    className={getClassNames('brand')}
                  />
                )}
              />
            </IonItem>
            <IonItem>
              <Controller
                name="name"
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <IonInput
                    label="Name"
                    labelPlacement="floating"
                    value={value}
                    onIonBlur={onBlur}
                    onIonInput={(e) => onChange(e.detail.value!)}
                    errorText={errors.name?.message}
                    className={getClassNames('name')}
                  />
                )}
              />
            </IonItem>
            <IonItem>
              <Controller
                name="teaCategoryId"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <IonSelect
                    label="Type"
                    labelPlacement="floating"
                    onIonChange={(e) => onChange(e.detail.value!)}
                    value={value}
                    data-testid="tea-categories"
                  >
                    {teas.map((tea: Tea) => (
                      <IonSelectOption key={tea.id} value={tea.id}>
                        {tea.name}
                      </IonSelectOption>
                    ))}
                  </IonSelect>
                )}
              />
            </IonItem>
            <IonItem>
              <IonLabel>Rating</IonLabel>
              <Controller
                name="rating"
                control={control}
                render={({ field: { onChange, value } }) => <Rating onRatingChange={onChange} rating={value} />}
              />
            </IonItem>
            <IonItem>
              <Controller
                name="notes"
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <IonTextarea
                    label="Notes"
                    labelPlacement="floating"
                    rows={4}
                    value={value}
                    onIonBlur={onBlur}
                    onIonInput={(e) => onChange(e.detail.value!)}
                    errorText={errors.notes?.message}
                    className={getClassNames('notes')}
                  />
                )}
              />
            </IonItem>
          </IonList>
        </form>
      </IonContent>
    </>
  );
};
