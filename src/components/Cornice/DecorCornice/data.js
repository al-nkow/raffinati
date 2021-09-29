import bronze from './images/bronze.jpg';
import black from './images/black.png';
import chrome from './images/chrome.jpg';
import brass from './images/brass.jpg';
import white from './images/white.png';

import helium from './images/helium.jpg';
import giro from './images/giro.jpg';
import globo from './images/globo.jpg';
import zavitok from './images/zavitok.jpg';
import ampir from './images/ampir.jpg';
import wizard from './images/wizard.png';
import bullet from './images/bullet.jpg';
import runo from './images/runo.jpg';
import trapeze from './images/trapeze.jpg';
import zaglushka from './images/zaglushka.jpg';
import karamel from './images/karamel.jpg';
import kedr from './images/kedr.jpg';
import liana from './images/liana.jpg';
import list from './images/list.jpg';
import ball from './images/ball.jpg';
import cutBall from './images/cutBall.jpg';

import vitaya from './images/vitaya.jpg';
import gladkaya from './images/gladkaya.jpg';
import rifl from './images/rifl.jpg';

export const сolors = [
  {
    id: 1,
    title: 'Белый',
    img: white,
  }, {
    id: 2,
    title: 'Бронза',
    img: bronze,
  }, {
    id: 3,
    title: 'Латунь',
    img: brass,
  }, {
    id: 4,
    title: 'Хром',
    img: chrome,
  }, {
    id: 5,
    title: 'Черный',
    img: black,
  },
];

export const factSheet = [
  {
    id: 1,
    value: 'plain',
    title: 'Гладкая',
    img: gladkaya,
  },
  {
    id: 2,
    value: 'twisted',
    title: 'Витая',
    img: vitaya,
  },
  {
    id: 3,
    value: 'fluted',
    title: 'Гофрированная',
    img: rifl,
  },
];

export const corniceTypes = [
  {
    id: 1,
    value: 'single',
    title: 'Однорядный',
  }, {
    id: 2,
    value: 'double',
    title: 'Двухрядный',
  },
];

export const diametersList = [
  {
    id: 1,
    value: 'r16',
    title: 'Ø 16',
  }, {
    id: 2,
    value: 'r19',
    title: 'Ø 19',
  }, {
    id: 3,
    value: 'r25',
    title: 'Ø 25',
  }, {
    id: 4,
    value: 'r16/16',
    title: 'Ø 16/16',
  }, {
    id: 5,
    value: 'r19/16',
    title: 'Ø 19/16',
  }, {
    id: 6,
    value: 'r25/16',
    title: 'Ø 25/16',
  },
];

export const tipsList = [
  {
    id: 1,
    title: 'Гелий',
    img: helium,
    price: 1160,
  },
  {
    id: 2,
    title: 'Гиро',
    img: giro,
    price: 440,
  },
  {
    id: 3,
    title: 'Глобо',
    img: globo,
    price: 630,
  },
  {
    id: 4,
    title: 'Завиток',
    img: zavitok,
    price: 750,
  },
  {
    id: 5,
    title: 'Ампир',
    img: ampir,
    price: 700,
  },
  {
    id: 6,
    title: 'Ажур',
    img: wizard,
    price: 800,
  },
  {
    id: 7,
    title: 'Пуля',
    img: bullet,
    price: 600,
  },
  {
    id: 8,
    title: 'Руно',
    img: runo,
    price: 500,
  },
  {
    id: 9,
    title: 'Трапеция',
    img: trapeze,
    price: 850,
  },
  {
    id: 10,
    title: 'Заглушка',
    img: zaglushka,
    price: 200,
  },
  {
    id: 11,
    title: 'Карамель',
    img: karamel,
    price: 1820,
  },
  {
    id: 12,
    title: 'Кедр',
    img: kedr,
    price: 1300,
  },
  {
    id: 13,
    title: 'Лиана',
    img: liana,
    price: 900,
  },
  {
    id: 14,
    title: 'Лист',
    img: list,
    price: 520,
  },
  {
    id: 15,
    title: 'Шар',
    img: ball,
    price: 850,
  },
  {
    id: 16,
    title: 'Шар с огранкой',
    img: cutBall,
    price: 900,
  },
];

