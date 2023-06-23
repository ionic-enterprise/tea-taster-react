import { render } from '@testing-library/react';
import App from './App';

describe('<App />', () => {
  it('renders without crashing', async () => {
    const { baseElement } = render(<App />);
    expect(baseElement).toBeDefined();
  });

  it('renders consistently', async () => {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
  });
});
