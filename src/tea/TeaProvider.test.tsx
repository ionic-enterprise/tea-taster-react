import axios from 'axios';
import { renderHook } from '@testing-library/react-hooks';
import { TeaProvider, useTea } from './TeaProvider';
import { resultTeas, expectedTeas } from './__fixtures__/mockTeas';

jest.mock('axios');
var mockedAxios = axios as jest.Mocked<typeof axios>;

jest.mock('../core/session/AuthInterceptorProvider', () => ({
  useAuthInterceptor: () => ({ api: mockedAxios }),
}));

const wrapper = ({ children }: any) => <TeaProvider>{children}</TeaProvider>;

describe('useTea()', () => {
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

  afterEach(() => jest.restoreAllMocks());
});
