import river from './images/river.jpg';
import riverSmall from './images/river_min.jpg';
import veteran from './images/veteran.jpg';
import veteranSmall from './images/veteran_min.jpg';
import life from './images/life.jpg';
import lifeSmall from './images/life_min.jpg';
import image1 from './images/i1.jpg';
import image1Small from './images/i1_min.jpg';
import image2 from './images/i2.jpg';
import image2Small from './images/i2_min.jpg';
import image3 from './images/i3.jpg';
import image3Small from './images/i3_min.jpg';

const Data = [
  {
    id: 1,
    thumb: veteranSmall,
    image: veteran,
    title: 'Проект гостиной на проспекте Ветеранов',
    body: 'Комбинированные портьеры на профильном карнизе, расположенном в нише. Идеальное сочетание двух фактур атласных портьер с классическим рисунком. Композиция дополнена плотным тюлем кремовой фактуры',
    days: 12,
  }, {
    id: 2,
    thumb: riverSmall,
    image: river,
    title: 'Проект гостиной в классическом стиле ЖК "RIVERSIDE"',
    body: 'Оформление окна однотонными портьерами из нежнейшего атласа лазурного оттенка дополнены свагами-ракушками из той же ткани в сочетании с атласом цвета пролине. Подхваты на магнитах, сохраняющие целостность стены с декоративной отделкой отлично завершают композицию. Также выполнено несколько декоративных подушек для поддержания целостности интерьера.',
    days: 17,
  }, {
    id: 3,
    thumb: lifeSmall,
    image: life,
    title: 'Решение для кухни 30 м ЖК "Life Приморский"',
    body: 'Портьеры на электрокарнизе из плотного натурального бархата цвета топленого молока были идеально подобраны к обивке кожного дивана дополнены глянцевым тюлем жемчужного цвета. Бархатная фактура при дополнительном освещении меняет оттенок и играет разными красками в соответствии с решениями интерьера.',
    days: 25,
  }, {
    id: 4,
    thumb: image1Small,
    image: image1,
    title: 'Детская для мальчика ЖК Лайф Лесная',
    days: 14,
  }, {
    id: 5,
    thumb: image2Small,
    image: image2,
    title: 'Оформление спальни в классическом стиле ЖК Riverside',
    days: 21,
  }, {
    id: 6,
    thumb: image3Small,
    image: image3,
    title: 'Оформление детской для девочки ЖК Огни Москвы',
    days: 17,
  },
];

export const IMAGES = Data.map(i => i.image);

export default Data;
