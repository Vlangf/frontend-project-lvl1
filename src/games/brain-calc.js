import randomNumber from '../randomNumber.js';

const description = 'What is the result of the expression?';
const makeGameData = () => {
  let answer = '';
  const mathSym = ['+', '*', '-'];
  const firstNum = randomNumber(50);
  const secondNum = randomNumber(50);
  const rndMathSym = mathSym[randomNumber(mathSym.length)];
  const question = `${firstNum} ${rndMathSym} ${secondNum}`;
  switch (rndMathSym) {
    case '+':
      answer = (firstNum + secondNum).toString();
      break;
    case '-':
      answer = (firstNum - secondNum).toString();
      break;
    case '*':
      answer = (firstNum * secondNum).toString();
      break;
    default:
      answer = (firstNum * secondNum).toString();
  }
  return { question, answer };
};

export default { description, makeGameData };
