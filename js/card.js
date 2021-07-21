import {cardsOffer} from './mockup.js';


const dataCard = cardsOffer;

const cardTemplate = document.querySelector('#card').content;

const findOutTypeHouse = (testDataCard) => {
  switch(testDataCard.offer.type) {
    case 'flat':
      return 'Квартира';
    case 'bungalow':
      return 'Бунгало';
    case 'house':
      return 'Дом';
    case 'palace':
      return 'Дворец';
    case 'hotel':
      return 'Отель';
  }
};

const fillPhotos = (card, data) => {
  const photoContainer = card.querySelector('.popup__photos');
  const photo = photoContainer.querySelector('img').cloneNode(true);
  photoContainer.querySelector('img').remove();
  data.offer.photos.forEach((element) => {
    const newPhoto = photo.cloneNode(true);
    newPhoto.src = element;
    photoContainer.appendChild(newPhoto);
  });
};

const checkEmptyData = (data) => {
  if(data.textContent===''){
    data.classList.add('hidden');
  }
};

const featuresModifier = dataCard.offer.features.map((item) => `popup__feature--${item}`);

const createTestCard = (testDataCard) => {
  const card = cardTemplate.cloneNode(true);

  const cardTitle = card.querySelector('.popup__title');
  cardTitle.textContent = testDataCard.offer.title;
  checkEmptyData(cardTitle);

  const cardAddres = card.querySelector('.popup__text--address');
  cardAddres.textContent = testDataCard.offer.addres;
  checkEmptyData(cardAddres);

  const cardPrice = card.querySelector('.popup__text--price');
  cardPrice.textContent = `${testDataCard.offer.price} ₽/ночь`;
  checkEmptyData(cardPrice);

  const cardTypeHouse = card.querySelector('.popup__type');
  cardTypeHouse.textContent = findOutTypeHouse(testDataCard);
  checkEmptyData(cardTypeHouse);

  const cardRoomQuestNumber = card.querySelector('.popup__text--capacity');
  if (testDataCard.offer.rooms !== '' & testDataCard.offer.quests !== ''){
    cardRoomQuestNumber.textContent = `${testDataCard.offer.rooms} комнаты для ${testDataCard.offer.quests}`;}
  else{cardRoomQuestNumber.classList.add('hidden');}

  const cardTimeInOut =card.querySelector('.popup__text--time');
  if(testDataCard.offer.checkin !== '' & testDataCard.offer.checkout !== ''){
    cardTimeInOut.textContent = `Заезд после ${testDataCard.offer.checkin}, вызд до ${testDataCard.offer.checkout}`;}
  else {cardTimeInOut.classList.add('hidden');}

  if (featuresModifier.length !== 0){
    const featureListElement = card.querySelector('.popup__features');
    featureListElement.querySelectorAll('.popup__feature').forEach((item) => {
      const modifier = item.classList[1];
      if (!featuresModifier.includes(modifier)){
        item.remove();}
    });
  }else{card.querySelector('.popup__features').classList.add('hiddden');}

  const cardDescription = card.querySelector('.popup__description');
  cardDescription.textContent = testDataCard.offer.description;
  checkEmptyData(cardDescription);

  if(testDataCard.offer.photos.length !== 0){
    fillPhotos(card,testDataCard);}
  else {
    card.querySelector('.popup_photo').classList.add('hidden');
  }
  const cardAvatar =  card.querySelector('img');
  cardAvatar.src= testDataCard.author.avatar;
  checkEmptyData(cardAvatar);
  return card;
};
const testCard = createTestCard(dataCard);
export {createTestCard};
