import general from '../utils/general.js';
import getRandomNumber from '../utils/rundomNumber.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  for (let i = 2; i < num; i += i) if (num % i === 0) return false;
  return num > 1;
};

const getIntermediate = () => {
  const question = getRandomNumber(100);
  const right = isPrime(question) ? 'yes' : 'no';
  return { question, right };
};

export default () => general(getIntermediate, description);