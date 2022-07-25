import { render, waitFor, screen, fireEvent } from '@testing-library/react';
import { Share } from '@capacitor/share';
import TastingNotesPage from './TastingNotesPage';
import { mockNotes } from './__fixtures__/mockNotes';
import { waitForIonicReact } from '@ionic/react-test-utils';

let mockGetNotes = jest.fn(() => Promise.resolve());
jest.mock('./TastingNotesProvider', () => ({
  useTastingNotes: () => ({
    getNotes: mockGetNotes,
    notes: mockNotes,
  }),
}));
jest.mock('@capacitor/share');

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

  describe('sharing a note', () => {
    beforeEach(() => (Share.share = jest.fn()));

    it('calls the share plugin when called', async () => {
      render(<TastingNotesPage />);
      const item = await screen.findByTestId(/share0/);
      fireEvent.click(item);
      expect(Share.share).toHaveBeenCalledTimes(1);
    });

    it('shares the brand, name, rating, and notes', async () => {
      render(<TastingNotesPage />);
      await waitForIonicReact();
      const item = await screen.findByTestId(/share0/);
      fireEvent.click(item);
      expect(Share.share).toHaveBeenCalledWith({
        title: 'Lipton: Yellow Label',
        text: `Overly acidic, highly tannic flavor Rated 4/5 stars`,
        dialogTitle: `Share Yellow Label's tasting note`,
        url: 'https://tea-taster-training.web.app',
      });
    });
  });
});
