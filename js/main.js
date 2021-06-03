const randomizerIntegerInRange = (min, max) => {
  if (Math.trunc(min) >= Math.trunc(max) || min <0){ //проверка того, чтобы хотя бы одно целое число было в диапозоне//
    return Error('Ошибка диапазона');
  }
  const random = min + Math.random() * (max-min);
  if (Math.round(random) > max){  //Проверка за выход из диапозона, например при (2.3,3.8) math.round мог выдавать как 2, так и 4//
    return Math.floor(max);
  } else if (Math.round(random) < min){
    return Math.ceil(min);
  }
  return Math.round(random);
};
randomizerIntegerInRange();

const randomizerFloatInRange = (min,max,decimalPoint) =>{
  if (min >= max || min < 0){
    return Error('Ошибка диапазона');
  }
  const random = min + Math.random() * (max - min);
  return (Math.floor(10**decimalPoint * random)) / (10**decimalPoint);

};
randomizerFloatInRange();
