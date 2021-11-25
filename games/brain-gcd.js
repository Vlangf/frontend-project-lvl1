import readlineSync from 'readline-sync';
import {
  welcome,
  result,
  check
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
    const rndNumberFirst = Math.floor(Math.random() * 30)
    const rndNumberSecond = Math.floor(Math.random() * 30)
    const answer = gcd(rndNumberFirst, rndNumberSecond).toString()
    const userAnswer = readlineSync.question(`Question: ${rndNumberFirst}` +
      ` ${rndNumberSecond} `);

    flag = check(answer, userAnswer)
    count += 1
  };

  result(name, flag)

}

export default brainGcd