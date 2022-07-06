import { render } from '@testing-library/react';
import Home from './Home';

describe('<Home />', () => {
  it('displays the header', () => {
    const { container } = render(<Home />);
    expect(container).toHaveTextContent(/Blank/);
  });

  it('renders consistently', () => {
    const { asFragment } = render(<Home />);
    expect(asFragment()).toMatchSnapshot();
  });
});
