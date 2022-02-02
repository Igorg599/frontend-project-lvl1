import mainEngineGame from '../main.js';
import getRandomNumber from '../utils/rundomNumber.js';

const description = 'Answer "yes" if number even otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const getValues = () => {
  const number = getRandomNumber(1, 100);
  const question = String(number);
  const right = isEven(number) ? 'yes' : 'no';
  return { question, right };
};

export default () => mainEngineGame(getValues, description);
