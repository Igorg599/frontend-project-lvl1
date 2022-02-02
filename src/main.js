import readlineSync from 'readline-sync';

const numberOfRounds = 3;

const mainEngineGame = (getTaskData, condition) => {
  console.log('Welcome to Brain Games!!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello ${name}`);
  console.log(condition);

  for (
    let currentRound = 1;
    currentRound <= numberOfRounds;
    currentRound += 1
  ) {
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

export default mainEngineGame;
