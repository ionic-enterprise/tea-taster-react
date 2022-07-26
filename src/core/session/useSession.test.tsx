import axios from 'axios';
import { renderHook, act } from '@testing-library/react-hooks';
import { useSession } from './useSession';
import { SessionProvider } from './SessionProvider';
import { mockSession } from './__fixtures__/mockSession';
import { useSessionVault } from './SessionVaultProvider';

jest.mock('@capacitor/preferences');
jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

const wrapper = ({ children }: any) => <SessionProvider>{children}</SessionProvider>;

describe('useSession()', () => {
  describe('login', () => {
    beforeEach(() => {
      const { token, user } = mockSession;
      mockedAxios.post.mockResolvedValue({ data: { success: true, token, user } });
    });

    it('POSTs the login request', async () => {
      const url = `${process.env.REACT_APP_DATA_SERVICE}/login`;
      const { result, waitForNextUpdate } = renderHook(() => useSession(), { wrapper });
      await waitForNextUpdate();
      await act(() => result.current.login('test@test.com', 'P@ssword!'));
      expect(mockedAxios.post).toHaveBeenCalledTimes(1);
      const [username, password] = ['test@test.com', 'P@ssword!'];
      expect(mockedAxios.post).toHaveBeenCalledWith(url, { username, password });
    });

    describe('on success', () => {
      it('stores the session in the vault', async () => {
        const { result, waitForNextUpdate } = renderHook(() => useSession(), { wrapper });
        await waitForNextUpdate();
        await act(() => result.current.login('test@test.com', 'P@ssword!'));
        expect(useSessionVault().setSessionData).toHaveBeenCalledTimes(1);
        expect(useSessionVault().setSessionData).toHaveBeenCalledWith(mockSession);
      });

      it('sets the session', async () => {
        const { result, waitForNextUpdate } = renderHook(() => useSession(), { wrapper });
        await waitForNextUpdate();
        await act(() => result.current.login('test@test.com', 'P@ssword!'));
        expect(result.current.session).toEqual(mockSession);
      });
    });

    describe('on failure', () => {
      beforeEach(() => mockedAxios.post.mockResolvedValue({ data: { success: false } }));

      it('sets an error', async () => {
        const { result, waitForNextUpdate } = renderHook(() => useSession(), { wrapper });
        await waitForNextUpdate();
        await act(() => result.current.login('test@test.com', 'P@ssword!'));
        expect(result.current.error).toEqual('Failed to log in.');
      });
    });
  });

  describe('logout', () => {
    beforeEach(() => (useSessionVault as jest.Mock)().getSessionData.mockResolvedValue(mockSession));

    it('POSTs the logout request', async () => {
      const url = `${process.env.REACT_APP_DATA_SERVICE}/logout`;
      const headers = { Authorization: 'Bearer ' + mockSession.token };
      const { result, waitForNextUpdate } = renderHook(() => useSession(), { wrapper });
      await waitForNextUpdate();
      await act(() => result.current.logout());
      expect(mockedAxios.post).toHaveBeenCalledTimes(1);
      expect(mockedAxios.post).toHaveBeenCalledWith(url, null, { headers });
    });

    describe('on success', () => {
      it('removes the session from the vault', async () => {
        const { result, waitForNextUpdate } = renderHook(() => useSession(), { wrapper });
        await waitForNextUpdate();
        await act(() => result.current.logout());
        expect(useSessionVault().clearSessionData).toHaveBeenCalledTimes(1);
      });

      it('clears the session', async () => {
        const { result, waitForNextUpdate } = renderHook(() => useSession(), { wrapper });
        await waitForNextUpdate();
        await act(() => result.current.logout());
        expect(result.current.session).toBeUndefined();
      });
    });

    describe('on failure', () => {
      it('sets an error', async () => {
        mockedAxios.post.mockImplementationOnce(() => {
          throw new Error('Failed to log out');
        });
        const { result, waitForNextUpdate } = renderHook(() => useSession(), { wrapper });
        await waitForNextUpdate();
        await act(() => result.current.logout());
        expect(result.current.error).toEqual('Failed to log out');
      });
    });
  });

  describe('invalidate', () => {
    beforeEach(() => (useSessionVault as jest.Mock)().getSessionData.mockResolvedValue(mockSession));

    it('removes the session from the vault', async () => {
      const { result, waitForNextUpdate } = renderHook(() => useSession(), { wrapper });
      await waitForNextUpdate();
      await act(() => result.current.invalidate());
      expect(useSessionVault().clearSessionData).toHaveBeenCalledTimes(1);
    });

    it('clears the session', async () => {
      const { result, waitForNextUpdate } = renderHook(() => useSession(), { wrapper });
      await waitForNextUpdate();
      await act(() => result.current.invalidate());
      expect(result.current.session).toBeUndefined();
    });
  });

  describe('restoreSession', () => {
    describe('on success', () => {
      beforeEach(() => (useSessionVault as jest.Mock)().getSessionData.mockResolvedValue(mockSession));

      it('gets the session from the vault', async () => {
        const { result, waitForNextUpdate } = renderHook(() => useSession(), { wrapper });
        await waitForNextUpdate();
        await act(() => result.current.restoreSession());
        // This method is called once in the provider, so it will be called twice overall.
        expect(useSessionVault().getSessionData).toHaveBeenCalledTimes(2);
      });

      it('sets the session', async () => {
        const { result, waitForNextUpdate } = renderHook(() => useSession(), { wrapper });
        await waitForNextUpdate();
        await act(() => result.current.restoreSession());
        expect(result.current.session).toEqual(mockSession);
      });
    });

    describe('on failure', () => {
      beforeEach(() => (useSessionVault as jest.Mock)().getSessionData.mockResolvedValue(undefined));

      it('gets the session from the vault', async () => {
        const { result, waitForNextUpdate } = renderHook(() => useSession(), { wrapper });
        await waitForNextUpdate();
        await act(() => result.current.restoreSession());
        // This method is called once in the provider, so it will be called twice overall.
        expect(useSessionVault().getSessionData).toHaveBeenCalledTimes(2);
      });

      it('sets the session', async () => {
        const { result, waitForNextUpdate } = renderHook(() => useSession(), { wrapper });
        await waitForNextUpdate();
        await act(() => result.current.restoreSession());
        expect(result.current.session).toBeUndefined();
      });
    });
  });

  afterEach(() => jest.restoreAllMocks());
});
