const formRoomCapacity = document.querySelector('#capacity')
const formRoomNumber = document.querySelector('#room_number');
const childNodesRoomCapacity = formRoomCapacity.childNodes;
childNodesRoomCapacity[1].setAttribute('disabled', 'true'); //0
childNodesRoomCapacity[3].setAttribute('disabled', 'true'); //1
childNodesRoomCapacity[7].setAttribute('disabled', 'true'); //3
formRoomNumber.addEventListener('change', (evt) =>{
  if (evt.target.value === '1') {
    childNodesRoomCapacity[1].setAttribute('disabled', 'true'); //0
    childNodesRoomCapacity[3].setAttribute('disabled', 'true'); //1
    childNodesRoomCapacity[7].setAttribute('disabled', 'true'); //3
    childNodesRoomCapacity[5].removeAttribute('disabled'); //2
  }
  if (evt.target.value === '2') {
    childNodesRoomCapacity[1].setAttribute('disabled', 'true'); //0
    childNodesRoomCapacity[7].setAttribute('disabled', 'true'); //3
    childNodesRoomCapacity[5].removeAttribute('disabled'); //2
    childNodesRoomCapacity[3].removeAttribute('disabled'); //1
  }
  if (evt.target.value === '3') {
    childNodesRoomCapacity[7].setAttribute('disabled', 'true'); //3
    childNodesRoomCapacity[5].removeAttribute('disabled'); //2
    childNodesRoomCapacity[3].removeAttribute('disabled'); //1
    childNodesRoomCapacity[1].removeAttribute('disabled'); //0
  }
  if (evt.target.value === '100') {
    childNodesRoomCapacity[1].setAttribute('disabled', 'true'); //0
    childNodesRoomCapacity[3].setAttribute('disabled', 'true'); //1
    childNodesRoomCapacity[5].setAttribute('disabled', 'true'); //2
    childNodesRoomCapacity[7].removeAttribute('disabled'); //3
  }
});
export {};
