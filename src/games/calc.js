import getRandomNumber from '../utils/rundomNumber.js';
import mainEngineGame from '../main.js';

const description = 'What is the result of the expression?';

const calcResult = (sign, oneNumber, twoNumber) => {
  switch (sign) {
    case '+':
      return oneNumber + twoNumber;
    case '-':
      return oneNumber - twoNumber;
    default:
      return oneNumber * twoNumber;
  }
};

const getValues = () => {
  const signs = ['+', '-', '*'];
  const operatorIndex = getRandomNumber(0, 2);
  const selectSign = signs[operatorIndex];

  const argumentOne = getRandomNumber(1, 99);
  const argumentTwo = getRandomNumber(1, 99);

  const right = String(calcResult(selectSign, argumentOne, argumentTwo));

  const question = `${argumentOne} ${selectSign} ${argumentTwo}`;

  return { question, right };
};

export default () => mainEngineGame(getValues, description);
