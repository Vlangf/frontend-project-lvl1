import { randomNumber } from '../const.js'


const description = 'What is the result of the expression?'
const game = () => {
  const mathSym = ['+', '*', '-']
  const rndMathSym = mathSym[Math.floor(Math.random() * mathSym.length)]
  const question = `${randomNumber()} ${rndMathSym} ${randomNumber()}`
  const answer = eval(question).toString()

  return { question, answer }

}

export default { description, game }
