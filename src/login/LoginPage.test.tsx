/* eslint-disable testing-library/no-wait-for-snapshot */
import { render, waitFor, screen } from '@testing-library/react';
import { ionFireEvent as fireEvent } from '@ionic/react-test-utils';
import LoginPage from './LoginPage';
import { useSessionVault } from '../core/session';

describe('<LoginPage />', () => {
  beforeEach(() => (useSessionVault as jest.Mock)().canUnlock.mockResolvedValue(false));

  it('displays the header', () => {
    const { container } = render(<LoginPage />);
    expect(container).toHaveTextContent(/Login/);
  });

  describe('signing in', () => {
    it('renders consistently', () => {
      const { asFragment } = render(<LoginPage />);
      expect(asFragment).toMatchSnapshot();
    });

    describe('sign in button', () => {
      it('starts disabled', () => {
        render(<LoginPage />);
        const button = screen.getByTestId(/submit-button/) as HTMLIonButtonElement;
        expect(button.disabled).toBeTruthy();
      });

      it('is disabled with just an e-mail address', async () => {
        render(<LoginPage />);
        const button = screen.getByTestId(/submit-button/) as HTMLIonButtonElement;
        const email = screen.getByTestId(/email-input/) as HTMLIonInputElement;
        fireEvent.ionChange(email, 'test@test.com');
        await waitFor(() => expect(button.disabled).toBeTruthy());
      });

      it('is disabled with just a password', async () => {
        render(<LoginPage />);
        const button = screen.getByTestId(/submit-button/) as HTMLIonButtonElement;
        const password = screen.getByTestId(/password-input/) as HTMLIonInputElement;
        fireEvent.ionChange(password, 'P@ssword123');
        await waitFor(() => expect(button.disabled).toBeTruthy());
      });

      it('is enabled with both an email address and password', async () => {
        render(<LoginPage />);
        const button = screen.getByTestId(/submit-button/) as HTMLIonButtonElement;
        const email = screen.getByTestId(/email-input/) as HTMLIonInputElement;
        const password = screen.getByTestId(/password-input/) as HTMLIonInputElement;
        fireEvent.ionChange(email, 'test@test.com');
        fireEvent.ionChange(password, 'P@ssword123');
        await waitFor(() => expect(button.disabled).toBeFalsy());
      });
    });
  });

  describe('unlocking the Vault', () => {
    beforeEach(() => (useSessionVault as jest.Mock)().canUnlock.mockResolvedValue(true));

    it('renders consistently', async () => {
      const { asFragment } = render(<LoginPage />);
      await waitFor(() => expect(useSessionVault().canUnlock).toBeCalledTimes(1));
      expect(asFragment).toMatchSnapshot();
    });

    it('displays the unlock button', async () => {
      render(<LoginPage />);
      await waitFor(() => expect(useSessionVault().canUnlock).toBeCalledTimes(1));
      expect(await screen.findByTestId(/unlock-button/)).toBeInTheDocument();
    });

    it('displays the redo button', async () => {
      render(<LoginPage />);
      await waitFor(() => expect(useSessionVault().canUnlock).toBeCalledTimes(1));
      expect(await screen.findByTestId(/redo-button/)).toBeInTheDocument();
    });
  });

  describe('error messages', () => {
    it('starts with no error messages', () => {
      render(<LoginPage />);
      const errors = screen.getByTestId(/errors/);
      expect(errors).toHaveTextContent('');
    });

    it('displays an error if the e-mail address is dirty and empty', async () => {
      render(<LoginPage />);
      const errors = screen.getByTestId(/errors/);
      const email = screen.getByTestId(/email-input/) as HTMLIonInputElement;
      fireEvent.ionChange(email, 'test@test.com');
      fireEvent.ionChange(email, '');
      await waitFor(() => expect(errors).toHaveTextContent(/E-Mail Address is required/));
    });

    it('displays an error message if the e-mail address has an invalid format', async () => {
      render(<LoginPage />);
      const errors = screen.getByTestId(/errors/);
      const email = screen.getByTestId(/email-input/) as HTMLIonInputElement;
      fireEvent.ionChange(email, 'test@test');
      await waitFor(() => expect(errors).toHaveTextContent(/E-Mail Address must have a valid format/));
    });

    it('displays an error message if the password is dirty and empty', async () => {
      render(<LoginPage />);
      const errors = screen.getByTestId(/errors/);
      const password = screen.getByTestId(/password-input/) as HTMLIonInputElement;
      fireEvent.ionChange(password, 'P@ssword123');
      fireEvent.ionChange(password, '');
      await waitFor(() => expect(errors).toHaveTextContent(/Password is required/));
    });
  });
});
