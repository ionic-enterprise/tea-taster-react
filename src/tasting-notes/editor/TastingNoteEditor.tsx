import {
  IonButton,
  IonButtons,
  IonContent,
  IonFooter,
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
} from '@ionic/react';
import { close } from 'ionicons/icons';
import { Controller, useForm } from 'react-hook-form';
import { Rating } from '../../shared/components';
import { TastingNote, Tea } from '../../shared/models';
import { useTea } from '../../tea/TeaProvider';
import { useTastingNotes } from '../TastingNotesProvider';

export interface TastingNoteEditorProps {
  onDismiss: (opts: { refresh: boolean }) => void;
  note?: TastingNote;
}

const TastingNoteEditor: React.FC<TastingNoteEditorProps> = ({ onDismiss, note = undefined }) => {
  const {
    handleSubmit,
    control,
    formState: { isValid },
    reset,
  } = useForm<TastingNote>({ mode: 'onChange' });
  const { teas } = useTea();
  const { saveNote } = useTastingNotes();

  const save = async (data: TastingNote) => {
    if (note?.id) data.id = note.id;
    await saveNote(data);
    reset();
    onDismiss({ refresh: true });
  };

  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{note ? 'Update' : 'Add New'} Tasting Note</IonTitle>
          <IonButtons slot="primary">
            <IonButton data-testid="cancel-button" onClick={() => onDismiss({ refresh: false })}>
              <IonIcon slot="icon-only" icon={close} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="main-content">
        <IonList>
          <IonItem>
            <IonLabel position="floating">Brand</IonLabel>
            <Controller
              render={({ field: { onChange, value } }) => (
                <IonInput data-testid="brand-input" onIonChange={(e) => onChange(e.detail.value!)} value={value} />
              )}
              control={control}
              name="brand"
              rules={{ required: true, minLength: 1 }}
              defaultValue={note?.brand || ''}
            />
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Name</IonLabel>
            <Controller
              render={({ field: { onChange, value } }) => (
                <IonInput data-testid="name-input" onIonChange={(e) => onChange(e.detail.value!)} value={value} />
              )}
              control={control}
              name="name"
              rules={{ required: true, minLength: 1 }}
              defaultValue={note?.name || ''}
            />
          </IonItem>
          <IonItem>
            <IonLabel>Category</IonLabel>
            <Controller
              render={({ field: { onChange, value } }) => (
                <IonSelect onIonChange={(e) => onChange(e.detail.value!)} value={value}>
                  {teas.map((tea: Tea) => (
                    <IonSelectOption key={tea.id} value={tea.id}>
                      {tea.name}
                    </IonSelectOption>
                  ))}
                </IonSelect>
              )}
              control={control}
              name="teaCategoryId"
              defaultValue={note?.teaCategoryId || 1}
            />
          </IonItem>
          <IonItem>
            <IonLabel>Rating</IonLabel>
            <Controller
              render={({ field: { onChange, value } }) => <Rating onRatingChange={onChange} initialRating={value} />}
              control={control}
              name="rating"
              rules={{ required: true }}
              defaultValue={note?.rating || 0}
            />
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Notes</IonLabel>
            <Controller
              render={({ field: { onChange, value } }) => (
                <IonTextarea
                  data-testid="notes-input"
                  onIonChange={(e) => onChange(e.detail.value!)}
                  rows={5}
                  value={value}
                />
              )}
              control={control}
              name="notes"
              rules={{ required: true, minLength: 1 }}
              defaultValue={note?.notes || ''}
            />
          </IonItem>
        </IonList>
      </IonContent>
      <IonFooter>
        <IonToolbar color="secondary">
          <IonButton
            data-testid="submit-button"
            type="submit"
            disabled={!isValid}
            expand="full"
            onClick={handleSubmit((data) => save(data))}
          >
            {note ? 'Update' : 'Add'}
          </IonButton>
        </IonToolbar>
      </IonFooter>
    </>
  );
};
export default TastingNoteEditor;
