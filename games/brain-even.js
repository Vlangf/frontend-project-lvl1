import readlineSync from 'readline-sync';
import {
  welcome,
  result,
  check,
  answerDict,
  randomNumber
} from '../src/index.js'

const brainEven = () => {
  const name = welcome()
  console.log('Answer "yes" if the number is even, otherwise answer "no"');
  let count = 0;
  let flag = true
  while (count < 3 && flag) {
    const rndNum = randomNumber();
    const answer = answerDict[randomNumber % 2 === 0];
    const userAnswer = readlineSync.question(`Question: ${rndNum} `);

    flag = check(answer, userAnswer)
    count += 1
  };

  result(name, flag)

}

export default brainEven