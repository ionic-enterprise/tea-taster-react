import { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { useAuthInterceptor, useSession } from '../core/session';
import { TastingNote } from '../shared/models';

export const TastingNotesContext = createContext<{
  notes: TastingNote[];
  getNotes: () => Promise<void>;
  deleteNote: (id: number) => Promise<void>;
  saveNote: (note: TastingNote) => Promise<void>;
}>({
  notes: [],
  getNotes: () => {
    throw new Error('Method not implemented');
  },
  deleteNote: () => {
    throw new Error('Method not implemented');
  },
  saveNote: () => {
    throw new Error('Method not implemented');
  },
});

export const TastingNotesProvider: React.FC = ({ children }) => {
  const { user } = useSession();
  const { api } = useAuthInterceptor();
  const [notes, setNotes] = useState<TastingNote[]>([]);

  useEffect(() => {
    user === undefined && setNotes([]);
  }, [user]);

  const getNotes = useCallback(async () => {
    const { data } = await api.get('/user-tasting-notes');
    setNotes(data.reverse());
  }, [api]);

  const deleteNote = async (id: number): Promise<void> => {
    await api.delete(`/user-tasting-notes/${id}`);
  };

  const saveNote = async (note: TastingNote) => {
    let url = `/user-tasting-notes`;
    if (note.id) url += `/${note.id}`;
    await api.post(url, note);
  };

  return (
    <TastingNotesContext.Provider value={{ notes, getNotes, deleteNote, saveNote }}>
      {children}
    </TastingNotesContext.Provider>
  );
};

export const useTastingNotes = () => {
  const { notes, getNotes, deleteNote, saveNote } = useContext(TastingNotesContext);

  if (notes === undefined) {
    throw new Error('useTastingNotes must be used within a TastingNotesProvider');
  }

  return { notes, getNotes, deleteNote, saveNote };
};
