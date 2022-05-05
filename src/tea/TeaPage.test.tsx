import React from 'react';
import { waitForIonicReact } from '@ionic/react-test-utils';
import { render, waitFor } from '@testing-library/react';
import TeaPage, { listToMatrix } from './TeaPage';
import { expectedTeas } from './__mocks__/mockTeas';

const mockTeas = expectedTeas;
jest.mock('./useTea', () => ({
  useTea: () => ({
    getTeas: jest.fn(() => Promise.resolve(mockTeas)),
    getTeaById: jest.fn(),
  }),
}));

describe('<TeaPage />', () => {
  it('displays the header', async () => {
    const { container } = render(<TeaPage />);
    await waitFor(() => waitForIonicReact());
    await waitFor(() => expect(container).toHaveTextContent(/Tea/));
  });

  it('renders consistently', async () => {
    const { asFragment, container } = render(<TeaPage />);
    await waitFor(() => waitForIonicReact());
    await waitFor(() => expect(container).toHaveTextContent(/Tea/));
    expect(asFragment()).toMatchSnapshot();
  });

  describe('initialization', () => {
    it('makes a tea matrix', () => {
      const teaMatrix = [
        [expectedTeas[0], expectedTeas[1], expectedTeas[2], expectedTeas[3]],
        [expectedTeas[4], expectedTeas[5], expectedTeas[6], expectedTeas[7]],
      ];
      expect(listToMatrix(expectedTeas)).toEqual(teaMatrix);
    });
  });
});
