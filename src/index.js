import readlineSync from 'readline-sync';

export const welcome = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name
}

export const result = (name, flag) => {
  if (flag) {
    console.log(`Congratulations, ${name}!`)
  } else {
    console.log(`Let's try again, ${name}!`)
  }
}

export const check = (answer, userAnswer) => {
  if (answer === userAnswer) {
    console.log('Correct!')
    return true
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
    return false
  };
}

export const answerDict = {
  true: 'yes',
  false: 'no'
}

export const randomNumber = () => {
  return Math.floor(Math.random() * 101)
}