import getRandomNumber from '../utils/rundomNumber.js';
import mainEngineGame from '../main.js';

const description = 'Find the greatest common divisor of given numbers.';

const findGcd = (numOne, numTwo) => {
  if (numTwo === 0) {
    return numOne;
  }
  return findGcd(numTwo, numOne % numTwo);
};

const getValues = () => {
  const argumentOne = getRandomNumber(1, 100);
  const argumentTwo = getRandomNumber(1, 100);

  const question = `${argumentOne} ${argumentTwo}`;

  const right = String(findGcd(argumentOne, argumentTwo));

  return { question, right };
};

export default () => mainEngineGame(getValues, description);
