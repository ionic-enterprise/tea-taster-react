import { vi, Mock } from 'vitest';
import { render, renderHook, waitFor } from '@testing-library/react';
import { client } from '../api/backend-api';
import { TastingNote } from '../models';
import { useTastingNotes } from './useTastingNotes';

vi.mock('../api/backend-api');

describe('useTastingNotes', () => {
  let tastingNotes: TastingNote[];

  const initializeTestData = () => {
    tastingNotes = [
      {
        id: 1,
        brand: 'Lipton',
        name: 'Green',
        notes: 'Bland and dull, but better than their standard tea',
        rating: 2,
        teaCategoryId: 1,
      },
      {
        id: 3,
        brand: 'Rishi',
        name: 'Puer Tuo Cha',
        notes: 'Earthy with a bold a full flavor',
        rating: 5,
        teaCategoryId: 6,
      },
      {
        id: 42,
        brand: 'Rishi',
        name: 'Elderberry Healer',
        notes: 'Elderberry and ginger. Strong and healthy.',
        rating: 4,
        teaCategoryId: 7,
      },
    ];
  };

  beforeEach(() => {
    initializeTestData();
    vi.clearAllMocks();
    (client.get as Mock).mockResolvedValue({ data: tastingNotes });
  });

  describe('refresh', () => {
    it('gets the user tasting notes', async () => {
      const { result } = renderHook(() => useTastingNotes());
      await waitFor(() => result.current.refresh());
      expect(client.get).toBeCalledTimes(1);
      expect(client.get).toHaveBeenCalledWith('/user-tasting-notes');
    });

    it('sets the notes data', async () => {
      const { result } = renderHook(() => useTastingNotes());
      await waitFor(() => result.current.refresh());
      expect(result.current.notes).toEqual(tastingNotes);
    });
  });

  describe('merge', () => {
    describe('a new note', () => {
      let note: TastingNote = {
        brand: 'Lipton',
        name: 'Yellow Label',
        notes: 'Overly acidic, highly tannic flavor',
        rating: 1,
        teaCategoryId: 3,
      };

      beforeEach(() => (client.post as Mock).mockResolvedValue({ data: { id: 73, ...note } }));

      it('posts the new note', async () => {
        const { result } = renderHook(() => useTastingNotes());
        await waitFor(() => result.current.merge(note));
        expect(client.post).toHaveBeenCalledTimes(1);
        expect(client.post).toHaveBeenCalledWith('/user-tasting-notes', note);
      });

      it('resolves the saved note', async () => {
        const { result } = renderHook(() => useTastingNotes());
        const data = await waitFor(() => result.current.merge(note));
        expect(data).toEqual({ id: 73, ...note });
      });

      it('adds the note to the notes list', async () => {
        const { result } = renderHook(() => useTastingNotes());
        await waitFor(() => result.current.refresh());
        await waitFor(() => result.current.merge(note));
        expect(result.current.notes).toHaveLength(4);
        expect(result.current.notes[3]).toEqual({ id: 73, ...note });
      });
    });

    describe('an existing note', () => {
      let note: TastingNote = {
        id: 1,
        brand: 'Lipton',
        name: 'Green Tea',
        notes: 'Kinda like Lite beer. Dull, but well executed.',
        rating: 3,
        teaCategoryId: 1,
      };

      beforeEach(() => (client.post as Mock).mockResolvedValue({ data: note }));

      it('posts the new note', async () => {
        const { result } = renderHook(() => useTastingNotes());
        await waitFor(() => result.current.merge(note));
        expect(client.post).toHaveBeenCalledTimes(1);
        expect(client.post).toHaveBeenCalledWith('/user-tasting-notes/1', note);
      });

      it('resolves the saved note', async () => {
        const { result } = renderHook(() => useTastingNotes());
        const data = await waitFor(() => result.current.merge(note));
        expect(data).toEqual(note);
      });

      it('updates the note to the notes list', async () => {
        const { result } = renderHook(() => useTastingNotes());
        await waitFor(() => result.current.refresh());
        await waitFor(() => result.current.merge(note));
        expect(result.current.notes).toHaveLength(3);
        expect(result.current.notes[0]).toEqual(note);
      });
    });

    describe('remove', () => {
      it('deletes the new note', async () => {
        const { result } = renderHook(() => useTastingNotes());
        await waitFor(() => result.current.refresh());
        await waitFor(() => result.current.remove(tastingNotes[0]));
        expect(client.delete).toHaveBeenCalledTimes(1);
        expect(client.delete).toHaveBeenCalledWith('/user-tasting-notes/1');
      });

      it('removes the note from the notes list', async () => {
        const { result } = renderHook(() => useTastingNotes());
        await waitFor(() => result.current.refresh());
        await waitFor(() => result.current.remove(tastingNotes[0]));
        expect(result.current.notes).toHaveLength(2);
        expect(result.current.notes).toEqual([tastingNotes[1], tastingNotes[2]]);
      });
    });
  });
});
