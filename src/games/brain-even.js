import { randomNumber } from '../const.js'

export const description = 'Answer "yes" if the number is even, otherwise answer "no"'

export const game = () => {
  const question = randomNumber()
  const answer = question % 2 === 0 ? 'yes' : 'no';
  return { question, answer }

}

export default { description, game }
