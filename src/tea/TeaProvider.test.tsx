import { vi, Mock } from 'vitest';
import { render, renderHook, waitFor } from '@testing-library/react';
import { GetOptions, Preferences } from '@capacitor/preferences';
import { client } from '../api/backend-api';
import { Tea } from '../models';
import TeaProvider, { useTea } from './TeaProvider';

vi.mock('@capacitor/preferences');
vi.mock('../api/backend-api');

const MockChildComponent = () => {
  const { teas } = useTea();
  return <div data-testid="teas">{JSON.stringify(teas)}</div>;
};

const mockComponent = (
  <TeaProvider>
    <MockChildComponent />
  </TeaProvider>
);

describe('TeaProvider', () => {
  let expectedTeas: Tea[];
  let httpResultTeas: Omit<Tea, 'image' | 'rating'>[];

  beforeEach(() => {
    initializeTestData();
    vi.clearAllMocks();
    (client.get as Mock).mockResolvedValue({ data: [] });
    (Preferences.get as Mock).mockImplementation(async (opt: GetOptions) => {
      switch (opt.key) {
        case 'rating1':
          return { value: '3' };
        case 'rating3':
          return { value: '4' };
        case 'rating5':
          return { value: '2' };
        default:
          return { value: null };
      }
    });
  });

  describe('loadTeas', () => {
    it('gets the tea categories', async () => {
      render(mockComponent);
      await waitFor(() => expect(client.get).toHaveBeenCalledTimes(1));
      expect(client.get).toHaveBeenCalledWith('/tea-categories');
    });

    it('transforms the tea data', async () => {
      (client.get as Mock).mockResolvedValue({ data: httpResultTeas });
      const { getByTestId } = render(mockComponent);
      await waitFor(() => expect(JSON.parse(getByTestId('teas').textContent || '')).toEqual(expectedTeas));
    });
  });

  describe('rate', () => {
    const wrapper = ({ children }: any) => <TeaProvider>{children}</TeaProvider>;

    beforeEach(() => (client.get as Mock).mockResolvedValue({ data: httpResultTeas }));

    it('saves the rating', async () => {
      const { result } = await waitFor(() => renderHook(() => useTea(), { wrapper }));
      await waitFor(() => result.current.rate(5, 4));
      expect(Preferences.set).toHaveBeenCalledTimes(1);
      expect(Preferences.set).toHaveBeenCalledWith({ key: 'rating5', value: '4' });
    });

    it('updates the tea array', async () => {
      const { result } = await waitFor(() => renderHook(() => useTea(), { wrapper }));
      await waitFor(() => result.current.rate(5, 4));
      const tea = result.current.teas.find((x) => x.id === 5);
      expect(tea?.rating).toBe(4);
    });
  });

  const initializeTestData = () => {
    expectedTeas = [
      {
        id: 1,
        name: 'Green',
        description: 'Green tea description.',
        image: '/assets/images/green.jpg',
        rating: 3,
      },
      {
        id: 2,
        name: 'Black',
        description: 'Black tea description.',
        image: '/assets/images/black.jpg',
        rating: 0,
      },
      {
        id: 3,
        name: 'Herbal',
        description: 'Herbal Infusion description.',
        image: '/assets/images/herbal.jpg',
        rating: 4,
      },
      {
        id: 4,
        name: 'Oolong',
        description: 'Oolong tea description.',
        image: '/assets/images/oolong.jpg',
        rating: 0,
      },
      {
        id: 5,
        name: 'Dark',
        description: 'Dark tea description.',
        image: '/assets/images/dark.jpg',
        rating: 2,
      },
      {
        id: 6,
        name: 'Puer',
        description: 'Puer tea description.',
        image: '/assets/images/puer.jpg',
        rating: 0,
      },
      {
        id: 7,
        name: 'White',
        description: 'White tea description.',
        image: '/assets/images/white.jpg',
        rating: 0,
      },
      {
        id: 8,
        name: 'Yellow',
        description: 'Yellow tea description.',
        image: '/assets/images/yellow.jpg',
        rating: 0,
      },
    ];
    httpResultTeas = expectedTeas.map((t: Tea) => {
      /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
      const { rating, image, ...tea } = { ...t };
      return tea;
    });
  };
});
