import { render } from '@testing-library/react';
import TastingNotesPage from './TastingNotesPage';

describe('<TastingNotesPage />', () => {
  it('renders consistently', () => {
    const { asFragment } = render(<TastingNotesPage />);
    expect(asFragment).toMatchSnapshot();
  });
});
