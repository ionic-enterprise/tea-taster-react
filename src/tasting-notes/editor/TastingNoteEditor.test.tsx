/* eslint-disable testing-library/no-wait-for-snapshot */
import { render, screen, waitFor } from '@testing-library/react';
import { ionFireEvent as fireEvent } from '@ionic/react-test-utils';
import TastingNoteEditor from './TastingNoteEditor';
import { mockNotes } from '../__fixtures__/mockNotes';
import { expectedTeas } from '../../tea/__fixtures__/mockTeas';

const mockTeas = expectedTeas;
jest.mock('../../tea/TeaProvider', () => ({
  useTea: () => ({ teas: mockTeas }),
}));

const mockSaveNote = jest.fn(() => Promise.resolve());
jest.mock('../TastingNotesProvider', () => ({
  useTastingNotes: () => ({
    saveNote: mockSaveNote,
  }),
}));

describe('<TastingNoteEditor />', () => {
  let component: any;
  let mockDismiss = jest.fn();

  describe('cancel button', () => {
    it('calls the dismiss function', async () => {
      render(<TastingNoteEditor onDismiss={mockDismiss} />);
      const button = (await screen.findByTestId(/cancel-button/)) as HTMLIonButtonElement;
      fireEvent.click(button);
      expect(mockDismiss).toHaveBeenCalledTimes(1);
    });
  });

  describe('save', () => {
    beforeEach(() => (component = <TastingNoteEditor onDismiss={mockDismiss} />));

    it('renders consistently', async () => {
      const { asFragment } = render(component);
      await waitFor(() => expect(asFragment()).toMatchSnapshot());
    });

    it('has the add title', async () => {
      const { container } = render(component);
      await waitFor(() => expect(container).toHaveTextContent(/Add New Tasting Note/));
    });

    it('has the add button label', async () => {
      render(component);
      const submit = (await screen.findByTestId(/submit-button/)) as HTMLIonButtonElement;
      expect(submit.textContent).toEqual('Add');
    });

    it('saves the note', async () => {
      const { id, ...expected } = mockNotes[0];
      render(component);
      const brand = (await screen.findByTestId(/brand-input/)) as HTMLIonInputElement;
      const name = (await screen.findByTestId(/name-input/)) as HTMLIonInputElement;
      const rating = await screen.findByTestId(/Rate 4 stars/);
      const notes = (await screen.findByTestId(/notes-input/)) as HTMLIonTextareaElement;
      const submit = (await screen.findByTestId(/submit-button/)) as HTMLIonButtonElement;

      fireEvent.ionChange(brand, mockNotes[0].brand);
      fireEvent.ionChange(name, mockNotes[0].name);
      fireEvent.click(rating);
      fireEvent.ionChange(notes, mockNotes[0].notes);
      fireEvent.click(submit);

      await waitFor(() => expect(mockSaveNote).toHaveBeenCalledTimes(1));
      expect(mockSaveNote).toHaveBeenCalledWith(expected);
    });
  });

  describe('update', () => {
    beforeEach(() => (component = <TastingNoteEditor onDismiss={mockDismiss} note={mockNotes[0]} />));

    it('renders consistently', async () => {
      const { asFragment } = render(component);
      await waitFor(() => expect(asFragment()).toMatchSnapshot());
    });

    it('has the update title', async () => {
      const { container } = render(component);
      await waitFor(() => expect(container).toHaveTextContent(/Update Tasting Note/));
    });

    it('has the update button label', async () => {
      render(component);
      const submit = (await screen.findByTestId(/submit-button/)) as HTMLIonButtonElement;
      expect(submit.textContent).toEqual('Update');
    });

    it('sets the properties', async () => {
      render(component);
      const brand = (await screen.findByTestId(/brand-input/)) as HTMLIonInputElement;
      const name = (await screen.findByTestId(/name-input/)) as HTMLIonInputElement;
      const notes = (await screen.findByTestId(/notes-input/)) as HTMLIonTextareaElement;

      expect(brand.getAttribute('value')).toEqual(mockNotes[0].brand);
      expect(name.getAttribute('value')).toEqual(mockNotes[0].name);
      expect(notes.getAttribute('value')).toEqual(mockNotes[0].notes);
    });

    it('updates the data', async () => {
      const expected = { ...mockNotes[0], notes: "It's not good", rating: 1 };
      render(component);

      const brand = (await screen.findByTestId(/brand-input/)) as HTMLIonInputElement;
      const name = (await screen.findByTestId(/name-input/)) as HTMLIonInputElement;
      const rating = await screen.findByTestId(/Rate 1 stars/);
      const notes = (await screen.findByTestId(/notes-input/)) as HTMLIonTextareaElement;
      const submit = (await screen.findByTestId(/submit-button/)) as HTMLIonButtonElement;

      fireEvent.ionChange(brand, mockNotes[0].brand);
      fireEvent.ionChange(name, mockNotes[0].name);
      fireEvent.click(rating);
      fireEvent.ionChange(notes, expected.notes);
      fireEvent.click(submit);

      await waitFor(() => expect(mockSaveNote).toHaveBeenCalledTimes(1));
      expect(mockSaveNote).toHaveBeenCalledWith(expected);
    });
  });

  afterEach(() => jest.restoreAllMocks());
});
