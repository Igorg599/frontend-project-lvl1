import general from '../general.js';
import getRandomNumber from '../utils/rundomNumber.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const getIntermediate = () => {
  const question = getRandomNumber(100);
  const right = isPrime(question) ? 'yes' : 'no';
  return { question, right };
};

export default () => general(getIntermediate, description);
