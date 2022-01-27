import getRandomNumber from '../utils/rundomNumber.js';
import general from '../general.js';

const description = 'Find the greatest common divisor of given numbers.';

const NoD = (numOne, numTwo) => {
  if (numTwo === 0) {
    return numOne;
  }
  return NoD(numTwo, numOne % numTwo);
};

const getIntermediate = () => {
  const argumentOne = getRandomNumber(100);
  const argumentTwo = getRandomNumber(100);

  const question = `${argumentOne} ${argumentTwo}`;

  const right = String(NoD(argumentOne, argumentTwo));

  return { question, right };
};

export default () => general(getIntermediate, description);
