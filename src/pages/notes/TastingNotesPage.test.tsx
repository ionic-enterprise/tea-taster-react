import { Mock, vi } from 'vitest';
import { fireEvent, screen, render, waitFor } from '@testing-library/react';
import TastingNotesPage from './TastingNotesPage';
import { useTastingNotes } from '../../hooks/useTastingNotes';

const present = vi.fn();
const mockRemove = vi.fn();

vi.mock('@ionic/react', async (getOriginal) => {
  const original: any = await getOriginal();
  return { ...original, useIonModal: vi.fn(() => [present, vi.fn()]) };
});
vi.mock('../../providers/TeaProvider');
vi.mock('../../hooks/useTastingNotes');

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
      remove: mockRemove,
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

  it('refreshes the tasting notes data', async () => {
    const { refresh } = useTastingNotes();
    render(<TastingNotesPage />);
    await waitFor(() => expect(refresh).toHaveBeenCalledTimes(1));
  });

  it('displays the title', () => {
    render(<TastingNotesPage />);
    const titleElements = screen.getAllByText('Tasting Notes');
    expect(titleElements).toHaveLength(2);
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

  describe('editing a note', () => {
    it('displays the modal', async () => {
      render(<TastingNotesPage />);
      fireEvent.click(screen.getAllByTestId('edit-note-button')[0]);
      await waitFor(() => expect(present).toHaveBeenCalledTimes(1));
    });
  });

  describe('deleting a note', () => {
    it('launches a confirmation alert', async () => {
      render(<TastingNotesPage />);
      await waitFor(() => fireEvent.click(screen.getAllByTestId('delete-note-button')[0]));
      await waitFor(() => expect(screen.getByRole('alertdialog')).toBeInTheDocument());
    });

    describe('cancelling the alert', () => {
      it('does not remove a note', async () => {
        const { remove } = useTastingNotes();
        const { baseElement } = render(<TastingNotesPage />);
        await waitFor(() => fireEvent.click(screen.getAllByTestId('delete-note-button')[0]));
        await waitFor(() => fireEvent.click(baseElement.querySelector('.alert-button-role-cancel')!));
        await waitFor(() => expect(remove).not.toBeCalled());
      });
    });

    describe('confirming the alert', () => {
      it('removes a note from the list', async () => {
        const { remove } = useTastingNotes();
        const { baseElement } = render(<TastingNotesPage />);
        await waitFor(() => fireEvent.click(screen.getAllByTestId('delete-note-button')[0]));
        await waitFor(() => fireEvent.click(baseElement.querySelector('.alert-button-role-confirm')!));
        await waitFor(() => expect(remove).toHaveBeenCalledTimes(1));
        expect(remove).toHaveBeenCalledWith({
          id: 42,
          brand: 'Lipton',
          name: 'Green Tea',
          teaCategoryId: 3,
          rating: 3,
          notes: 'A basic green tea, very passable but nothing special',
        });
      });
    });
  });
});
