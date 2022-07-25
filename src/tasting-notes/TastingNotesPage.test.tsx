import { render, waitFor, screen } from '@testing-library/react';
import TastingNotesPage from './TastingNotesPage';
import { mockNotes } from './__fixtures__/mockNotes';

let mockGetNotes = jest.fn(() => Promise.resolve());
jest.mock('./TastingNotesProvider', () => ({
  useTastingNotes: () => ({
    getNotes: mockGetNotes,
    notes: mockNotes,
  }),
}));

describe('<TastingNotesPage />', () => {
  it('renders consistently', () => {
    const { asFragment } = render(<TastingNotesPage />);
    expect(asFragment).toMatchSnapshot();
  });

  describe('initialization', () => {
    it('gets all of the notes', async () => {
      render(<TastingNotesPage />);
      await waitFor(() => expect(mockGetNotes).toHaveBeenCalledTimes(1));
    });

    it('displays the notes', () => {
      render(<TastingNotesPage />);
      expect(screen.getByText(/Bently/)).toBeInTheDocument();
    });
  });
});
