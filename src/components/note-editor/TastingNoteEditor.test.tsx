import { vi } from 'vitest';
import { cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react';
import { TastingNoteEditor } from './TastingNoteEditor';
import { useTastingNotes } from '../../hooks/useTastingNotes';
import { TastingNote } from '../../models';

vi.mock('../../hooks/useTastingNotes');

const props = {
  onDismiss: vi.fn(),
  teas: [
    {
      id: 1,
      name: 'Green',
      image: '/assets/images/green.jpg',
      description:
        'Green teas have the oxidation process stopped very early on, leaving them with a very subtle flavor and ' +
        'complex undertones. These teas should be steeped at lower temperatures for shorter periods of time.',
      rating: 0,
    },
    {
      id: 2,
      name: 'Black',
      image: '/assets/images/black.jpg',
      description:
        'A fully oxidized tea, black teas have a dark color and a full robust and pronounced flavor. Black teas tend ' +
        'to have a higher caffeine content than other teas.',
      rating: 1,
    },
    {
      id: 3,
      name: 'Herbal',
      image: '/assets/images/herbal.jpg',
      description:
        'Herbal infusions are not actually "tea" but are more accurately characterized as infused beverages ' +
        'consisting of various dried herbs, spices, and fruits.',
      rating: 2,
    },
  ],
};

const note: TastingNote = {
  id: 73,
  brand: 'Rishi',
  name: 'Puer Cake',
  teaCategoryId: 6,
  rating: 5,
  notes: 'Smooth and peaty, the king of puer teas',
};

describe('<TastingNoteEditor />', () => {
  beforeEach(() => vi.clearAllMocks());

  it('renders without crashing', () => {
    const { baseElement } = render(<TastingNoteEditor {...props} />);
    expect(baseElement).toBeDefined();
  });

  it('renders consistently', () => {
    const { asFragment } = render(<TastingNoteEditor {...props} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('displays an appropriate title', () => {
    render(<TastingNoteEditor {...props} />);
    expect(screen.getByText('Add New Tasting Note')).toBeInTheDocument();
    cleanup();
    render(<TastingNoteEditor {...props} note={note} />);
    expect(screen.getByText('Update Tasting Note')).toBeInTheDocument();
  });

  it('displays the appropriate submit button text', () => {
    render(<TastingNoteEditor {...props} />);
    let button = screen.getByTestId('submit-button') as HTMLIonButtonElement;
    expect(button.innerHTML).toBe('Add');
    cleanup();
    render(<TastingNoteEditor {...props} note={note} />);
    button = screen.getByTestId('submit-button') as HTMLIonButtonElement;
    expect(button.innerHTML).toBe('Update');
  });

  it('binds the teas in the select', () => {
    render(<TastingNoteEditor {...props} />);
    const opts = screen.getByTestId('tea-categories');
    expect(opts).toHaveTextContent('Green');
    expect(opts).toHaveTextContent('Black');
    expect(opts).toHaveTextContent('Herbal');
  });

  it('displays messages as the user enters invalid data', async () => {
    render(<TastingNoteEditor {...props} />);
    const name = await waitFor(() => screen.getByLabelText('Name'));
    const brand = await waitFor(() => screen.getByLabelText('Brand'));
    await waitFor(() => fireEvent.input(name, { target: { value: '' } }));
    await waitFor(() => fireEvent.blur(name));
    await waitFor(() => expect(screen.getByText(/Name is a required field/)).toBeInTheDocument());
    await waitFor(() => fireEvent.input(brand, { target: { value: '' } }));
    await waitFor(() => fireEvent.blur(brand));
    await waitFor(() => expect(screen.getByText(/Brand is a required field/)).toBeInTheDocument());
  });

  it('populates the data when editing a note', async () => {
    const { baseElement } = render(<TastingNoteEditor {...props} note={note} />);
    expect((baseElement.querySelector('[label="Brand"]') as HTMLInputElement).value).toBe('Rishi');
    expect((baseElement.querySelector('[label="Name"]') as HTMLInputElement).value).toBe('Puer Cake');
    expect((baseElement.querySelector('[label="Type"]') as HTMLInputElement).value).toBe(6);
    expect(screen.getAllByTestId('star')).toHaveLength(5);
    expect((baseElement.querySelector('[label="Notes"]') as HTMLInputElement).value).toBe(
      'Smooth and peaty, the king of puer teas'
    );
  });

  describe('submit button', () => {
    it('is disabled until valid data is entered', async () => {
      const ionChangeEvent = new CustomEvent('ionChange', { detail: { value: '2' } });
      render(<TastingNoteEditor {...props} />);
      const button = screen.getByTestId('submit-button') as HTMLIonButtonElement;

      await waitFor(() => fireEvent.input(screen.getByLabelText('Brand'), { target: { value: 'foobar' } }));
      await waitFor(() => expect(button.disabled).toBeTruthy());

      await waitFor(() => fireEvent.input(screen.getByLabelText('Name'), { target: { value: 'mytea' } }));
      await waitFor(() => expect(button.disabled).toBeTruthy());

      await waitFor(() => fireEvent(screen.getByTestId('tea-categories'), ionChangeEvent));
      await waitFor(() => expect(button.disabled).toBeTruthy());

      await waitFor(() => fireEvent.click(screen.getAllByTestId('outline')[2]));
      await waitFor(() => expect(button.disabled).toBeTruthy());

      await waitFor(() => fireEvent.input(screen.getByLabelText('Notes'), { target: { value: 'Meh. It is ok.' } }));
      await waitFor(() => expect(button.disabled).toBeFalsy());
    });

    describe('on click', () => {
      beforeEach(async () => {
        const ionChangeEvent = new CustomEvent('ionChange', { detail: { value: '2' } });
        render(<TastingNoteEditor {...props} />);
        await waitFor(() => fireEvent.input(screen.getByLabelText('Brand'), { target: { value: 'foobar' } }));
        await waitFor(() => fireEvent.input(screen.getByLabelText('Name'), { target: { value: 'mytea' } }));
        await waitFor(() => fireEvent(screen.getByTestId('tea-categories'), ionChangeEvent));
        await waitFor(() => fireEvent.click(screen.getAllByTestId('outline')[2]));
        await waitFor(() => fireEvent.input(screen.getByLabelText('Notes'), { target: { value: 'Meh. It is ok.' } }));
      });

      it('merges the tasting note', async () => {
        const { merge } = useTastingNotes();
        const button = screen.getByTestId('submit-button') as HTMLIonButtonElement;
        fireEvent.click(button);
        await waitFor(() => expect(merge).toHaveBeenCalledTimes(1));
        expect(merge).toHaveBeenCalledWith({
          brand: 'foobar',
          name: 'mytea',
          rating: 3,
          teaCategoryId: 2,
          notes: 'Meh. It is ok.',
        });
      });

      it('includes the ID when editing a note', async () => {
        cleanup();
        const { merge } = useTastingNotes();
        render(<TastingNoteEditor {...props} note={note} />);
        const button = screen.getByTestId('submit-button') as HTMLIonButtonElement;
        fireEvent.click(button);
        await waitFor(() => expect(merge).toHaveBeenCalledTimes(1));
        expect(merge).toHaveBeenCalledWith({
          id: 73,
          brand: 'Rishi',
          name: 'Puer Cake',
          teaCategoryId: 6,
          rating: 5,
          notes: 'Smooth and peaty, the king of puer teas',
        });
      });

      it('closes the modal', async () => {
        const button = screen.getByTestId('submit-button') as HTMLIonButtonElement;
        fireEvent.click(button);
        await waitFor(() => expect(props.onDismiss).toHaveBeenCalledTimes(1));
      });
    });
  });

  describe('cancel button', () => {
    it('does not merge', async () => {
      const { merge } = useTastingNotes();
      render(<TastingNoteEditor {...props} />);
      const button = screen.getByTestId('cancel-button');
      fireEvent.click(button);
      await waitFor(() => expect(merge).not.toHaveBeenCalled());
    });

    it('closes the modal', async () => {
      render(<TastingNoteEditor {...props} />);
      const button = screen.getByTestId('cancel-button');
      fireEvent.click(button);
      await waitFor(() => expect(props.onDismiss).toHaveBeenCalledTimes(1));
    });
  });
});
