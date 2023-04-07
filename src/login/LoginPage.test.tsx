import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import LoginPage from './LoginPage';

describe('<LoginPage />', () => {
  it('renders consistently', () => {
    const { asFragment } = render(<LoginPage />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('displays the title', () => {
    render(<LoginPage />);
    const titleElements = screen.getAllByText('Login');
    expect(titleElements).toHaveLength(2);
  });

  describe('error messages', () => {
    it('displays an error if the e-mail address is dirty and empty', async () => {
      // render(<LoginPage />);
      // const email = await waitFor(() => screen.getByLabelText('Email Address'));
      // await waitFor(() => fireEvent.change(email, { target: { value: '' } }));
      // await waitFor(() => fireEvent.blur(email));
      // console.log(email);
      //expect(email).toHaveTextContent(/Email address is a required field/);
    });

    it('displays an error if the email address has an invalid format', async () => {});

    it('displays an error message if the password is dirty and empty', async () => {});
  });

  describe('sign in button', () => {
    it('starts disabled', () => {});

    it('is disabled with just an email address', () => {});

    it('is disabled with just a password', () => {});

    it('is enabled with both an email address and password', async () => {
      // render(<LoginPage />);
      // const button = (await waitFor(() => screen.getByText('Sign In'))) as HTMLIonButtonElement;
      // const email = await waitFor(() => screen.getByLabelText('Email Address'));
      // const password = await waitFor(() => screen.getByLabelText('Password'));
      // await waitFor(() => fireEvent.change(password, { target: { value: 'test@ionic.io' } }));
      // await waitFor(() => fireEvent.change(email, { target: { value: 'test@ionic.io' } }));
      // expect(button.disabled).toBeFalsy();
    });
  });
});
