import { render } from '@testing-library/react';
import AboutPage from './AboutPage';

describe('<AboutPage />', () => {
  it('renders consistently', () => {
    const { asFragment } = render(<AboutPage />);
    expect(asFragment).toMatchSnapshot();
  });
});
