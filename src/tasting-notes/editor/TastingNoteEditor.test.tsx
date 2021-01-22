import React from 'react';
import { render, wait, waitForElement } from '@testing-library/react';
import { ionFireEvent as fireEvent } from '@ionic/react-test-utils';
import { cleanup } from '@testing-library/react-hooks';
import { Plugins } from '@capacitor/core';
import TastingNoteEditor from './TastingNoteEditor';
jest.mock('../../tea/useTea', () => ({
  useTea: () => ({
    getTeas: jest.fn(() => Promise.resolve(mockTeas)),
  }),
}));
jest.mock('../useTastingNotes', () => ({
  useTastingNotes: () => ({
    saveNote: mockSaveNote,
  }),
}));

let mockSaveNote = jest.fn(() => Promise.resolve());

const mockNote = {
  id: 73,
  brand: 'Lipton',
  name: 'Yellow Label',
  teaCategoryId: 1,
  rating: 1,
  notes: 'ick',
};

const mockTeas = [
  {
    id: 7,
    name: 'White',
    image: 'assets/img/white.jpg',
    description: 'White tea description.',
    rating: 5,
  },
  {
    id: 8,
    name: 'Yellow',
    image: 'assets/img/yellow.jpg',
    description: 'Yellow tea description.',
    rating: 3,
  },
];

