const getRandomNumber = (finish) =>
  // числа начинаются от 1 до finish
  Math.ceil(Math.random() * finish);

export default getRandomNumber;
