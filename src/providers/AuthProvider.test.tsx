import { Mock, vi } from 'vitest';
import { act, render, renderHook, waitFor } from '@testing-library/react';
import { Session } from '../models';
import AuthProvider, { useAuth } from './AuthProvider';
import { getSession, registerCallback } from '../utils/session-vault';

vi.mock('../utils/session-vault');

describe('<AuthProvider />', () => {
  const wrapper = ({ children }: any) => <AuthProvider>{children}</AuthProvider>;
  const testSession: Session = {
    user: {
      id: 314159,
      firstName: 'Testy',
      lastName: 'McTest',
      email: 'test@test.com',
    },
    token: '123456789',
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