describe('<TastingNoteEditor />', () => {
  let component: any;
  let mockDismiss = jest.fn();

  beforeEach(() => {
    component = <TastingNoteEditor onDismiss={mockDismiss} />;
    mockSaveNote = jest.fn(() => Promise.resolve());
  });

  describe('initialization', () => {
    it('binds the tea select', async () => {
      const { container } = render(component);
      const options = await waitForElement(
        () => container.querySelector('ion-select')!.children,
      );
      expect(options.length).toEqual(2);
      expect(options[0].textContent).toEqual('White');
      expect(options[1].textContent).toEqual('Yellow');
    });
  });

  describe('cancel button', () => {
    it('calls the dismiss function', async () => {
      const { container } = render(component);
      const button = await waitForElement(
        () => container.querySelector('#cancel-button')!,
      );
      fireEvent.click(button);
      expect(mockDismiss).toHaveBeenCalledTimes(1);
    });
  });

  describe('save', () => {
    it('renders consistently', async () => {
      const { asFragment } = render(component);
      await wait(() => expect(asFragment()).toMatchSnapshot());
    });

    it('saves the note', async () => {
      const expected = { ...mockNote };
      delete expected.id;
      const { container, getByLabelText } = render(component);
      const [brand, name, rating, notes, submit] = await waitForElement(() => [
        container.querySelector('#brand-input')!,
        container.querySelector('#name-input')!,
        getByLabelText(/Rate 1 stars/),
        container.querySelector('#notes-input')!,
        container.querySelector('[type="submit"]')! as HTMLIonButtonElement,
      ]);
      await wait(() => {
        fireEvent.ionChange(brand, mockNote.brand);
        fireEvent.ionChange(name, mockNote.name);
        fireEvent.click(rating);
        fireEvent.ionChange(notes, mockNote.notes);
        fireEvent.click(submit);
      });
      expect(mockSaveNote).toHaveBeenCalledWith(expected);
      expect(mockSaveNote).toHaveBeenCalledTimes(1);
    });

    it('has the add title', async () => {
      const { container } = render(component);
      await wait(() =>
        expect(container).toHaveTextContent(/Add New Tasting Note/),
      );
    });

    it('has the add button label', async () => {
      const { container } = render(component);
      const submit = await waitForElement(
        () => container.querySelector('[type="submit"]')!,
      );
      expect((submit as HTMLIonButtonElement).textContent).toEqual('Add');
    });
  });

  describe('update', () => {
    beforeEach(() => {
      component = <TastingNoteEditor onDismiss={mockDismiss} note={mockNote} />;
      mockSaveNote = jest.fn(() => Promise.resolve());
    });

    it('renders consistently', async () => {
      const { asFragment } = render(component);
      await wait(() => expect(asFragment()).toMatchSnapshot());
    });

    it('sets the properties', async () => {
      const { container } = render(component);
      const [brand, name, notes] = await waitForElement(() => [
        container.querySelector('#brand-input')!,
        container.querySelector('#name-input')!,
        container.querySelector('#notes-input')!,
      ]);
      expect(brand.getAttribute('value')).toEqual(mockNote.brand);
      expect(name.getAttribute('value')).toEqual(mockNote.name);
      expect(notes.getAttribute('value')).toEqual(mockNote.notes);
    });

    it('updates the data', async () => {
      const expected = { ...mockNote };
      expected.notes = "It's not good";
      const { container, getByLabelText } = render(component);
      const [brand, name, rating, notes, submit] = await waitForElement(() => [
        container.querySelector('#brand-input')!,
        container.querySelector('#name-input')!,
        getByLabelText(/Rate 1 stars/),
        container.querySelector('#notes-input')!,
        container.querySelector('[type="submit"]')! as HTMLIonButtonElement,
      ]);
      await wait(() => {
        fireEvent.ionChange(brand, mockNote.brand);
        fireEvent.ionChange(name, mockNote.name);
        fireEvent.click(rating);
        fireEvent.ionChange(notes, expected.notes);
        fireEvent.click(submit);
      });
      expect(mockSaveNote).toHaveBeenCalledWith(expected);
      expect(mockSaveNote).toHaveBeenCalledTimes(1);
    });

    it('has the update title', async () => {
      const { container } = render(component);
      await wait(() => expect(container).toHaveTextContent(/Tasting Note/));
    });

    it('has the update button label', async () => {
      const { container } = render(component);
      const submit = await waitForElement(
        () => container.querySelector('[type="submit"]')!,
      );
      expect((submit as HTMLIonButtonElement).textContent).toEqual('Update');
    });
  });

  describe('share', () => {
    beforeEach(() => {
      (Plugins.Share as any) = jest.fn();
      (Plugins.Share.share as any) = jest.fn();
    });

    it('is not allowed until a brand, name, and rating have all been entered', async () => {
      const { container, getByLabelText } = render(component);
      const [brand, name, rating, share] = await waitForElement(() => [
        container.querySelector('#brand-input')!,
        container.querySelector('#name-input')!,
        getByLabelText(/Rate 1 stars/),
        container.querySelector('#share-button')! as HTMLIonButtonElement,
      ]);
      await wait(() => {
        expect(share.disabled).toBeTruthy();
        fireEvent.ionChange(brand, mockNote.brand);
        expect(share.disabled).toBeTruthy();
        fireEvent.ionChange(name, mockNote.name);
        expect(share.disabled).toBeTruthy();
        fireEvent.click(rating);
      });
      expect(share.disabled).toBeFalsy();
    });

    it('calls the share plugin when pressed', async () => {
      const { container, getByLabelText } = render(component);
      const [brand, name, rating, share] = await waitForElement(() => [
        container.querySelector('#brand-input')!,
        container.querySelector('#name-input')!,
        getByLabelText(/Rate 1 stars/),
        container.querySelector('#share-button')! as HTMLIonButtonElement,
      ]);
      await wait(() => {
        expect(share.disabled).toBeTruthy();
        fireEvent.ionChange(brand, mockNote.brand);
        expect(share.disabled).toBeTruthy();
        fireEvent.ionChange(name, mockNote.name);
        expect(share.disabled).toBeTruthy();
        fireEvent.click(rating);
        fireEvent.click(share);
      });
      expect(Plugins.Share.share).toHaveBeenCalledTimes(1);
      expect(Plugins.Share.share).toHaveBeenCalledWith({
        title: `${mockNote.brand}: ${mockNote.name}`,
        text: `I gave ${mockNote.brand}: ${mockNote.name} ${mockNote.rating} stars on the Tea Taster app`,
        dialogTitle: 'Share your tasting note',
        url: 'https://tea-taster-training.web.app',
      });
    });
  });

  afterEach(() => {
    cleanup();
    jest.restoreAllMocks();
  });
});
