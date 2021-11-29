import { randomNumber } from '../randomNumber.js'

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

const description = 'Find the greatest common divisor of given numbers.'
const makeGameData = () => {
    const rndNumFirst = randomNumber()
    const rndNumSecond = randomNumber()
    const answer = gcd(rndNumFirst, rndNumSecond).toString()
    const question = `${rndNumFirst} ${rndNumSecond}`

    return { question, answer }

  }

export default { description, makeGameData }
