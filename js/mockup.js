import {TYPE, FEATURES,IN_OUT_TIME,PHOTOS,DESCRIPTIONS,MAX_PRICE,MAX_ROOM,MAX_QUEST,MAX_LAT,MAX_LNG,MIN_LAT_LOCATION,MAX_LAT_LOCATION,MIN_LNG_LOCATION,MAX_LNG_LOCATION,DIGIT_LOCATION,MAX_TITLE, MAX_AVATAR_NUMBER} from './data.js';

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

const getAvatarRandom = () =>{
  const random = getRandomPositiveInteger(0,MAX_AVATAR_NUMBER);
  if (random===0){
    return random;
  }
  return (random).toString().padStart(2, 0);
};

const getRandomArrayElement = (elements) => {
  const random =getRandomPositiveInteger(0,elements.length-1);
  return elements[random];
};

const shuffleArray = (datum) => {
  for (let counterOne = datum.length - 1; counterOne > 0; counterOne--) {
    const counterTwo = Math.floor(Math.random() * (counterOne + 1));
    [datum[counterOne], datum[counterTwo]] = [datum[counterTwo], datum[counterOne]];
  }
};

const getRandomArrayElements = (elements) => {
  shuffleArray(elements);
  return elements.slice(getRandomPositiveInteger(0,elements.length-1));
};

const createPhotos = (photos) => {
  photos.forEach((item,index) => {photos[index] = `https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/${item}`;});
  return photos;
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

const cardsOffer = createCard();

export {cardsOffer};
