import romeTulle from 'images/romeTulle.png';
import romeBlackout from 'images/romeBlackout.png';
import romeLinen from 'images/romeLinen.png';

import tulleVeil from 'images/tulleVeil.png';
import tulleCrepe from 'images/tulleCrepe.png';
import tulleLinen from 'images/tulleLinen.png';

import portiereBlackout from 'images/portiereBlackout.png';
import portiereLight from 'images/portiereLight.png';
import portiereBarhat from 'images/portiereBarhat.png';

import cornice1 from 'images/cornice1.jpg';
import cornice2 from 'images/cornice2.jpeg';
import cornice3 from 'images/cornice3.jpeg';

export const contentWidth = 1170;

// Breakpoints
export const BP_0 = '@media only screen and (max-width: 1064px)';
export const BP_1 = '@media only screen and (max-width: 938px)';
export const BP_2 = '@media only screen and (max-width: 734px)';
export const BP_21 = '@media only screen and (max-width: 767px)';
export const BP_3 = '@media only screen and (max-width: 400px)';

export const passion = '#a82d2c';
export const grey = '#767676';
export const lightGrey = '#F4F0ED';
export const light = '#fdfaf7';
export const text = '#333333';
export const red = '#e82727';
export const mainbg = '#E7E2DF';

export const gray74 = '#bdbdbd';
export const gray76 = '#767676';
export const gray31 = '#4f4f4f';

export const phone = '+7 (921) 932-80-89';
export const email = 'info@raffinati.org';
export const instaUrl = 'https://instagram.com/raffinati_textile?r=nametag';
export const whatsappUrl = 'https://api.whatsapp.com/send?phone=79219328089';

export const menuItems = [
  {
    name: '',
    link: '',
  },
];

export const romeOptions = [
  {
    id: 'romeBlackout',
    title: 'Блэкаут',
    image: romeBlackout,
    price: 2200,
    info: 'Римская штора из Блэкаута отлично защитит от солнечного света, выгорания мебели и сохранит Ваш сон',
  },
  {
    id: 'romeCloth',
    title: 'Лён',
    image: romeLinen,
    price: 1600,
    info: 'Римская штора из портьерной ткани станет финальным штрихом и придаст помещению законченный вид',
  },
  {
    id: 'romeTulle',
    title: 'Тюль',
    image: romeTulle,
    price: 1300,
    info: 'Полупрозрачные римские шторы из тюля отлично подойдут для сохранения естественного освещения в Вашем помещении',
  },
];

export const tulleOptions = [
  {
    id: 'tulleVeil',
    title: 'Вуаль',
    image: tulleVeil,
    price: 600,
    info: 'Вуаль – прозрачная легкая ткань. Драпируется мягкими складками. Окно декорированное вуалью становится светлее, так как этот тонкий материал пропускает максимум света',
  },
  {
    id: 'tulleCrepe',
    title: 'Креп',
    image: tulleCrepe,
    price: 1900,
    info: 'Креповая ткань отлично драпируется, практически не мнется, устойчива к выцветанию, приятная на ощупь. За счет плотного переплетения нитей идеально преломляет солнечные лучи',
  },
  {
    id: 'tulleLinen',
    title: 'Лён',
    image: tulleLinen,
    price: 1300,
    info: 'Шторы из тюля под лен отлично подойдут для лофтовых интерьеров, а также декорирования помещений в эко стиле. Благодаря пористой структуре, материал обеспечивает постоянную циркуляцию воздуха. Главной особенностью является отсутствие блеска, а рельефная матовая поверхность придает ткани натуральный вид',
  },
];

export const portiereOptions = [
  {
    id: 'portiereBlackout',
    title: 'Блэкаут',
    image: portiereBlackout,
    price: 1900,
    info: 'Светонепроницаемость ткани создается за счет плотного переплетения нитей: основного цвета и темного волокна. Тем самым блокирует поток солнечных лучей, обеспечивая затемнение помещения как в кинотеатре',
  },
  {
    id: 'portiereLight',
    title: 'Лёгкие',
    image: portiereLight,
    price: 1600,
  },
  {
    id: 'portiereVelvet',
    title: 'Бархат',
    image: portiereBarhat,
    price: 2800,
  },
];

export const corniceOptions = [
  {
    id: 'cornice2',
    title: 'Декоративный',
    image: cornice2,
    info: 'Декоративные карнизы изготавливаются из дерева и латуни, могут быть хромированными и коваными',
  },
  {
    id: 'cornice1',
    title: 'Профильный',
    image: cornice1,
    price: 850,
    info: 'Представляет собой шину прямоугольного сечения с направляющими пазами. По этим прорезям перемещаются крючки или зажимы, на которых удерживаются шторы',
  },
  {
    id: 'cornice3',
    title: 'Электрокарниз',
    image: cornice3,
    info: 'Это карниз, в котором шторы задвигаются и раздвигаются сами с помощью компактного и тихого электромотора и встроенного механизма. Шторы с электрокарнизами сделают Ваш дом еще более современным и уютным.',
  },
];

export const TAPE_PRICE = 100; // Шторная лента цена за метр
export const TAPE_COEF = 0.3; // Коэффициент расчета шторной ленты
export const ROME_CORNICE_BASE_PRICE = 2200;
export const CORNICE_REG_PRICE = corniceOptions.find(i => i.id === 'cornice1').price;
export const ROME_SEWING_BASE_PRICE = 1400;
export const SEWING_BASE_PRICE = 800;
