import { useContext } from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { Preferences } from '@capacitor/preferences';
import axios from 'axios';
import { SessionContext, SessionProvider } from './SessionProvider';
import { mockSession } from './__fixtures__/mockSession';

jest.mock('@capacitor/preferences');
jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

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
  beforeEach(() => (Preferences.get = jest.fn(async () => ({ value: null }))));

  it('displays the loader when initializing', async () => {
    render(ComponentTree);
    expect(screen.getByTestId(/initializing/)).toBeInTheDocument();
    expect(await screen.findByTestId(/session/)).toBeInTheDocument();
  });

  describe('when a token is stored', () => {
    beforeEach(() => {
      Preferences.get = jest.fn(async () => ({ value: mockSession.token }));
      mockedAxios.get.mockResolvedValue({ data: mockSession.user });
    });

    it('obtains the token from storage', async () => {
      render(ComponentTree);
      await waitFor(() => expect(Preferences.get).toHaveBeenCalledTimes(1));
      expect(Preferences.get).toHaveBeenCalledWith({ key: 'auth-token' });
    });

    it('GETs the user profile', async () => {
      render(ComponentTree);
      const headers = { Authorization: 'Bearer ' + mockSession.token };
      const url = `${process.env.REACT_APP_DATA_SERVICE}/users/current`;
      await waitFor(() => expect(mockedAxios.get).toHaveBeenCalledTimes(1));
      expect(mockedAxios.get).toHaveBeenCalledWith(url, { headers });
    });

    it('sets the session', async () => {
      render(ComponentTree);
      const session = await screen.findByTestId(/session/);
      expect(session.textContent).toEqual(JSON.stringify(mockSession));
    });
  });

  describe('when a token is not stored', () => {
    it('does not set the session', async () => {
      render(ComponentTree);
      const session = await screen.findByTestId(/session/);
      expect(session.textContent).toEqual('');
    });
  });

  afterEach(() => jest.restoreAllMocks());
});
