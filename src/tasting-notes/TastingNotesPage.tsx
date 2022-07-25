import { useEffect, useRef, useState } from 'react';
import {
  IonPage,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonContent,
  IonFab,
  IonFabButton,
  IonIcon,
  IonModal,
  IonItem,
  IonLabel,
  IonList,
  IonItemSliding,
  IonItemOption,
  IonItemOptions,
} from '@ionic/react';
import { add } from 'ionicons/icons';
import TastingNoteEditor from './editor/TastingNoteEditor';
import { useTastingNotes } from './TastingNotesProvider';
import { TastingNote } from '../shared/models';

const TastingNotesPage: React.FC = () => {
  const { notes, getNotes, deleteNote } = useTastingNotes();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedNote, setSelectedNote] = useState<TastingNote | undefined>(undefined);
  const list = useRef<HTMLIonListElement>(null);

  useEffect(() => {
    getNotes();
  }, [getNotes]);

  const handleOnDismiss = async (refresh: boolean) => {
    setIsOpen(false);
    setSelectedNote(undefined);
    if (refresh) await getNotes();
  };

  const handleUpdateNote = (note: TastingNote) => {
    setSelectedNote(note);
    setIsOpen(true);
  };

  const handleNewNote = () => {
    setSelectedNote(undefined);
    setIsOpen(true);
  };

  const handleDeleteNote = async (id: number) => {
    await list.current?.closeSlidingItems();
    await deleteNote(id);
    await getNotes();
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tasting Notes</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="main-content">
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tasting Notes</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonList ref={list}>
          {notes.map((note, idx) => (
            <IonItemSliding key={idx}>
              <IonItem onClick={() => handleUpdateNote(note)}>
                <IonLabel>
                  <div>{note.brand}</div>
                  <div>{note.name}</div>
                </IonLabel>
              </IonItem>
              <IonItemOptions>
                <IonItemOption color="danger" onClick={() => handleDeleteNote(note.id!)}>
                  Delete
                </IonItemOption>
              </IonItemOptions>
            </IonItemSliding>
          ))}
        </IonList>

        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton onClick={() => handleNewNote()}>
            <IonIcon icon={add} />
          </IonFabButton>
        </IonFab>

        <IonModal isOpen={isOpen}>
          <TastingNoteEditor onDismiss={({ refresh }) => handleOnDismiss(refresh)} note={selectedNote} />
        </IonModal>
      </IonContent>
    </IonPage>
  );
};
export default TastingNotesPage;
