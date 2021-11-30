import randomNumber from '../randomNumber.js';

export const description = 'Answer "yes" if the number is even, otherwise answer "no".';

export const makeGameData = () => {
  const question = randomNumber();
  const answer = question % 2 === 0 ? 'yes' : 'no';
  return { question, answer };
};

export default { description, makeGameData };
