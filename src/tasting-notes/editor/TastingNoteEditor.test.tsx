import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { ionFireEvent as fireEvent, waitForIonicReact } from '@ionic/react-test-utils';
import TastingNoteEditor from './TastingNoteEditor';
import { mockNotes } from '../__mocks__/mockNotes';
import { resultTeas } from '../../tea/__mocks__/mockTeas';

const mockTeas = resultTeas();

jest.mock('../../tea/useTea', () => ({
  useTea: () => ({
    getTeas: jest.fn(() => Promise.resolve(mockTeas)),
  }),
}));

let mockSaveNote = jest.fn(() => Promise.resolve());

jest.mock('../useTastingNotes', () => ({
  useTastingNotes: () => ({
    saveNote: mockSaveNote,
  }),
}));

describe('<TastingNoteEditor />', () => {
  let component: any;
  let mockDismiss = jest.fn();

  beforeEach(() => {
    component = <TastingNoteEditor onDismiss={mockDismiss} />;
    mockSaveNote = jest.fn(() => Promise.resolve());
  });

  describe('initialization', () => {
    it('binds the tea select', async () => {
      const { getAllByRole } = render(component);
      await waitFor(() => waitForIonicReact());
      const options = getAllByRole('option');
      expect(options.length).toEqual(8);
      expect(options[0].textContent).toEqual('Green');
      expect(options[1].textContent).toEqual('Black');
    });
  });

  describe('cancel button', () => {
    it('calls the dismiss function', async () => {
      const { getByTestId } = render(component);
      await waitFor(() => waitForIonicReact());
      const button = await waitFor(() => getByTestId(/cancel-button/) as HTMLIonButtonElement);
      fireEvent.click(button);
      expect(mockDismiss).toHaveBeenCalledTimes(1);
    });
  });

  describe('save', () => {
    it('renders consistently', async () => {
      const { asFragment, container } = render(component);
      await waitFor(() => waitForIonicReact());
      await waitFor(() => expect(container).toHaveTextContent(/Add New Tasting Note/));
      expect(asFragment()).toMatchSnapshot();
    });

    it('has the add title', async () => {
      const { container } = render(component);
      await waitFor(() => waitForIonicReact());
      await waitFor(() => expect(container).toHaveTextContent(/Add New Tasting Note/));
    });

    it('has the add button label', async () => {
      const { getByTestId } = render(component);
      await waitFor(() => waitForIonicReact());
      const submit = await waitFor(() => getByTestId(/submit-button/));
      expect(submit.textContent).toEqual('Add');
    });

    it('saves the note', async () => {
      const expected = { ...mockNotes[0] };
      // @ts-ignore
      delete expected.id;
      const { getByTestId } = render(component);
      await waitFor(() => waitForIonicReact());
      const brand = await waitFor(() => getByTestId(/brand-input/));
      const name = await waitFor(() => getByTestId(/name-input/));
      const rating = await waitFor(() => getByTestId(/Rate 4 stars/));
      const notes = await waitFor(() => getByTestId(/notes-input/));
      const submit = await waitFor(() => getByTestId(/submit-button/));

      await waitFor(() => fireEvent.ionChange(brand, mockNotes[0].brand));
      await waitFor(() => fireEvent.ionChange(name, mockNotes[0].name));
      await waitFor(() => fireEvent.click(rating));
      await waitFor(() => fireEvent.ionChange(notes, mockNotes[0].notes));
      await waitFor(() => fireEvent.click(submit));

      expect(mockSaveNote).toHaveBeenCalledWith(expected);
      expect(mockSaveNote).toHaveBeenCalledTimes(1);
    });
  });

  describe('update', () => {
    beforeEach(() => {
      component = <TastingNoteEditor onDismiss={mockDismiss} note={mockNotes[0]} />;
      mockSaveNote = jest.fn(() => Promise.resolve());
    });

    it('renders consistently', async () => {
      const { asFragment, container } = render(component);
      await waitFor(() => waitForIonicReact());
      await waitFor(() => expect(container).toHaveTextContent(/Update Tasting Note/));
      expect(asFragment()).toMatchSnapshot();
    });

    it('has the update title', async () => {
      const { container } = render(component);
      await waitFor(() => waitForIonicReact());
      await waitFor(() => expect(container).toHaveTextContent(/Update Tasting Note/));
    });

    it('has the update button label', async () => {
      const { getByTestId } = render(component);
      await waitFor(() => waitForIonicReact());
      const submit = await waitFor(() => getByTestId(/submit-button/));
      expect(submit.textContent).toEqual('Update');
    });

    it('sets the properties', async () => {
      const { getByTestId } = render(component);
      await waitFor(() => waitForIonicReact());
      const brand = await waitFor(() => getByTestId(/brand-input/));
      const name = await waitFor(() => getByTestId(/name-input/));
      const notes = await waitFor(() => getByTestId(/notes-input/));
      expect(brand.getAttribute('value')).toEqual(mockNotes[0].brand);
      expect(name.getAttribute('value')).toEqual(mockNotes[0].name);
      expect(notes.getAttribute('value')).toEqual(mockNotes[0].notes);
    });

    it('updates the data', async () => {
      const expected = { ...mockNotes[0] };
      expected.notes = "It's not good";
      expected.rating = 1;
      const { getByTestId } = render(component);
      await waitFor(() => waitForIonicReact());
      const brand = await waitFor(() => getByTestId(/brand-input/));
      const name = await waitFor(() => getByTestId(/name-input/));
      const rating = await waitFor(() => getByTestId(/Rate 1 stars/));
      const notes = await waitFor(() => getByTestId(/notes-input/));
      const submit = await waitFor(() => getByTestId(/submit-button/));

      await waitFor(() => fireEvent.ionChange(brand, mockNotes[0].brand));
      await waitFor(() => fireEvent.ionChange(name, mockNotes[0].name));
      await waitFor(() => fireEvent.click(rating));
      await waitFor(() => fireEvent.ionChange(notes, expected.notes));
      await waitFor(() => fireEvent.click(submit));

      expect(mockSaveNote).toHaveBeenCalledWith(expected);
      expect(mockSaveNote).toHaveBeenCalledTimes(1);
    });
  });

  afterEach(() => jest.restoreAllMocks());
});
