const randomizerIntegerInRange = (min, max) => {
  if (max-min<1 || min<0){ //max-min<1 проверка того, чтобы хотя бы одно целое число было в диапозоне//
    return 'Ошибка диапазона';
  }
  const Random = min + Math.random()*(max-min);
  return Math.floor(Random);
};
randomizerIntegerInRange();

const randomizerFloatInRange = (min,max,decimalPoint) =>{
  if (min>=max || min<0 ){
    return 'Ошибка диапазона';
  }
  const Random = min + Math.random()*(max-min);
  return (Math.floor(10**decimalPoint*Random))/(10**decimalPoint);

};
randomizerFloatInRange();
