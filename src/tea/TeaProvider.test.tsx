import { vi, Mock } from 'vitest';
import { render, waitFor } from '@testing-library/react';
import { client } from '../api/backend-api';
import { Tea } from '../models';
import TeaProvider, { useTea } from './TeaProvider';

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
  let httpResultTeas: Omit<Tea, 'image'>[];

  beforeEach(() => {
    initializeTestData();
    vi.resetAllMocks();
    (client.get as Mock).mockResolvedValue({ data: [] });
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

  const initializeTestData = () => {
    expectedTeas = [
      {
        id: 1,
        name: 'Green',
        description: 'Green tea description.',
        image: '/assets/images/green.jpg',
      },
      {
        id: 2,
        name: 'Black',
        description: 'Black tea description.',
        image: '/assets/images/black.jpg',
      },
      {
        id: 3,
        name: 'Herbal',
        description: 'Herbal Infusion description.',
        image: '/assets/images/herbal.jpg',
      },
      {
        id: 4,
        name: 'Oolong',
        description: 'Oolong tea description.',
        image: '/assets/images/oolong.jpg',
      },
      {
        id: 5,
        name: 'Dark',
        description: 'Dark tea description.',
        image: '/assets/images/dark.jpg',
      },
      {
        id: 6,
        name: 'Puer',
        description: 'Puer tea description.',
        image: '/assets/images/puer.jpg',
      },
      {
        id: 7,
        name: 'White',
        description: 'White tea description.',
        image: '/assets/images/white.jpg',
      },
      {
        id: 8,
        name: 'Yellow',
        description: 'Yellow tea description.',
        image: '/assets/images/yellow.jpg',
      },
    ];
    httpResultTeas = expectedTeas.map((t: Tea) => {
      /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
      const { image, ...tea } = { ...t };
      return tea;
    });
  };
});