const single16plain = new Map([
  [1, 1880],
  [1.2, 2030],
  [1.4, 2170],
  [1.6, 2320],
  [1.8, 2470],
  [2, 2610],
  [2.2, 2760],
  [2.4, 3480],
  [2.6, 3620],
  [2.8, 3770],
  [3, 3920],
  [3.2, 4060],
  [3.4, 4210],
  [3.6, 4350],
  [3.8, 4500],
  [4, 4650],
]);

const single16twisted = new Map([
  [1, 1920],
  [1.2, 2080],
  [1.4, 2230],
  [1.6, 2380],
  [1.8, 2540],
  [2, 2690],
  [2.2, 2850],
  [2.4, 3570],
  [2.6, 3730],
  [2.8, 3880],
  [3, 4040],
  [3.2, 4190],
  [3.4, 4340],
  [3.6, 4500],
  [3.8, 4650],
  [4, 4810],
]);

const single16fluted = new Map([
  [1, 1920],
  [1.2, 2080],
  [1.4, 2230],
  [1.6, 2380],
  [1.8, 2540],
  [2, 2690],
  [2.2, 2850],
  [2.4, 3570],
  [2.6, 3730],
  [2.8, 3880],
  [3, 4040],
  [3.2, 4190],
  [3.4, 4340],
  [3.6, 4500],
  [3.8, 4650],
  [4, 4810],
]);

const single19plain = new Map([
  [1, 2000],
  [1.2, 2162],
  [1.4, 2331],
  [1.6, 2500],
  [1.8, 2669],
  [2, 2838],
  [2.2, 3007],
  [2.4, 3750],
  [2.6, 3919],
  [2.8, 4088],
  [3, 4257],
  [3.2, 4426],
  [3.4, 4595],
  [3.6, 4764],
  [3.8, 4933],
  [4, 5102],
]);

const single19twisted = new Map([
  [1, 2060],
  [1.2, 2240],
  [1.4, 2430],
  [1.6, 2610],
  [1.8, 2790],
  [2, 2970],
  [2.2, 3150],
  [2.4, 3910],
  [2.6, 4090],
  [2.8, 4270],
  [3, 4460],
  [3.2, 4640],
  [3.4, 4820],
  [3.6, 5000],
  [3.8, 5180],
  [4, 5370],
]);

const single19fluted = new Map([
  [1, 2060],
  [1.2, 2240],
  [1.4, 2430],
  [1.6, 2610],
  [1.8, 2790],
  [2, 2970],
  [2.2, 3150],
  [2.4, 3910],
  [2.6, 4090],
  [2.8, 4270],
  [3, 4460],
  [3.2, 4640],
  [3.4, 4820],
  [3.6, 5000],
  [3.8, 5180],
  [4, 5370],
]);

const single25plain = new Map([
  [1, 2210],
  [1.2, 2410],
  [1.4, 2610],
  [1.6, 2810],
  [1.8, 3010],
  [2, 3200],
  [2.2, 3400],
  [2.4, 4210],
  [2.6, 4410],
  [2.8, 4610],
  [3, 4800],
  [3.2, 5000],
  [3.4, 5200],
  [3.6, 5400],
  [3.8, 5600],
  [4, 5790],
]);

const single25twisted = new Map([
  [1, 2270],
  [1.2, 2480],
  [1.4, 2690],
  [1.6, 2900],
  [1.8, 3110],
  [2, 3320],
  [2.2, 3530],
  [2.4, 4250],
  [2.6, 4460],
  [2.8, 4670],
  [3, 4880],
  [3.2, 5090],
  [3.4, 5300],
  [3.6, 5510],
  [3.8, 5720],
  [4, 5930],
]);

const single25fluted = new Map([
  [1, 2270],
  [1.2, 2480],
  [1.4, 2690],
  [1.6, 2900],
  [1.8, 3110],
  [2, 3320],
  [2.2, 3530],
  [2.4, 4250],
  [2.6, 4460],
  [2.8, 4670],
  [3, 4880],
  [3.2, 5090],
  [3.4, 5300],
  [3.6, 5510],
  [3.8, 5720],
  [4, 5930],
]);

const double16plain = new Map([
  [1, 3040],
  [1.2, 3330],
  [1.4, 3620],
  [1.6, 3910],
  [1.8, 4200],
  [2, 4500],
  [2.2, 4790],
  [2.4, 5730],
  [2.6, 6020],
  [2.8, 6310],
  [3, 6610],
  [3.2, 6900],
  [3.4, 7190],
  [3.6, 7480],
  [3.8, 7770],
  [4, 8070],
]);

