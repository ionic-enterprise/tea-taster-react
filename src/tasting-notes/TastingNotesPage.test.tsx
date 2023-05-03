import { vi, Mock } from 'vitest';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import TastingNotesPage from './TastingNotesPage';
import { useTastingNotes } from './useTastingNotes';

const present = vi.fn();
vi.mock('@ionic/react', async (getOriginal) => {
  const original: any = await getOriginal();
  return { ...original, useIonModal: vi.fn(() => [present, vi.fn()]) };
});
vi.mock('../tea/TeaProvider');
vi.mock('./useTastingNotes');

describe('<TastingNotesPage />', () => {
  beforeEach(() => {
    (useTastingNotes as Mock).mockReturnValue({
      notes: [
        {
          id: 42,
          brand: 'Lipton',
          name: 'Green Tea',
          teaCategoryId: 3,
          rating: 3,
          notes: 'A basic green tea, very passable but nothing special',
        },
        {
          id: 314159,
          brand: 'Lipton',
          name: 'Yellow Label',
          teaCategoryId: 2,
          rating: 1,
          notes: 'Very acidic, even as dark teas go, OK for iced tea, horrible for any other application',
        },
        {
          id: 73,
          brand: 'Rishi',
          name: 'Puer Cake',
          teaCategoryId: 6,
          rating: 5,
          notes: 'Smooth and peaty, the king of puer teas',
        },
      ],
      refresh: vi.fn(),
    });
    vi.clearAllMocks();
  });

  it('renders without crashing', () => {
    const { baseElement } = render(<TastingNotesPage />);
    expect(baseElement).toBeDefined();
  });

  it('renders consistently', () => {
    const { asFragment } = render(<TastingNotesPage />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('displays the title', () => {
    render(<TastingNotesPage />);
    const titleElements = screen.getAllByText('Tasting Notes');
    expect(titleElements).toHaveLength(2);
  });

  it('refreshes the tasting notes data', async () => {
    const { refresh } = useTastingNotes();
    render(<TastingNotesPage />);
    await waitFor(() => expect(refresh).toHaveBeenCalledTimes(1));
  });

  it('displays the notes', () => {
    render(<TastingNotesPage />);
    expect(screen.getAllByText('Lipton')).toHaveLength(2);
    expect(screen.getAllByText('Green Tea')).toHaveLength(1);
    expect(screen.getAllByText('Yellow Label')).toHaveLength(1);
    expect(screen.getAllByText('Rishi')).toHaveLength(1);
    expect(screen.getAllByText('Puer Cake')).toHaveLength(1);
  });

  describe('adding a new note', () => {
    it('displays the modal', async () => {
      render(<TastingNotesPage />);
      fireEvent.click(screen.getByTestId('add-note-button'));
      await waitFor(() => expect(present).toHaveBeenCalledTimes(1));
    });
  });
});
