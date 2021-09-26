import lift from './images/lift.jpeg';
import sliding from './images/sliding.png';

export const countries = [
  {
    id: 1,
    value: 'france',
    title: 'Франция',
  }, {
    id: 2,
    value: 'russia',
    title: 'Россия',
  }, {
    id: 3,
    value: 'china',
    title: 'Китай',
  },
];

export const pultList = [
  {
    id: 1,
    value: 'cOne',
    title: 'Одноканальный',
  }, {
    id: 2,
    value: 'cFive',
    title: 'Пятиканальный',
  }, {
    id: 3,
    value: 'cSixteen',
    title: 'Шестнадцатиканальный',
  },
];

const franceLiftCorniceMap = new Map([
  [1, 34500],
  [1.5, 37900],
  [2, 41300],
  [2.5, 44700],
  [3, 48100],
  [3.5, 51500],
  [4, 54900],
  [4.5, 58300],
  [5, 61700],
  [5.5, 65100],
]);

const chinaLiftCorniceMap = new Map([
  [1, 16100],
  [1.5, 17900],
  [2, 19600],
  [2.5, 21400],
  [3, 23100],
  [3.5, 24900],
  [4, 26600],
  [4.5, 28400],
  [5, 30100],
  [5.5, 31900],
]);

const russiaLiftCorniceMap = new Map([
  [1, 17800],
  [1.5, 18600],
  [2, 19400],
  [2.5, 20200],
  [3, 21000],
  [3.5, 21800],
  [4, 22600],
  [4.5, 23400],
  [5, 24200],
  [5.5, 25000],
]);

const franceSlideCorniceMap = new Map([
  [1, 28100],
  [1.5, 29400],
  [2, 30700],
  [2.5, 32000],
  [3, 33300],
  [3.5, 34600],
  [4, 35900],
  [4.5, 37300],
  [5, 38600],
  [5.5, 39900],
  [6, 41200],
  [6.5, 42500],
  [7, 43800],
  [7.5, 45100],
  [8, 46400],
]);

const chinaSlideCorniceMap = new Map([
  [1, 20900],
  [1.5, 22200],
  [2, 23500],
  [2.5, 24800],
  [3, 26100],
  [3.5, 27400],
  [4, 28700],
  [4.5, 30100],
  [5, 31400],
  [5.5, 32700],
  [6, 34000],
  [6.5, 35300],
  [7, 36600],
  [7.5, 37900],
  [8, 39200],
]);

const russiaSlideCorniceMap = new Map([
  [1, 21800],
  [1.5, 21800],
  [2, 21800],
  [2.5, 21800],
  [3, 21800],
  [3.5, 22800],
  [4, 23800],
  [4.5, 24800],
  [5, 25800],
  [5.5, 25800],
  [6, 25800],
  [6.5, 27800],
  [7, 27800],
  [7.5, 30000],
  [8, 30000],
]);

export const pricesLift = {
  france: {
    cornice: franceLiftCorniceMap,
    pult: {
      cOne: 5300,
      cFive: 12000,
      cSixteen: 26000,
    },
  },
  china: {
    cornice: chinaLiftCorniceMap,
    pult: {
      cOne: 2700,
      cFive: 4100,
      cSixteen: 5200,
    },
  },
  russia: {
    cornice: russiaLiftCorniceMap,
    pult: {
      cOne: 2100,
      cSixteen: 3100,
    },
  },
};

export const pricesSlide = {
  france: {
    cornice: franceSlideCorniceMap,
    pult: {
      cOne: 5300,
      cFive: 12000,
      cSixteen: 26000,
    },
  },
  china: {
    cornice: chinaSlideCorniceMap,
    pult: {
      cOne: 2700,
      cFive: 4100,
      cSixteen: 5200,
    },
  },
  russia: {
    cornice: russiaSlideCorniceMap,
    pult: {
      cOne: 2100,
      cSixteen: 3100,
    },
  },
};

export const corniceTypes = [
  {
    id: 'sliding',
    value: 'sliding',
    title: 'Раздвижной',
    image: sliding,
    prices: pricesSlide,
  }, {
    id: 'lift',
    value: 'lift',
    title: 'Подъемный',
    image: lift,
    prices: pricesLift,
  },
];
