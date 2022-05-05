import { renderHook, act } from '@testing-library/react-hooks';
import { Storage } from '@capacitor/storage';
import { useTea } from './useTea';
import { Tea } from '../shared/models';
import { expectedTeas, resultTeas } from './__mocks__/mockTeas';

jest.mock('@capacitor/storage');

jest.mock('../core/auth/useAuthInterceptor', () => ({
  useAuthInterceptor: () => ({
    instance: {
      get: mockInstanceVerb,
    },
  }),
}));

let mockInstanceVerb = jest.fn();

describe('useTea', () => {
  beforeEach(() => {
    (Storage.get as any) = jest.fn(({ key }: { key: string }) => {
      switch (key) {
        case 'rating2':
          return Promise.resolve({ value: 1 });
        case 'rating3':
          return Promise.resolve({ value: 2 });
        case 'rating4':
          return Promise.resolve({ value: 3 });
        case 'rating5':
          return Promise.resolve({ value: 4 });
        case 'rating6':
          return Promise.resolve({ value: 5 });
        default:
          return Promise.resolve();
      }
    });
  });

  describe('get all teas', () => {
    beforeEach(() => {
      mockInstanceVerb = jest.fn(async () => ({ data: resultTeas() }));
    });

    it('gets the teas', async () => {
      const { result } = renderHook(() => useTea());
      await act(async () => {
        await result.current.getTeas();
      });
      expect(mockInstanceVerb).toHaveBeenCalledTimes(1);
    });

    it('adds an image to each tea item', async () => {
      let teas: Tea[] = [];
      const { result } = renderHook(() => useTea());
      await act(async () => {
        teas = await result.current.getTeas();
      });
      expect(teas).toEqual(expectedTeas);
    });
  });

  describe('get a specific tea', () => {
    beforeEach(() => {
      mockInstanceVerb = jest.fn(async () => ({ data: resultTeas()[0] }));
    });

    it('gets the specific tea', async () => {
      const { result } = renderHook(() => useTea());
      await act(async () => {
        await result.current.getTeaById(4);
      });
      expect(mockInstanceVerb).toBeCalledTimes(1);
    });

    it('adds an image to the tea item', async () => {
      let tea: Tea | undefined = undefined;
      const { result } = renderHook(() => useTea());
      await act(async () => {
        tea = await result.current.getTeaById(4);
      });
      expect(tea).toEqual(expectedTeas[0]);
    });
  });

  describe('save tea', () => {
    beforeEach(() => (Storage.set = jest.fn()));

    it('saves the rating', async () => {
      const tea = { ...expectedTeas[4] };
      tea.rating = 4;
      const { result } = renderHook(() => useTea());
      await act(async () => {
        await result.current.saveTea(tea);
      });
      expect(Storage.set).toHaveBeenCalledTimes(1);
      expect(Storage.set).toHaveBeenCalledWith({
        key: 'rating5',
        value: '4',
      });
    });
  });

  afterEach(() => jest.restoreAllMocks());
});
