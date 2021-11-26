import readlineSync from 'readline-sync';
import {
  welcome,
  result,
  check,
  randomNumber
} from '../src/index.js'

const brainCalc = () => {
  const name = welcome()
  console.log('What is the result of the expression?');


  const mathSym = ['+', '*', '-']
  const rndMathSym = mathSym[Math.floor(Math.random() * mathSym.length)]

  let count = 0;
  let flag = true
  while (count < 3 && flag) {
    const rndExpression = `${randomNumber()}  ${rndMathSym} ${randomNumber()}`
    const answer = eval(rndExpression).toString()
    const userAnswer = readlineSync.question(`Question: ${rndExpression} `);

    flag = check(answer, userAnswer)
    count += 1
  };

  result(name, flag)

}

export default brainCalc