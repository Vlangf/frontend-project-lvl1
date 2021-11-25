#!/usr/bin/env node

import readlineSync from 'readline-sync';

const game = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no"');

  const answer_dict = {
    true: 'yes',
    false: 'no'
  }
  let flag = true;
  let count = 0;

  while (flag && count < 3) {
    const randomNumber = Math.floor(Math.random() * 101);
    const answer = answer_dict[randomNumber % 2 === 0];
    const user_answer = readlineSync.question(`Question: ${randomNumber} `);

    if (answer === user_answer) {
      console.log('Correct!')
      count += 1
    } else {
      console.log(`'${user_answer}' is wrong answer ;(. Correct answer was '${answer}'.`);
      break
    };
  };

  if (count === 3) {
    console.log(`Congratulations, ${name}!`)
  } else {
    console.log(`Let's try again, ${name}!`)
  }

}

game()