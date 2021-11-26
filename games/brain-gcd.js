import readlineSync from 'readline-sync';
import {
  welcome,
  result,
  check,
  randomNumber
} from '../src/index.js'

const gcd = (firstNum, secondNum) => {
  let commonDel = 1
  if (firstNum > secondNum) {
    commonDel = secondNum
  } else {
    commonDel = firstNum
  }
  while (true) {
    if (firstNum % commonDel === 0 && secondNum % commonDel === 0) {
      return commonDel
    } else {
      commonDel -= 1
    }
  }
}

const brainGcd = () => {
  const name = welcome()
  console.log('Find the greatest common divisor of given numbers.');

  let count = 0;
  let flag = true
  while (count < 3 && flag) {
    const rndNumFirst = randomNumber()
    const rndNumSecond = randomNumber()
    const answer = gcd(rndNumberFirst, rndNumberSecond).toString()
    const userAnswer = readlineSync.question(`Question: ${rndNumFirst}` +
      ` ${rndNumSecond} `);

    flag = check(answer, userAnswer)
    count += 1
  };

  result(name, flag)

}

export default brainGcd