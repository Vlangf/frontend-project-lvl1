import readlineSync from 'readline-sync';


const start = (game) => {
  console.log('Welcome to the Brain Games!')
  const name = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${name}!`);

  console.log(game.description)
  let countGames = 0;
  let flag = true
  while (countGames < 3 && flag) {
    const { question, answer } = game.game()
    const userAnswer = readlineSync.question(`Question: ${question} `)
    if (answer === userAnswer) {
      console.log('Correct!')
      flag = true
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`)
      flag = false
      break
    }
    countGames += 1
  };

  if (flag) {
    console.log(`Congratulations, ${name}!`)
  } else {
    console.log(`Let's try again, ${name}!`)
  }
}

export default start
