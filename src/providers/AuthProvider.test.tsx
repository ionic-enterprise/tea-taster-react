import { Mock, vi } from 'vitest';
import { act, render, renderHook, waitFor } from '@testing-library/react';
import { Session } from '../models';
import AuthProvider, { useAuth } from './AuthProvider';
import { getSession, registerSessionChangeCallback, setSession } from '../utils/session';

vi.mock('../utils/session');

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

  describe('when rendered', () => {
    it('shows a spinner when checking for a session', async () => {
      const { container } = render(<AuthProvider />);
      await waitFor(() => expect(container.querySelectorAll('ion-spinner')).toHaveLength(1));
    });

    describe('if a session is found', () => {
      beforeEach(() => (getSession as Mock).mockResolvedValue(testSession));

      it('hides the spinner', async () => {
        const { container } = render(<AuthProvider />);
        await waitFor(() => expect(container.querySelectorAll('ion-spinner')).toHaveLength(0));
      });

      it('sets the session state', async () => {
        const { result } = await waitFor(() => renderHook(() => useAuth(), { wrapper }));
        expect(result.current.session).toEqual(testSession);
      });
    });

    describe('if a session is not found', () => {
      beforeEach(() => (getSession as Mock).mockResolvedValue(undefined));

      it('hides the spinner', async () => {
        const { container } = render(<AuthProvider />);
        await waitFor(() => expect(container.querySelectorAll('ion-spinner')).toHaveLength(0));
      });

      it('sets the session state to undefined', async () => {
        const { result } = await waitFor(() => renderHook(() => useAuth(), { wrapper }));
        expect(result.current.session).toEqual(undefined);
      });
    });
  });

  describe('when the session changes ', () => {
    const registerCallbackMock = vi.fn();
    beforeEach(() => (registerSessionChangeCallback as Mock).mockImplementation(registerCallbackMock));

    it('updates the session state', async () => {
      const { result } = await waitFor(() => renderHook(() => useAuth(), { wrapper }));
      expect(result.current.session).toBeUndefined();
      act(() => registerCallbackMock.mock.calls[0][0](testSession));
      expect(result.current.session).toEqual(testSession);
      act(() => registerCallbackMock.mock.calls[0][0](undefined));
      expect(result.current.session).toEqual(undefined);
    });
  });
});
