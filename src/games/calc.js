import getRandomNumber from '../utils/rundomNumber.js';
import general from '../utils/general.js';

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

const getIntermediate = () => {
  const signs = ['+', '-', '*'];
  const randomSign = signs[getRandomNumber(3) - 1];

  const argumentOne = getRandomNumber(99);
  const argumentTwo = getRandomNumber(99);

  const right = String(calcResult(randomSign, argumentOne, argumentTwo));

  const question = `${argumentOne} ${randomSign} ${argumentTwo}`;

  return { question, right };
};

export default () => general(getIntermediate, description);
