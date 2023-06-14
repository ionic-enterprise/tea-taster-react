import {
  IonButton,
  IonContent,
  IonFab,
  IonFabButton,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
  useIonModal,
} from '@ionic/react';
import { add, create, trash } from 'ionicons/icons';
import { TastingNoteEditor } from '../../components/note-editor/TastingNoteEditor';
import { useTea } from '../../providers/TeaProvider';
import { useTastingNotes } from '../../hooks/useTastingNotes';
import { useEffect, useState } from 'react';
import { TastingNote } from '../../models';

const TastingNotesPage: React.FC = () => {
  const { notes, refresh, remove } = useTastingNotes();
  const [note, setNote] = useState<TastingNote | undefined>(undefined);
  const { teas } = useTea();
  const [present, dismiss] = useIonModal(TastingNoteEditor, { onDismiss: () => refresh().then(dismiss), teas, note });

  useEffect(() => {
    refresh();
  }, []);

  const handleAddNote = () => {
    setNote(undefined);
    present();
  };

  const handleUpdateNote = (note: TastingNote) => {
    setNote(note);
    present();
  };

  return (
    <IonPage>
      <IonHeader translucent={true}>
        <IonToolbar>
          <IonTitle>Tasting Notes</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tasting Notes</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton onClick={() => handleAddNote()} data-testid="add-note-button">
            <IonIcon icon={add} />
          </IonFabButton>
        </IonFab>
        <IonList>
          {notes
            .sort((a, b) => a.id! - b.id!)
            .map((note) => (
              <IonItem key={note.id}>
                <IonLabel>
                  <div>{note.brand}</div>
                  <div>{note.name}</div>
                </IonLabel>
                <IonButton
                  slot="end"
                  fill="clear"
                  data-testid="edit-note-button"
                  onClick={() => handleUpdateNote(note)}
                >
                  <IonIcon icon={create} />
                </IonButton>
                <IonButton slot="end" fill="clear" data-testid="delete-note-button" onClick={() => remove(note)}>
                  <IonIcon icon={trash} />
                </IonButton>
              </IonItem>
            ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};
export default TastingNotesPage;
