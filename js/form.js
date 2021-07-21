const formRoomCapacity = document.querySelector('#capacity');
const formRoomNumber = document.querySelector('#room_number');
const childRoomCapacity = formRoomCapacity.children;

const informationForm = document.querySelector('.ad-form');
const childInformationForm = informationForm.children;

const mapFilter = document.querySelector('.map__filters');
const childMapFilter = mapFilter.children;

const getDisabled = function(children) {
  Array.from(children).forEach((element) => {
    element.setAttribute('disabled', 'true');
  });
};

const getEnable = function(children) {
  Array.from(children).forEach((element) => {
    element.removeAttribute('disabled');
  });
};

const getPageEnable = function () {
  getEnable(childInformationForm);
  getEnable(childMapFilter);
  informationForm.classList.remove('ad-form--disabled');
  mapFilter.classList.remove('map__filters--disabled');
};

informationForm.classList.add('ad-form--disabled');

mapFilter.classList.add('map__filters--disabled');

getDisabled(childInformationForm);

getDisabled(childMapFilter);


getDisabled(childRoomCapacity);
formRoomNumber.addEventListener('change', (evt) =>{
  getDisabled(childRoomCapacity);
  if (evt.target.value === '100') {
    childRoomCapacity[3].removeAttribute('disabled');
    return;
  }
  if (evt.target.value >= 1) {
    childRoomCapacity[2].removeAttribute('disabled');
  }
  if (evt.target.value >= 2) {
    childRoomCapacity[1].removeAttribute('disabled');
  }
  if (evt.target.value >= 3) {
    childRoomCapacity[0].removeAttribute('disabled');
  }
});

export {getPageEnable};
