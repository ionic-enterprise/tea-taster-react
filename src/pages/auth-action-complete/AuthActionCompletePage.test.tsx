import { render } from '@testing-library/react';
import AuthActionCompletePage from './AuthActionCompletePage';

describe('<AuthActionCompletePage />', () => {
  it('renders consistently', () => {
    const { asFragment } = render(<AuthActionCompletePage />);
    expect(asFragment()).toMatchSnapshot();
  });
});
