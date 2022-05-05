import React from 'react';
import { waitForIonicReact } from '@ionic/react-test-utils';
import { render, waitFor } from '@testing-library/react';
import { ionFireEvent as fireEvent } from '@ionic/react-test-utils';
import LoginPage from './LoginPage';

describe('<LoginPage />', () => {
  it('displays the header', async () => {
    const { container } = render(<LoginPage />);
    await waitFor(() => waitForIonicReact());
    expect(container).toHaveTextContent(/Login/);
  });

  it('renders consistently', async () => {
    const { asFragment } = render(<LoginPage />);
    await waitFor(() => waitForIonicReact());
    expect(asFragment()).toMatchSnapshot();
  });

  describe('sign in button', () => {
    it('starts disabled', async () => {
      const { getByTestId } = render(<LoginPage />);
      await waitFor(() => waitForIonicReact());
      const button = getByTestId(/submit-button/) as HTMLIonButtonElement;
      expect(button.disabled).toBeTruthy();
    });

    it('is disabled with just an e-mail address', async () => {
      const { getByTestId } = render(<LoginPage />);
      await waitFor(() => waitForIonicReact());
      const button = getByTestId(/submit-button/) as HTMLIonButtonElement;
      const email = getByTestId(/email-input/);
      await waitFor(() => {
        fireEvent.ionChange(email, 'test@test.com');
      });
      expect(button.disabled).toBeTruthy();
    });

    it('is disabled with just a password', async () => {
      const { getByTestId } = render(<LoginPage />);
      await waitFor(() => waitForIonicReact());
      const button = getByTestId(/submit-button/) as HTMLIonButtonElement;
      const password = getByTestId(/password-input/);
      await waitFor(() => {
        fireEvent.ionChange(password, 'P@ssword123');
      });
      expect(button.disabled).toBeTruthy();
    });

    it('is enabled with both an email address and a password', async () => {
      const { getByTestId } = render(<LoginPage />);
      await waitFor(() => waitForIonicReact());
      const button = getByTestId(/submit-button/) as HTMLIonButtonElement;
      const email = getByTestId(/email-input/);
      const password = getByTestId(/password-input/);
      await waitFor(() => {
        fireEvent.ionChange(email, 'test@test.com');
        fireEvent.ionChange(password, 'P@ssword123');
      });
      expect(button.disabled).toBeFalsy();
    });
  });

  describe('error messages', () => {
    it('starts with no error messages', async () => {
      const { getByTestId } = render(<LoginPage />);
      await waitFor(() => waitForIonicReact());
      const errors = getByTestId(/errors/);
      expect(errors).toHaveTextContent('');
    });

    it('displays an error if the e-mail address is dirty and empty', async () => {
      const { getByTestId } = render(<LoginPage />);
      await waitFor(() => waitForIonicReact());
      const errors = getByTestId(/errors/);
      const email = getByTestId(/email-input/);
      await waitFor(() => {
        fireEvent.ionChange(email, 'test@test.com');
        fireEvent.ionChange(email, '');
      });
      expect(errors).toHaveTextContent(/E-Mail Address is required/);
    });

    it('displays an error message if the e-mail address has an invalid format', async () => {
      const { getByTestId } = render(<LoginPage />);
      await waitFor(() => waitForIonicReact());
      const errors = getByTestId(/errors/);
      const email = getByTestId(/email-input/);
      await waitFor(() => {
        fireEvent.ionChange(email, 'foo');
      });
      expect(errors).toHaveTextContent(/E-Mail Address must have a valid format/);
    });

    it('displays an error message if the password is dirty and empty', async () => {
      const { getByTestId } = render(<LoginPage />);
      await waitFor(() => waitForIonicReact());
      const errors = getByTestId(/errors/);
      const password = getByTestId(/password-input/);
      await waitFor(() => {
        fireEvent.ionChange(password, 'P@ssword123');
        fireEvent.ionChange(password, '');
      });
      expect(errors).toHaveTextContent(/Password is required/);
    });
  });
});
