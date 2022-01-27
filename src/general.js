import readlineSync from 'readline-sync';
import helloGuest from './cli.js';

const general = async (getTaskData, condition) => {
  const name = await helloGuest();
  console.log(condition);

  for (let i = 3; i > 0; i -= 1) {
    const { question, right } = getTaskData();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === right) {
      console.log('Correct!');
    } else {
      console.log(
        `${answer} is wrong answer ;(. Correct answer was ${right}. Let's try again, ${name}!`,
      );
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default general;
