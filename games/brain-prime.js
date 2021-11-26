import readlineSync from 'readline-sync';
import {
  welcome,
  result,
  check,
  randomNumber,
  answerDict
} from '../src/index.js'

const isPrime = (num) => {
  if (num === 1) {
    return true
  }
  for (let i = 2; i < num / 2 + 1; i += 1) {
    if (num % i === 0) {
      return false
    }
  }
  return true
}

const brainPrime = () => {
  const name = welcome()
  console.log('"yes" if given number is prime. Otherwise answer "no"');

  let count = 0;
  let flag = true
  while (count < 3 && flag) {
    const rndNum = randomNumber()
    const answer = answerDict[isPrime(rndNum)]
    const userAnswer = readlineSync.question(`Question: ${rndNum} `);

    flag = check(answer, userAnswer)
    count += 1
  };

  result(name, flag)

}

export default brainPrime