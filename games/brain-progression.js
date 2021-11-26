import readlineSync from 'readline-sync';
import {
  welcome,
  result,
  check,
  randomNumber
} from '../src/index.js'

const rndProgression = () => {
  const progressPeriod = Math.floor(Math.random() * 10)
  let progression = [randomNumber()]
  for (let i = Math.floor(Math.random() * 5); i < 10; i += 1) {
    progression.push(progression[progression.length - 1] + progressPeriod)
  }
  return progression
}

const brainProgression = () => {
  const name = welcome()
  console.log('What number is missing in the progression?');

  let count = 0;
  let flag = true
  while (count < 3 && flag) {
    const progression = rndProgression()
    const answerIndex = Math.floor(Math.random() * progression.length)
    const answer = progression[answerIndex].toString()
    progression[answerIndex] = '..'
    const userAnswer = readlineSync.question(`Question: ${progression.join(' ')} `);

    flag = check(answer, userAnswer)
    count += 1
  };

  result(name, flag)

}

export default brainProgression