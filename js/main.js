
function getRandomPositiveInteger (firstBorder, secondBorder) {
  const lower = Math.ceil(Math.min(Math.abs(firstBorder), Math.abs(secondBorder)));
  const upper = Math.floor(Math.max(Math.abs(firstBorder), Math.abs(secondBorder)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

function getRandomPositiveFloat (firstBorder, secondBorder, digits = 1) {
  const lower = Math.min(Math.abs(firstBorder), Math.abs(secondBorder));
  const upper = Math.max(Math.abs(firstBorder), Math.abs(secondBorder));
  const result = Math.random() * (upper - lower) + lower;
  return result.toFixed(digits);
}

const TYPE = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
];

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const IN_OUT_TIME = [
  '12:00',
  '13:00',
  '14:00',
];

const PHOTOS = [
  'duonguyen-8LrGtIxxa4w.jpg',
  'hbrandon-hoogenboom-SNxQGWxZQi0.jpg',
  'claire-rendall-b6kAwr1i0Iw.jpg',
];

const DESCRIPTIONS = [
  'Замечательное место.',
  'Хороший вид.',
  'Рядом море.',
  'Доступный транспорт.',
];

const MAX_PRICE = 100000;

const MAX_ROOM = 100;

const MAX_QUEST =200;

const MAX_LAT = 90;

const MAX_LNG = 180;

const MIN_LAT_LOCATION = 35.65000;

const MAX_LAT_LOCATION = 35.70000;

const MIN_LNG_LOCATION = 139.70000;

const MAX_LNG_LOCATION = 139.80000;

const DIGIT_LOCATION = 5;

const MAX_TITLE = 10;

const getAvatarRandom = () =>{
  const random = getRandomPositiveInteger(0,10);
  if (random===0){
    return random;
  }
  return (random).toString().padStart(2, 0);
};

const getRandomArrayElement = (elements) => {
  const random =getRandomPositiveInteger(0,elements.length-1);
  return elements[random];
};

const shuffle = (array) => {
  for (let counter = array.length - 1; counter > 0; counter--) {
    const counter2 = Math.floor(Math.random() * (counter + 1));
    [array[counter], array[counter2]] = [array[counter2], array[counter]];
  }
};

const getRandomArrayElements = (elements) => {
  shuffle(elements);
  return elements.slice(getRandomPositiveInteger(0,elements.length-1));
};

const createPhotos = (Photos) => {
  Photos.forEach((item,index) => {Photos[index] = `https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/${item}`;});
  return Photos;
};

const createAuthor = () => ({avatar : `mg/avatars/user${getAvatarRandom()}.png`,
});

const createOffer = () => ({
  title : `Заголовок ${getRandomPositiveInteger(0,MAX_TITLE)}`,
  addres : `${getRandomPositiveFloat(0,MAX_LAT,DIGIT_LOCATION)}, ${getRandomPositiveFloat(0,MAX_LNG,DIGIT_LOCATION)}`,
  price : getRandomPositiveInteger(0,MAX_PRICE),
  rooms : getRandomPositiveInteger(0,MAX_ROOM),
  type : getRandomArrayElement(TYPE),
  quests : getRandomPositiveInteger(0,MAX_QUEST),
  checkin :getRandomArrayElement(IN_OUT_TIME),
  checkout: getRandomArrayElement(IN_OUT_TIME),
  features: getRandomArrayElements(FEATURES),
  description: getRandomArrayElements(DESCRIPTIONS).join(' '),
  photos: getRandomArrayElements(createPhotos(PHOTOS)),
});

const createLocation = () => ({
  lat : getRandomPositiveFloat(MIN_LAT_LOCATION,MAX_LAT_LOCATION,DIGIT_LOCATION),
  lng : getRandomPositiveFloat(MIN_LNG_LOCATION,MAX_LNG_LOCATION,DIGIT_LOCATION),
});

const createCard = () => ({
  author:createAuthor(),
  offer:createOffer(),
  location: createLocation(),
});

const cardsOffer = new Array(10).fill(null).map(() => createCard());

cardsOffer;

