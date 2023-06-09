import { Mock, vi } from 'vitest';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import LoginPage from './LoginPage';
import { useHistory } from 'react-router-dom';
import { login } from '../../utils/auth';

vi.mock('react-router-dom');
vi.mock('../../utils/auth');

describe('<LoginPage />', () => {
  beforeEach(() => vi.clearAllMocks());

  it('renders consistently', () => {
    const { asFragment } = render(<LoginPage />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('displays the title', () => {
    render(<LoginPage />);
    const titleElements = screen.getAllByText('Login');
    expect(titleElements).toHaveLength(2);
  });

  describe('sign in button', () => {
    it('starts disabled', async () => {
      render(<LoginPage />);
      const button = await waitFor(() => screen.getByText('Sign In') as HTMLIonButtonElement);
      expect(button.disabled).toBeTruthy();
    });

    it('is enabled once valid data is entered', async () => {
      render(<LoginPage />);
      const button = await waitFor(() => screen.getByText('Sign In') as HTMLIonButtonElement);
      const password = await waitFor(() => screen.getByLabelText('Password'));
      const email = await waitFor(() => screen.getByLabelText('Email Address'));
      expect(button.disabled).toBeTruthy();
      await waitFor(() => fireEvent.input(email, { target: { value: 'test@test.com' } }));
      expect(button.disabled).toBeTruthy();
      await waitFor(() => fireEvent.input(password, { target: { value: 'password' } }));
      expect(button.disabled).toBeFalsy();
    });

    describe('clicking the sign in button', () => {
      const errorMessage = 'Invalid email and/or password';

      beforeEach(async () => {
        render(<LoginPage />);
        const email = await waitFor(() => screen.getByLabelText('Email Address'));
        const password = await waitFor(() => screen.getByLabelText('Password'));
        await waitFor(() => fireEvent.input(email, { target: { value: 'test@test.com' } }));
        await waitFor(() => fireEvent.input(password, { target: { value: 'password' } }));
      });

      it('performs the login', async () => {
        const button = await waitFor(() => screen.getByText('Sign In') as HTMLIonButtonElement);
        fireEvent.click(button);
        await waitFor(() => expect(login).toHaveBeenCalledTimes(1));
        expect(login).toHaveBeenCalledWith('test@test.com', 'password');
      });

      describe('if the login succeeds', () => {
        beforeEach(() => (login as Mock).mockResolvedValue(true));

        it('does not show an error', async () => {
          const button = await waitFor(() => screen.getByText('Sign In') as HTMLIonButtonElement);
          fireEvent.click(button);
          await waitFor(() => expect(screen.queryByText(errorMessage)).not.toBeInTheDocument());
        });

        it('navigates to the root page', async () => {
          const history = useHistory();
          const button = await waitFor(() => screen.getByText('Sign In') as HTMLIonButtonElement);
          fireEvent.click(button);
          await waitFor(() => expect(history.replace).toBeCalledTimes(1));
          expect(history.replace).toHaveBeenCalledWith('/');
        });
      });

      describe('if the login fails', () => {
        beforeEach(() => (login as Mock).mockResolvedValue(false));

        it('shows an error', async () => {
          const button = await waitFor(() => screen.getByText('Sign In') as HTMLIonButtonElement);
          fireEvent.click(button);
          await waitFor(() => expect(screen.queryByText(errorMessage)).toBeInTheDocument());
        });

        it('does not navigate', async () => {
          const history = useHistory();
          const button = await waitFor(() => screen.getByText('Sign In') as HTMLIonButtonElement);
          fireEvent.click(button);
          await waitFor(() => expect(history.replace).not.toHaveBeenCalled());
        });
      });
    });
  });

  describe('error messages', () => {
    it('displays an error if the e-mail address is dirty and empty', async () => {
      render(<LoginPage />);
      const email = await waitFor(() => screen.getByLabelText('Email Address'));
      await waitFor(() => fireEvent.input(email, { target: { value: 'test@test.com' } }));
      await waitFor(() => fireEvent.blur(email));
      await waitFor(() => fireEvent.input(email, { target: { value: '' } }));
      await waitFor(() => expect(screen.getByText(/Email address is a required field/)).toBeInTheDocument());
    });

    it('displays an error if the email address has an invalid format', async () => {
      render(<LoginPage />);
      const email = await waitFor(() => screen.getByLabelText('Email Address'));
      await waitFor(() => fireEvent.input(email, { target: { value: 'test' } }));
      await waitFor(() => fireEvent.blur(email));
      await waitFor(() => expect(screen.getByText(/Email address must be a valid email/)).toBeInTheDocument());
    });

    it('displays an error message if the password is dirty and empty', async () => {
      render(<LoginPage />);
      const password = await waitFor(() => screen.getByLabelText('Password'));
      await waitFor(() => fireEvent.input(password, { target: { value: '' } }));
      await waitFor(() => fireEvent.blur(password));
      await waitFor(() => expect(screen.getByText(/Password is a required field/)).toBeInTheDocument());
    });
  });
});
