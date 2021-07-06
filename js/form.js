const formRoomCapacity = document.querySelector('#capacity');
const formRoomNumber = document.querySelector('#room_number');
const childRoomCapacity = formRoomCapacity.children;


formRoomNumber.addEventListener('change', (evt) =>{
  childRoomCapacity[0].setAttribute('disabled', 'true');
  childRoomCapacity[1].setAttribute('disabled', 'true');
  childRoomCapacity[2].setAttribute('disabled', 'true');
  childRoomCapacity[3].setAttribute('disabled', 'true');

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
export {};
