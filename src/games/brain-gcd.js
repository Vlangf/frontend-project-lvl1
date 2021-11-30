import randomNumber from '../randomNumber.js';

const gcd = (firstNum, secondNum) => {
  let commonDel = 1;
  if (firstNum > secondNum) {
    commonDel = secondNum;
  } else {
    commonDel = firstNum;
  }
  while (commonDel > 0) {
    if (firstNum % commonDel === 0 && secondNum % commonDel === 0) {
      break;
    } else {
      commonDel -= 1;
    }
  }
  return commonDel;
};

const description = 'Find the greatest common divisor of given numbers.';
const makeGameData = () => {
  const rndNumFirst = randomNumber();
  const rndNumSecond = randomNumber();
  const answer = gcd(rndNumFirst, rndNumSecond).toString();
  const question = `${rndNumFirst} ${rndNumSecond}`;
  return { question, answer };
};

export default { description, makeGameData };
