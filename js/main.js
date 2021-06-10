
function getRandomPositiveInteger (a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

function getRandomPositiveFloat (a, b, digits = 1) {
  const lower = Math.min(Math.abs(a), Math.abs(b));
  const upper = Math.max(Math.abs(a), Math.abs(b));
  const result = Math.random() * (upper - lower) + lower;
  return result.toFixed(digits);
}
const TYPE = ['palace', 'flat', 'house', 'bungalow','hotel'];
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const IN_OUT_TIME = ['12:00', '13:00','14:00'];
const PHOTOS = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg','https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg','https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];
const avatarRandomizer = () =>{
  const random = getRandomPositiveInteger(0,10);
  if (random===0 || random===10){
    return random;
  }
  return '0'+ random;
};
const typeRandomizer = () => {
  return TYPE[getRandomPositiveInteger(0,4)];
};
const checkInOutRandomizer = () => {
  return IN_OUT_TIME[getRandomPositiveInteger(0,2)];
};
const featuresRandomizer = () => {
  return FEATURES.slice(getRandomPositiveInteger(0,5));
};
const photosRandomizer = () => {
  return PHOTOS.slice(getRandomPositiveInteger(0,2));
};

const createAuthor = () => {
  return {
    avatar : 'mg/avatars/user'+avatarRandomizer()+'.png',
  };
};
const createOffer = () => {
  return {
    title : 'Заголовок '+getRandomPositiveInteger(0,10),
    addres : getRandomPositiveFloat(0,90,6)+', '+getRandomPositiveFloat(0,90,6),
    price : getRandomPositiveInteger(0,100000),
    rooms : getRandomPositiveInteger(0,100),
    type : typeRandomizer(),
    quests : getRandomPositiveInteger(0,200),
    checkin : checkInOutRandomizer(),
    checkout: checkInOutRandomizer(),
    features: featuresRandomizer(),
    description: 'Описание '+getRandomPositiveInteger(0,10),
    photos: photosRandomizer(),
  };
};
const createLocation = () => {
  return {
    lat : getRandomPositiveFloat(35.65000,35.70000,5),
    lng : getRandomPositiveFloat(139.70000,139.80000,5),
  };
};
const createCard = () => {
  return {
    author:createAuthor(),
    offer:createOffer(),
    location: createLocation(),
  };
};
const cardsOffer = new Array(10).fill(null).map(() => {return createCard()});
