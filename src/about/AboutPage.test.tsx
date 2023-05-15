import { render } from '@testing-library/react';
import AboutPage from './AboutPage';

describe('<AboutPage />', () => {
  it('renders without crashing', () => {
    const { baseElement } = render(<AboutPage />);
    expect(baseElement).toBeDefined();
  });

  it('renders consistently', () => {
    const { asFragment } = render(<AboutPage />);
    expect(asFragment()).toMatchSnapshot();
  });
});
