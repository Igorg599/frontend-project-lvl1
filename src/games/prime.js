import mainEngineGame from '../main.js';
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

const getValues = () => {
  const question = getRandomNumber(1, 100);
  const right = isPrime(question) ? 'yes' : 'no';
  return { question, right };
};

export default () => mainEngineGame(getValues, description);
