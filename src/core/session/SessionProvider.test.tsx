import { useContext } from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { SessionContext, SessionProvider } from './SessionProvider';
import { mockSession } from './__fixtures__/mockSession';
import { useSessionVault } from './SessionVaultProvider';

jest.mock('@capacitor/preferences');

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
  beforeEach(() => (useSessionVault as jest.Mock)().getSessionData.mockResolvedValue(undefined));

  it('displays the loader when initializing', async () => {
    render(ComponentTree);
    expect(screen.getByTestId(/initializing/)).toBeInTheDocument();
    expect(await screen.findByTestId(/session/)).toBeInTheDocument();
  });

  describe('when a session is stored', () => {
    beforeEach(() => (useSessionVault as jest.Mock)().getSessionData.mockResolvedValue(mockSession));
    it('obtains the token from storage', async () => {
      render(ComponentTree);
      await waitFor(() => expect(useSessionVault().getSessionData).toHaveBeenCalledTimes(1));
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
