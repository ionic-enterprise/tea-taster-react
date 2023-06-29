import { vi } from 'vitest';
import { render, waitFor } from '@testing-library/react';
import App from './App';

vi.mock('./utils/auth');

describe('<App />', () => {
  it('renders without crashing', async () => {
    const { baseElement } = render(<App />);
    await waitFor(() => expect(baseElement).toBeDefined());
  });

  it('renders consistently', async () => {
    const { asFragment } = render(<App />);
    await waitFor(() => expect(asFragment()).toMatchSnapshot());
  });
});
