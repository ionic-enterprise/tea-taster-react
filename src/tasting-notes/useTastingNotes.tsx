import { useCallback } from 'react';
import { useAuthInterceptor } from '../core/auth';
import { TastingNote } from '../shared/models';

export const useTastingNotes = () => {
  const { instance } = useAuthInterceptor();

  const getNotes = useCallback(async (): Promise<Array<TastingNote>> => {
    const url = `/user-tasting-notes`;
    const { data } = await instance.get(url);
    return data;
  }, [instance]);

  const getNoteById = useCallback(
    async (id: number): Promise<TastingNote> => {
      const url = `/user-tasting-notes/${id}`;
      const { data } = await instance.get(url);
      return data;
    },
    [instance],
  );

  const deleteNote = async (id: number): Promise<void> => {
    const url = `/user-tasting-notes/${id}`;
    await instance.delete(url);
  };

  const saveNote = async (note: TastingNote) => {
    let url = `/user-tasting-notes`;
    if (note.id) url += `/${note.id}`;
    await instance.post(url, note);
  };

  return { getNotes, getNoteById, deleteNote, saveNote };
};
