import React, { useContext } from 'react';
import { waitForIonicReact } from '@ionic/react-test-utils';
import { render, waitFor } from '@testing-library/react';
import { SessionContext, SessionProvider } from './SessionContext';
import { mockSession } from './__mocks__/mockSession';
import { Storage } from '@capacitor/storage';
import Axios from 'axios';

jest.mock('@capacitor/storage');

const MockConsumer: React.FC = () => {
  const { state } = useContext(SessionContext);
  return <div data-testid="session">{JSON.stringify(state.session)}</div>;
};

const ComponentTree = (
  <SessionProvider>
    <MockConsumer />
  </SessionProvider>
);

describe('<SessionProvider />', () => {
  beforeEach(() => (Storage.get = jest.fn(async () => ({ value: null }))));

  it('displays the loader when initializing', async () => {
    const { getByTestId } = render(ComponentTree);
    expect(getByTestId(/initializing/)).toBeInTheDocument();
    await waitFor(() => expect(getByTestId(/session/)).toBeInTheDocument());
  });

  describe('when a token is stored', () => {
    beforeEach(() => {
      Storage.get = jest.fn(async () => ({ value: mockSession.token }));
      (Axios.get as any) = jest.fn(async () => ({ data: mockSession.user }));
    });

    it('obtains the token from storage', async () => {
      render(ComponentTree);
      await waitFor(() => {
        expect(Storage.get).toHaveBeenCalledTimes(1);
        expect(Storage.get).toHaveBeenCalledWith({ key: 'auth-token' });
      });
    });

    it('GETs the user profile', async () => {
      render(ComponentTree);
      const headers = { Authorization: 'Bearer ' + mockSession.token };
      const url = `${process.env.REACT_APP_DATA_SERVICE}/users/current`;
      await waitFor(() => {
        expect(Axios.get).toHaveBeenCalledTimes(1);
        expect(Axios.get).toHaveBeenCalledWith(url, { headers });
      });
    });

    it('sets the session', async () => {
      const { getByTestId } = render(ComponentTree);
      const session = await waitFor(() => getByTestId('session'));
      expect(session.textContent).toEqual(JSON.stringify(mockSession));
    });
  });

  describe('when a token is not stored', () => {
    it('does not set the session', async () => {
      const { getByTestId } = render(ComponentTree);
      const session = await waitFor(() => getByTestId('session'));
      expect(session.textContent).toEqual('');
    });
  });

  afterEach(() => jest.restoreAllMocks());
});
