import randomNumber from '../randomNumber.js';

const rndProgression = () => {
  const progressPeriod = randomNumber(10);
  const progression = [randomNumber()];
  for (let i = randomNumber(5); i < 10; i += 1) {
    progression.push(progression[progression.length - 1] + progressPeriod);
  }
  return progression;
};

const description = 'What number is missing in the progression?';
const makeGameData = () => {
  const progression = rndProgression();
  const answerIndex = randomNumber(progression.length);
  const answer = progression[answerIndex].toString();
  progression[answerIndex] = '..';
  const question = `${progression.join(' ')}`;
  return { question, answer };
};

export default { description, makeGameData };
