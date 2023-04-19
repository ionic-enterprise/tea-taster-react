import { render } from '@testing-library/react';
import TastingNotesPage from './TastingNotesPage';

describe('<TastingNotesPage />', () => {
  it('renders without crashing', () => {
    const { baseElement } = render(<TastingNotesPage />);
    expect(baseElement).toBeDefined();
  });

  it('renders consistently', () => {
    const { asFragment } = render(<TastingNotesPage />);
    expect(asFragment()).toMatchSnapshot();
  });
});
