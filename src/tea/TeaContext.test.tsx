import React, { useContext, useState } from 'react';
import { render, cleanup, waitForElement, wait } from '@testing-library/react';
import { ionFireEvent as fireEvent } from '@ionic/react-test-utils';

import { mockTeas } from './__mocks__/mockTeas';
import { TeaContext, TeaProvider } from './TeaContext';
import { Tea } from '../shared/models';
import { Plugins } from '@capacitor/core';

const mockAxios: any = jest.genMockFromModule('axios');
jest.mock('../core/auth/useAuthInterceptor', () => ({
  useAuthInterceptor: () => ({ instance: mockAxios }),
}));

const MockConsumer: React.FC = () => {
  const { teas, getTeaById } = useContext(TeaContext);
  const [tea, setTea] = useState<Tea | undefined>(undefined);

  return (
    <>
      <div data-testid="teas">{JSON.stringify(teas)}</div>
      <div data-testid="tea">{JSON.stringify(tea)}</div>
      <button onClick={() => setTea(getTeaById(4))}>Get Valid Tea</button>
      <button onClick={() => setTea(getTeaById(32))}>Get Invalid Tea</button>
    </>
  );
};

const ComponentTree = (
  <TeaProvider>
    <MockConsumer />
  </TeaProvider>
);

describe('<TeaProvider />', () => {
  beforeEach(() => {
    (mockAxios.get as any) = jest.fn(async () => ({ data: mockTeas }));
    (Plugins.Storage.get as any) = jest.fn(({ key }: { key: string }) => {
      switch (key) {
        case 'rating1':
          return Promise.resolve({ value: 1 });
        case 'rating2':
          return Promise.resolve({ value: 2 });
        case 'rating3':
          return Promise.resolve({ value: 3 });
        case 'rating4':
          return Promise.resolve({ value: 4 });
        case 'rating5':
          return Promise.resolve({ value: 5 });
        case 'rating6':
          return Promise.resolve({ value: 0 });
        case 'rating7':
          return Promise.resolve({ value: 0 });
        case 'rating8':
          return Promise.resolve({ value: 0 });
        default:
          return Promise.resolve();
      }
    });
  });

  describe('initialization', () => {
    it('fetches the list of teas', async () => {
      const { getByTestId } = render(ComponentTree);
      const teas = await waitForElement(() => getByTestId('teas'));
      expect(teas.textContent).toEqual(JSON.stringify(mockTeas));
    });
  });

  describe('get a single tea entry', () => {
    it('should return a Tea object for a tea with a valid ID', async () => {
      const { getByTestId, getByText } = render(ComponentTree);
      const [tea, button] = await waitForElement(() => [
        getByTestId('tea'),
        getByText(/Get Valid Tea/),
      ]);
      await wait(() => fireEvent.click(button));
      expect(tea.textContent).toBe(JSON.stringify(mockTeas[3]));
    });

    it('should return undefined for an invalid ID', async () => {
      const { getByTestId, getByText } = render(ComponentTree);
      const [tea, button] = await waitForElement(() => [
        getByTestId('tea'),
        getByText(/Get Invalid Tea/),
      ]);
      await wait(() => fireEvent.click(button));
      expect(tea.textContent).toBe('');
    });
  });

  describe('save a single tea entry', () => {
    beforeEach(() => {});
  });

  afterEach(() => {
    cleanup();
    jest.restoreAllMocks();
  });
});
