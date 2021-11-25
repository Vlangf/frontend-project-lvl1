import readlineSync from 'readline-sync';
import {
  welcome,
  result,
  check
} from '../src/index.js'

const brainEven = () => {
  const name = welcome()
  console.log('Answer "yes" if the number is even, otherwise answer "no"');

  const answer_dict = {
    true: 'yes',
    false: 'no'
  }
  let count = 0;
  let flag = true
  while (count < 3 && flag) {
    const randomNumber = Math.floor(Math.random() * 101);
    const answer = answer_dict[randomNumber % 2 === 0];
    const userAnswer = readlineSync.question(`Question: ${randomNumber} `);

    flag = check(answer, userAnswer)
    count += 1
  };

  result(name, flag)

}

export default brainEven