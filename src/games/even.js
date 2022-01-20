import general from '../utils/general.js';
import getRandomNumber from '../utils/rundomNumber.js';

const description = 'Answer "yes" if number even otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const getIntermediate = () => {
  const number = getRandomNumber(100);
  const question = String(number);
  const right = isEven(number) ? 'yes' : 'no';
  return { question, right };
};

export default () => general(getIntermediate, description);
