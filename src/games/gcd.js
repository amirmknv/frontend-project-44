import gameLogic from '../index.js';
import getRandomInt from '../getRandomInt.js';

const gameTask = 'Find the greatest common divisor of given numbers.';

const answer = (randomNum1, randomNum2) => {
  let num1 = randomNum1;
  let num2 = randomNum2;
  while (num1 && num2) {
    if (num1 > num2) {
      num1 %= num2;
    } else {
      num2 %= num1;
    }
  }
  num1 += num2;
  return num1;
};

const gameStart = () => {
  const randomNum1 = getRandomInt(1, 50);
  const randomNum2 = getRandomInt(1, 50);
  const question = `Question: ${randomNum1} ${randomNum2}`;
  return [question, String(answer(randomNum1, randomNum2))];
};

export default () => {
  gameLogic(gameTask, gameStart);
};