const double16twisted = new Map([
  [1, 3120],
  [1.2, 3420],
  [1.4, 3730],
  [1.6, 4040],
  [1.8, 4350],
  [2, 4660],
  [2.2, 4960],
  [2.4, 5920],
  [2.6, 6230],
  [2.8, 6540],
  [3, 6850],
  [3.2, 7150],
  [3.4, 7460],
  [3.6, 7770],
  [3.8, 8080],
  [4, 8390],
]);

const double16fluted = new Map([
  [1, 3120],
  [1.2, 3420],
  [1.4, 3730],
  [1.6, 4040],
  [1.8, 4350],
  [2, 4660],
  [2.2, 4960],
  [2.4, 5920],
  [2.6, 6230],
  [2.8, 6540],
  [3, 6850],
  [3.2, 7150],
  [3.4, 7460],
  [3.6, 7770],
  [3.8, 8080],
  [4, 8390],
]);

const double19plain = new Map([
  [1, 3270],
  [1.2, 3600],
  [1.4, 3940],
  [1.6, 4280],
  [1.8, 4620],
  [2, 4960],
  [2.2, 5290],
  [2.4, 6280],
  [2.6, 6620],
  [2.8, 6960],
  [3, 7300],
  [3.2, 7630],
  [3.4, 7970],
  [3.6, 8310],
  [3.8, 8650],
  [4, 8990],
]);

const double19twisted = new Map([
  [1, 3400],
  [1.2, 3760],
  [1.4, 4120],
  [1.6, 4490],
  [1.8, 4850],
  [2, 5220],
  [2.2, 5580],
  [2.4, 6590],
  [2.6, 6960],
  [2.8, 7320],
  [3, 7690],
  [3.2, 8050],
  [3.4, 8410],
  [3.6, 8780],
  [3.8, 9140],
  [4, 9510],
]);

const double19fluted = new Map([
  [1, 3400],
  [1.2, 3760],
  [1.4, 4120],
  [1.6, 4490],
  [1.8, 4850],
  [2, 5220],
  [2.2, 5580],
  [2.4, 6590],
  [2.6, 6960],
  [2.8, 7320],
  [3, 7690],
  [3.2, 8050],
  [3.4, 8410],
  [3.6, 8780],
  [3.8, 9140],
  [4, 9510],
]);

const double25plain = new Map([
  [1, 3660],
  [1.2, 4070],
  [1.4, 4490],
  [1.6, 4900],
  [1.8, 5320],
  [2, 5740],
  [2.2, 6150],
  [2.4, 7220],
  [2.6, 7630],
  [2.8, 8050],
  [3, 8470],
  [3.2, 8880],
  [3.4, 9300],
  [3.6, 9710],
  [3.8, 10130],
  [4, 10550],
]);

const double25twisted = new Map([
  [1, 3780],
  [1.2, 4220],
  [1.4, 4660],
  [1.6, 5100],
  [1.8, 5540],
  [2, 5980],
  [2.2, 6420],
  [2.4, 7540],
  [2.6, 7980],
  [2.8, 8420],
  [3, 8860],
  [3.2, 9300],
  [3.4, 9740],
  [3.6, 10180],
  [3.8, 10620],
  [4, 11060],
]);

const double25fluted = new Map([
  [1, 3780],
  [1.2, 4220],
  [1.4, 4660],
  [1.6, 5100],
  [1.8, 5540],
  [2, 5980],
  [2.2, 6420],
  [2.4, 7540],
  [2.6, 7980],
  [2.8, 8420],
  [3, 8860],
  [3.2, 9300],
  [3.4, 9740],
  [3.6, 10180],
  [3.8, 10620],
  [4, 11060],
]);

export const decorPrices = {
  single: {
    r16: {
      plain: single16plain,
      twisted: single16twisted,
      fluted: single16fluted,
    },
    r19: {
      plain: single19plain,
      twisted: single19twisted,
      fluted: single19fluted,
    },
    r25: {
      plain: single25plain,
      twisted: single25twisted,
      fluted: single25fluted,
    },
  },
  double: {
    'r16/16': {
      plain: double16plain,
      twisted: double16twisted,
      fluted: double16fluted,
    },
    'r19/16': {
      plain: double19plain,
      twisted: double19twisted,
      fluted: double19fluted,
    },
    'r25/16': {
      plain: double25plain,
      twisted: double25twisted,
      fluted: double25fluted,
    },
  },
};
