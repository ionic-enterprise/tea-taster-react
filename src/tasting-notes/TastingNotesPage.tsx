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
  IonList,
  IonItem,
  IonLabel,
  IonItemSliding,
  IonItemOption,
  IonItemOptions,
  useIonModal,
  isPlatform,
} from '@ionic/react';
import { Share } from '@capacitor/share';
import TastingNoteEditor, { TastingNoteEditorProps } from './editor/TastingNoteEditor';
import { add, share, trashBin } from 'ionicons/icons';
import { useTastingNotes } from './useTastingNotes';
import { TastingNote } from '../shared/models';

const TastingNotesPage: React.FC = () => {
  const { getNotes, deleteNote } = useTastingNotes();
  const [notes, setNotes] = useState<TastingNote[]>([]);
  const [selectedNote, setSelectedNote] = useState<TastingNote | undefined>(undefined);
  const [presentModal, dismissModal] = useIonModal(TastingNoteEditor, {
    note: selectedNote,
    onDismiss: ({ refresh }) => handleOnDismiss(refresh),
  } as TastingNoteEditorProps);

  useEffect(() => {
    (async () => {
      const notes = await getNotes();
      setNotes(notes.reverse());
    })();
  }, [getNotes]);

  const handleOnDismiss = async (refresh: boolean) => {
    dismissModal();
    setSelectedNote(undefined);
    if (refresh) {
      const notes = await getNotes();
      setNotes(notes.reverse());
    }
  };

  const handleUpdateNote = (note: TastingNote) => {
    setSelectedNote(note);
    presentModal();
  };

  const handleNewNote = () => {
    setSelectedNote(undefined);
    presentModal();
  };

  const handleDeleteNote = async (id: number) => {
    await deleteNote(id);
    const notes = await getNotes();
    setNotes(notes.reverse());
  };

  const handleShareNote = async (note: TastingNote) => {
    const { brand, name, rating, notes } = note;
    await Share.share({
      title: `${brand}: ${name}`,
      text: `${notes} Rated ${rating}/5 stars`,
      dialogTitle: `Share ${name}'s tasting note`,
      url: 'https://tea-taster-training.web.app',
    });
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
              <IonItem data-testid={`note${idx}`} onClick={() => handleUpdateNote(note)}>
                <IonLabel>
                  <div>{note.brand}</div>
                  <div>{note.name}</div>
                </IonLabel>
              </IonItem>
              <IonItemOptions>
                {isPlatform('capacitor') && (
                  <IonItemOption
                    data-testid={`share${idx}`}
                    color="secondary"
                    onClick={() => handleShareNote(note)}
                    slot="icon-only"
                  >
                    <IonIcon icon={share} />
                  </IonItemOption>
                )}

                <IonItemOption
                  color="danger"
                  onClick={() => {
                    handleDeleteNote(note.id!);
                  }}
                >
                  <IonIcon icon={trashBin} />
                </IonItemOption>
              </IonItemOptions>
            </IonItemSliding>
          ))}
        </IonList>
        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton data-testid="fab-button" onClick={() => handleNewNote()}>
            <IonIcon icon={add} />
          </IonFabButton>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};
export default TastingNotesPage;
