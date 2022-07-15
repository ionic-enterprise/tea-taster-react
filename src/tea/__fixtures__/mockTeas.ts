import { Tea } from '../../shared/models';

export const expectedTeas = [
  {
    id: 1,
    name: 'Green',
    image: require(`../../assets/images/green.jpg`),
    description: 'Green tea description.',
  },
  {
    id: 2,
    name: 'Black',
    image: require(`../../assets/images/black.jpg`),
    description: 'Black tea description.',
  },
  {
    id: 3,
    name: 'Herbal',
    image: require(`../../assets/images/herbal.jpg`),
    description: 'Herbal Infusion description.',
  },
  {
    id: 4,
    name: 'Oolong',
    image: require(`../../assets/images/oolong.jpg`),
    description: 'Oolong tea description.',
  },
  {
    id: 5,
    name: 'Dark',
    image: require(`../../assets/images/dark.jpg`),
    description: 'Dark tea description.',
  },
  {
    id: 6,
    name: 'Puer',
    image: require(`../../assets/images/puer.jpg`),
    description: 'Puer tea description.',
  },
  {
    id: 7,
    name: 'White',
    image: require(`../../assets/images/white.jpg`),
    description: 'White tea description.',
  },
  {
    id: 8,
    name: 'Yellow',
    image: require(`../../assets/images/yellow.jpg`),
    description: 'Yellow tea description.',
  },
];

export const resultTeas = () => {
  return expectedTeas.map((t: Tea) => {
    const tea = { ...t };
    // @ts-ignore
    delete tea.image;
    return tea;
  });
};
