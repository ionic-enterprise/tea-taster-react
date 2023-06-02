import { render, screen } from '@testing-library/react';
import Home from './Home';

describe('<Home />', () => {
  it('renders consistently', () => {
    const { asFragment } = render(<Home />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('displays the title', () => {
    render(<Home />);
    const titleElements = screen.getAllByText('Blank');
    expect(titleElements.length).toEqual(2);
  });

  it('displays the default text', () => {
    const { baseElement } = render(<Home />);
    expect(baseElement).toHaveTextContent(/Ready to create an app?/);
  });
});
