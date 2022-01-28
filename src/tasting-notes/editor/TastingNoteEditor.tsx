import React, { useState, useEffect } from 'react';
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
import { useForm, Controller } from 'react-hook-form';
import { TastingNote, Tea } from '../../shared/models';
import { Rating } from '../../shared/components';
import { close } from 'ionicons/icons';
import { useTea } from '../../tea/useTea';
import { useTastingNotes } from '../useTastingNotes';

export interface TastingNoteEditorProps {
  note?: TastingNote;
  onDismiss: (opts: { refresh: boolean }) => void;
}

const TastingNoteEditor: React.FC<TastingNoteEditorProps> = ({ onDismiss, note = undefined }) => {
  const {
    handleSubmit,
    control,
    formState: { isValid },
    reset,
  } = useForm<TastingNote>({ mode: 'onChange' });
  const { getTeas } = useTea();
  const { saveNote } = useTastingNotes();
  const [teas, setTeas] = useState<Tea[]>([]);

  const save = async (data: TastingNote) => {
    if (note?.id) data.id = note.id;
    await saveNote(data);
    reset();
    onDismiss({ refresh: true });
  };

  useEffect(() => {
    (async () => {
      const teas = await getTeas();
      setTeas(teas);
    })();
  }, [getTeas]);

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
        <form>
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
                  <>
                    {teas.length && (
                      <IonSelect
                        data-testid="category-select"
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
                  </>
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
        </form>
      </IonContent>
      <IonFooter>
        <IonToolbar>
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
