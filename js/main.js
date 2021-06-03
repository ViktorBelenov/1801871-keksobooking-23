const randomizerIntegerInRange = (min, max) => {
  if (max === undefined){
    return randomizerIntegerInRange(1, min);
  }
  if (Math.ceil(min)>Math.floor(max)){
    return NaN;
  }
  return  Math.floor(Math.ceil(min) + Math.random() * (Math.floor(max) - Math.ceil(min) + 1));
};
randomizerIntegerInRange();

const randomizerFloatInRange = (min,max,decimalPoint) =>{
  if (min >= max || min < 0){
    return NaN;
  }
  return Math.floor(randomizerIntegerInRange(min * 10 ** decimalPoint, max * 10 ** decimalPoint)) / (10 ** decimalPoint);

};
randomizerFloatInRange();
