import readlineSync from 'readline-sync';

const start = (game) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  console.log(game.description);
  let countGames = 0;
  while (countGames < 3) {
    const { question, answer } = game.makeGameData();
    console.log(`Question: ${question} `);
    const userAnswer = readlineSync.question('Your answer: ');
    if (answer === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
      break;
    }
    countGames += 1;
  }

  if (countGames === 3) {
    console.log(`Congratulations, ${name}!`);
  } else {
    console.log(`Let's try again, ${name}!`);
  }
};

export default start;
