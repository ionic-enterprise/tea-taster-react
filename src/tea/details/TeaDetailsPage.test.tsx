import React from 'react';
import { waitForIonicReact } from '@ionic/react-test-utils';
import { render, waitFor } from '@testing-library/react';
import TeaDetailsPage from './TeaDetailsPage';
import { expectedTeas } from '../__mocks__/mockTeas';

jest.mock('react-router', () => ({
  useParams: () => ({
    id: '1',
  }),
}));

const mockTea = expectedTeas[0];
jest.mock('../useTea', () => ({
  useTea: () => ({
    getTeas: jest.fn(),
    getTeaById: jest.fn(() => Promise.resolve(mockTea)),
  }),
}));

describe('<TeaDetailsPage />', () => {
  it('displays the header', async () => {
    const { container } = render(<TeaDetailsPage />);
    await waitFor(() => waitForIonicReact());
    await waitFor(() => expect(container).toHaveTextContent(/Details/));
  });

  it('renders consistently', async () => {
    const { asFragment, container } = render(<TeaDetailsPage />);
    await waitFor(() => waitForIonicReact());
    await waitFor(() => expect(container).toHaveTextContent(mockTea.description));
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders the tea name', async () => {
    const { container } = render(<TeaDetailsPage />);
    await waitFor(() => waitForIonicReact());
    await waitFor(() => expect(container).toHaveTextContent(mockTea.name));
  });

  it('renders the tea description', async () => {
    const { container } = render(<TeaDetailsPage />);
    await waitFor(() => waitForIonicReact());
    await waitFor(() => expect(container).toHaveTextContent(mockTea.description));
  });
});
