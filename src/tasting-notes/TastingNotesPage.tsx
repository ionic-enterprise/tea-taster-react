import { useEffect, useState } from 'react';
import {
  IonContent,
  IonFab,
  IonFabButton,
  IonHeader,
  IonIcon,
  IonItem,
  IonItemOption,
  IonItemOptions,
  IonItemSliding,
  IonLabel,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
  useIonModal,
} from '@ionic/react';
import { add } from 'ionicons/icons';

import { TastingNoteEditor } from './TastingNoteEditor';
import { useTea } from '../tea/TeaProvider';
import { useTastingNotes } from './useTastingNotes';
import { TastingNote } from '../models';

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
      <IonContent fullscreen className="main-content">
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
              <IonItemSliding key={note.id}>
                <IonItem button onClick={() => handleUpdateNote(note)}>
                  <IonLabel>
                    <div>{note.brand}</div>
                    <div>{note.name}</div>
                  </IonLabel>
                </IonItem>
                <IonItemOptions>
                  <IonItemOption color="danger" onClick={() => remove(note)}>
                    Delete
                  </IonItemOption>
                </IonItemOptions>
              </IonItemSliding>
            ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};
export default TastingNotesPage;
