import getRandomNumber from '../utils/rundomNumber.js';
import mainEngineGame from '../main.js';

const description = 'What number is missing in the progression?';

const length = 10;

const getProgression = (start, lengthProgression, middleValue) => {
  let progression = [];
  for (let i = 0; i < lengthProgression; i += 1) {
    progression = [...progression, start + middleValue * i];
  }

  return progression;
};

const getValues = () => {
  const startNum = getRandomNumber(1, 100);
  const stepProgression = getRandomNumber(1, 9);

  const arrayProgression = getProgression(startNum, length, stepProgression);

  const noVisibleNum = getRandomNumber(1, arrayProgression.length) - 1;

  const question = [
    ...arrayProgression.slice(0, noVisibleNum),
    '..',
    ...arrayProgression.slice(noVisibleNum + 1),
  ].join(' ');

  const right = String(arrayProgression[noVisibleNum]);

  return { question, right };
};

export default () => mainEngineGame(getValues, description);
