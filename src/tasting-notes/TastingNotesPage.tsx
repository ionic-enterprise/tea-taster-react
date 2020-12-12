import React, { useEffect, useState } from 'react';
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
  IonItemOption,
  IonItemOptions,
  IonItemSliding,
} from '@ionic/react';
import { add } from 'ionicons/icons';
import TastingNoteEditor from './editor/TastingNoteEditor';
import { useTastingNotes } from './useTastingNotes';
import { TastingNote } from '../shared/models';

const TastingNotesPage: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [notes, setNotes] = useState<Array<TastingNote>>([]);
  const [selectedNote, setSelectedNote] = useState<TastingNote | undefined>(
    undefined,
  );
  const { getNotes, deleteNote } = useTastingNotes();

  useEffect(() => {
    const init = async () => {
      const notes = await getNotes();
      setNotes(notes);
    };
    init();
  }, [getNotes]);

  const handleOnDismiss = async (refresh: boolean) => {
    setShowModal(false);
    setSelectedNote(undefined);
    if (refresh) {
      const notes = await getNotes();
      setNotes(notes);
    }
  };

  const handleUpdateNote = (note: TastingNote) => {
    setSelectedNote(note);
    setShowModal(true);
  };

  const handleNewNote = () => {
    setSelectedNote(undefined);
    setShowModal(true);
  };

  const handleDeleteNote = async (id: number) => {
    await deleteNote(id);
    const notes = await getNotes();
    setNotes(notes);
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
        <IonList>
          {notes.map((note, idx) => (
            <IonItemSliding key={idx}>
              <IonItem onClick={() => handleUpdateNote(note)}>
                <IonLabel>
                  <div>{note.brand}</div>
                  <div>{note.name}</div>
                </IonLabel>
              </IonItem>
              <IonItemOptions>
                <IonItemOption
                  color="danger"
                  onClick={() => {
                    handleDeleteNote(note.id!);
                  }}
                >
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
        <IonModal isOpen={showModal}>
          <TastingNoteEditor
            onDismiss={({ refresh }) => handleOnDismiss(refresh)}
            note={selectedNote}
          />
        </IonModal>
      </IonContent>
    </IonPage>
  );
};
export default TastingNotesPage;
