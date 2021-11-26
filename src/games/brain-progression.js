import { randomNumber } from '../const.js'

const rndProgression = () => {
  const progressPeriod = Math.floor(Math.random() * 10)
  let progression = [randomNumber()]
  for (let i = Math.floor(Math.random() * 5); i < 10; i += 1) {
    progression.push(progression[progression.length - 1] + progressPeriod)
  }
  return progression
}

const description = 'What number is missing in the progression?'
const game = () => {
    const progression = rndProgression()
    const answerIndex = Math.floor(Math.random() * progression.length)
    const answer = progression[answerIndex].toString()
    progression[answerIndex] = '..'
    const question = `${progression.join(' ')}`

    return { question, answer }

  }

  export default { description, game }
