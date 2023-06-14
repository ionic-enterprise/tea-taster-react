import { useState } from 'react';
import { client } from '../utils/backend-api';
import { TastingNote } from '../models';

export const useTastingNotes = () => {
  const [notes, setNotes] = useState<TastingNote[]>([]);
  const merge = async (note: TastingNote): Promise<TastingNote> => {
    return note.id ? updateNote(note) : addNote(note);
  };

  const refresh = async (): Promise<void> => {
    const { data } = await client.get<TastingNote[]>('/user-tasting-notes');
    setNotes(data || []);
  };

  const remove = async (note: TastingNote): Promise<void> => {
    await client.delete(`/user-tasting-notes/${note.id}`);
    const filteredNotes = notes.filter((x) => x.id !== note.id);
    setNotes(filteredNotes);
  };

  const addNote = async (note: TastingNote): Promise<TastingNote> => {
    const { data } = await client.post<TastingNote>('/user-tasting-notes', note);
    setNotes([...notes, data]);
    return data;
  };

  const updateNote = async (note: TastingNote): Promise<TastingNote> => {
    const { data } = await client.post(`/user-tasting-notes/${note.id!}`, note);
    const idx = notes.findIndex((x) => x.id === note.id);
    if (idx > -1) {
      notes[idx] = note;
      setNotes(notes);
    }
    return data;
  };

  return { notes, merge, refresh, remove };
};
