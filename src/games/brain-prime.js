import randomNumber from '../randomNumber.js';

const isPrime = (num) => {
  if (num === 1) {
    return true;
  }
  for (let i = 2; i < num / 2 + 1; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const description = '"yes" if given number is prime. Otherwise answer "no"';
const makeGameData = () => {
  const question = randomNumber();
  const answer = isPrime(question) ? 'yes' : 'no';
  return { question, answer };
};

export default { description, makeGameData };
