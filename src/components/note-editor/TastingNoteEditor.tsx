import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonSelect,
  IonSelectOption,
  IonTextarea,
  IonTitle,
  IonToolbar,
  isPlatform,
} from '@ionic/react';
import { Share } from '@capacitor/share';
import { Controller, useForm } from 'react-hook-form';
import * as yup from 'Yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { TastingNote, Tea } from '../../models';
import { Rating } from '../rating/Rating';
import { useTastingNotes } from '../../hooks/useTastingNotes';
import { useEffect } from 'react';
import { shareOutline } from 'ionicons/icons';

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
    watch,
    getValues,
  } = useForm<TastingNote>({
    mode: 'onTouched',
    resolver: yupResolver(validationSchema),
    defaultValues: note || undefined,
  });
  const sharingIsAvailable = isPlatform('hybrid');
  const allowShare = watch(['brand', 'name', 'rating']).every((el) => !!el);

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

  const share = async (): Promise<void> => {
    const [brand, name, rating] = getValues(['brand', 'name', 'rating']);
    await Share.share({
      title: `${brand}: ${name}`,
      text: `I gave ${brand}: ${name} ${rating} stars on the Tea Taster app`,
      dialogTitle: 'Share your tasting note',
      url: 'https://tea-taster-training.web.app',
    });
  };

  return (
    <>
      <IonHeader className="ion-text-center">
        <IonToolbar>
          <IonTitle className="ion-text-center">{note ? 'Update' : 'Add New'} Tasting Note</IonTitle>
          <IonButtons slot="start">
            <IonButton data-testid="cancel-button" onClick={() => cancel()}>
              Cancel
            </IonButton>
          </IonButtons>
          <IonButtons slot="end">
            {sharingIsAvailable && (
              <IonButton data-testid="share-button" disabled={!allowShare} onClick={() => share()}>
                <IonIcon slot="icon-only" icon={shareOutline} />
              </IonButton>
            )}
            <IonButton
              strong={true}
              data-testid="submit-button"
              onClick={handleSubmit((data) => submit(data))}
              disabled={!isValid}
            >
              {note ? 'Update' : 'Add'}
            </IonButton>
          </IonButtons>
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
                    data-testid="tea-categories"
                    label="Type"
                    labelPlacement="floating"
                    onIonChange={(e) => onChange(e.detail.value!)}
                    value={value}
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
                render={({ field: { onChange, value } }) => (
                  <IonTextarea
                    label="Notes"
                    labelPlacement="floating"
                    rows={4}
                    value={value}
                    onIonInput={(e) => onChange(e.detail.value!)}
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
