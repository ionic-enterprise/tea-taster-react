import { vi } from 'vitest';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import LoginPage from './LoginPage';

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
