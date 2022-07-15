import axios from 'axios';
import { Preferences } from '@capacitor/preferences';
import { renderHook, act, cleanup } from '@testing-library/react-hooks';
import { useSession } from './useSession';
import { SessionProvider } from './SessionProvider';
import { mockSession } from './__fixtures__/mockSession';

jest.mock('@capacitor/preferences');
jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

const wrapper = ({ children }: any) => <SessionProvider>{children}</SessionProvider>;

describe('useSession()', () => {
  beforeEach(() => {
    Preferences.get = jest.fn(async () => ({ value: null }));
    Preferences.set = jest.fn(async () => void 0);
    const { token, user } = mockSession;
    mockedAxios.post.mockResolvedValue({ data: { success: true, token, user } });
  });

  describe('login', () => {
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
      it('stores the token in storage', async () => {
        const { result, waitForNextUpdate } = renderHook(() => useSession(), { wrapper });
        await waitForNextUpdate();
        await act(() => result.current.login('test@test.com', 'P@ssword!'));
        expect(Preferences.set).toHaveBeenCalledTimes(1);
        expect(Preferences.set).toHaveBeenCalledWith({ key: 'auth-token', value: mockSession.token });
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
    beforeEach(() => {
      Preferences.remove = jest.fn(async () => void 0);
      Preferences.get = jest.fn(async () => ({ value: mockSession.token }));
      mockedAxios.get.mockResolvedValue({ data: mockSession.user });
    });

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
      it('removes the token from storage', async () => {
        const { result, waitForNextUpdate } = renderHook(() => useSession(), { wrapper });
        await waitForNextUpdate();
        await act(() => result.current.logout());
        expect(Preferences.remove).toHaveBeenCalledTimes(1);
        expect(Preferences.remove).toHaveBeenCalledWith({ key: 'auth-token' });
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
    beforeEach(() => {
      Preferences.remove = jest.fn(async () => void 0);
      Preferences.set = jest.fn(async () => void 0);
      const { token, user } = mockSession;
      mockedAxios.post.mockResolvedValue({ data: { success: true, token, user } });
    });

    it('removes the token from storage', async () => {
      const { result, waitForNextUpdate } = renderHook(() => useSession(), { wrapper });
      await waitForNextUpdate();
      await act(() => result.current.login('test@ionic.io', 'P@ssword!'));
      await act(() => result.current.invalidate());
      expect(Preferences.remove).toHaveBeenCalledTimes(1);
      expect(Preferences.remove).toHaveBeenCalledWith({ key: 'auth-token' });
    });

    it('clears the session', async () => {
      const { result, waitForNextUpdate } = renderHook(() => useSession(), { wrapper });
      await waitForNextUpdate();
      await act(() => result.current.login('test@ionic.io', 'P@ssword!'));
      await act(() => result.current.invalidate());
      expect(result.current.session).toBeUndefined();
    });
  });

  afterEach(() => jest.restoreAllMocks());
});
