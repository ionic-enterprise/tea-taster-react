import { Mock, vi } from 'vitest';
import { act, renderHook, waitFor } from '@testing-library/react';
import AuthProvider, { useAuth } from './AuthProvider';
import { registerCallback } from '../utils/session-vault';

vi.mock('../utils/session-vault');
vi.mock('../utils/auth');

describe('<AuthProvider />', () => {
  const wrapper = ({ children }: any) => <AuthProvider>{children}</AuthProvider>;
  const testSession = {
    accessToken: 'test-access-token',
    refreshToken: 'test-refresh-token',
    idToken: 'test-id-token',
  };

  beforeEach(() => vi.clearAllMocks());

  describe('when the session changes ', () => {
    const registerCallbackMock = vi.fn();
    beforeEach(() => (registerCallback as Mock).mockImplementation(registerCallbackMock));

    it('updates the session state', async () => {
      const { result } = await waitFor(() => renderHook(() => useAuth(), { wrapper }));
      expect(result.current.session).toBeUndefined();
      act(() => registerCallbackMock.mock.calls[0][1](testSession));
      expect(result.current.session).toEqual(testSession);
      act(() => registerCallbackMock.mock.calls[0][1](undefined));
      expect(result.current.session).toEqual(undefined);
    });
  });
});
