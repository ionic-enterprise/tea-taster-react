import { render, waitFor, screen } from '@testing-library/react';
import { ionFireEvent as fireEvent, waitForIonicReact } from '@ionic/react-test-utils';
import LoginPage from './LoginPage';

describe('<LoginPage />', () => {
  it('displays the header', () => {
    const { container } = render(<LoginPage />);
    expect(container).toHaveTextContent(/Login/);
  });

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
