import getRandomNumber from '../utils/rundomNumber.js';
import general from '../utils/general.js';

const description = 'What number is missing in the progression?';

const length = 10;

const getProgression = (start, lengthProgression, middleValue) => {
  let progression = [];
  for (let i = 0; i < lengthProgression; i += 1) {
    progression = [...progression, start + middleValue * i];
  }

  return progression;
};

const getIntermediate = () => {
  const startNum = getRandomNumber(100);
  const middleNum = getRandomNumber(9);

  const arrayProgression = getProgression(startNum, length, middleNum);

  const noVisibleNum = getRandomNumber(arrayProgression.length) - 1;

  const question = [
    ...arrayProgression.slice(0, noVisibleNum),
    '..',
    ...arrayProgression.slice(noVisibleNum + 1),
  ];

  const right = String(arrayProgression[noVisibleNum]);

  return { question, right };
};

export default () => general(getIntermediate, description);
