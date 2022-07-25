import axios from 'axios';
import { renderHook, act } from '@testing-library/react-hooks';
import { TastingNotesProvider, useTastingNotes } from './TastingNotesProvider';
import { mockNotes } from './__fixtures__/mockNotes';

jest.mock('axios');
var mockedAxios = axios as jest.Mocked<typeof axios>;
jest.mock('../core/session/AuthInterceptorProvider', () => ({
  useAuthInterceptor: () => ({ api: mockedAxios }),
}));

const wrapper = ({ children }: any) => <TastingNotesProvider>{children}</TastingNotesProvider>;

describe('useTastingNotes()', () => {
  describe('gets all notes', () => {
    beforeEach(() => mockedAxios.get.mockResolvedValue({ data: mockNotes }));

    it('GETs tasting notes from the backend', async () => {
      const { result } = renderHook(() => useTastingNotes(), { wrapper });
      await act(async () => await result.current.getNotes());
      expect(mockedAxios.get).toHaveBeenCalledWith('/user-tasting-notes');
    });

    it('sets notes state', async () => {
      const { result } = renderHook(() => useTastingNotes(), { wrapper });
      await act(async () => await result.current.getNotes());
      expect(result.current.notes).toEqual(mockNotes.reverse());
    });
  });

  describe('delete a note', () => {
    beforeEach(() => mockedAxios.delete.mockResolvedValue({}));

    it('DELETEs a single note', async () => {
      const { result } = renderHook(() => useTastingNotes(), { wrapper });
      await act(async () => await result.current.deleteNote(4));
      expect(mockedAxios.delete).toHaveBeenCalledTimes(1);
      expect(mockedAxios.delete).toHaveBeenCalledWith('/user-tasting-notes/4');
    });
  });

  describe('save a note', () => {
    beforeEach(() => mockedAxios.post.mockResolvedValue({}));

    it('POSTs a single note', async () => {
      const { result } = renderHook(() => useTastingNotes(), { wrapper });
      await act(async () => await result.current.saveNote(mockNotes[0]));
      expect(mockedAxios.post).toHaveBeenCalledTimes(1);
      expect(mockedAxios.post).toHaveBeenCalledWith('/user-tasting-notes/42', mockNotes[0]);
    });
  });

  afterEach(() => jest.restoreAllMocks());
});
