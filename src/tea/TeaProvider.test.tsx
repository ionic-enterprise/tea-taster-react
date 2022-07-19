import axios from 'axios';
import { renderHook, act } from '@testing-library/react-hooks';
import { TeaProvider, useTea } from './TeaProvider';
import { resultTeas, expectedTeas } from './__fixtures__/mockTeas';
import { Preferences } from '@capacitor/preferences';

jest.mock('axios');
var mockedAxios = axios as jest.Mocked<typeof axios>;
jest.mock('../core/session/AuthInterceptorProvider', () => ({
  useAuthInterceptor: () => ({ api: mockedAxios }),
}));
jest.mock('@capacitor/preferences');

const wrapper = ({ children }: any) => <TeaProvider>{children}</TeaProvider>;

describe('useTea()', () => {
  beforeEach(
    () =>
      (Preferences.get = jest.fn(async ({ key }) => {
        switch (key) {
          case 'rating1':
            return { value: '1' };
          case 'rating2':
            return { value: '2' };
          case 'rating3':
            return { value: '3' };
          case 'rating4':
            return { value: '4' };
          case 'rating5':
            return { value: '5' };
          case 'rating6':
            return { value: '0' };
          case 'rating7':
            return { value: '1' };
          case 'rating8':
            return { value: '0' };
          default:
            return { value: '0' };
        }
      }))
  );

  describe('get all teas', () => {
    beforeEach(() => mockedAxios.get.mockResolvedValue({ data: resultTeas() }));

    it('GETs the teas from the backend', async () => {
      const { waitForNextUpdate } = renderHook(() => useTea(), { wrapper });
      await waitForNextUpdate();
      expect(mockedAxios.get).toHaveBeenCalledWith('/tea-categories');
    });

    it('adds an image to each tea item', async () => {
      const { result, waitForNextUpdate } = renderHook(() => useTea(), { wrapper });
      await waitForNextUpdate();
      expect(result.current.teas).toEqual(expectedTeas);
    });
  });

  describe('save tea', () => {
    beforeEach(() => {
      mockedAxios.get.mockResolvedValue({ data: resultTeas() });
      Preferences.set = jest.fn();
    });

    it('saves the rating', async () => {
      const tea = { ...expectedTeas[4], rating: 1 };
      const { result, waitForNextUpdate } = renderHook(() => useTea(), { wrapper });
      await waitForNextUpdate();
      await act(async () => await result.current.saveTea(tea));
      expect(Preferences.set).toHaveBeenCalledTimes(1);
      expect(Preferences.set).toHaveBeenCalledWith({ key: 'rating5', value: '1' });
      expect(result.current.teas.find((t) => t.id === tea.id)?.rating).toEqual(1);
    });
  });

  afterEach(() => jest.restoreAllMocks());
});
