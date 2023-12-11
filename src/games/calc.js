import gameLogic from '../index.js';
import getRandomInt from '../getRandomInt.js';

const gameTask = 'What is the result of the expression?';

const getRandomOperator = () => {
  const randomNum = getRandomInt(0, 2);
  const mathSymbols = ['+', '-', '*'];
  return mathSymbols[randomNum];
};

const calculate = (symbol, randomNum1, randomNum2) => {
  let result = 0;
  if (symbol === '+') {
    result = randomNum1 + randomNum2;
  } else if (symbol === '-') {
    result = randomNum1 - randomNum2;
  } else if (symbol === '*') {
    result = randomNum1 * randomNum2;
  }
  return result;
};

const gameStart = () => {
  const randomNum1 = getRandomInt(10, 20);
  const randomNum2 = getRandomInt(2, 19);
  const symbol = getRandomOperator();
  const question = `Question: ${randomNum1} ${symbol} ${randomNum2}`;
  const answer = calculate(symbol, randomNum1, randomNum2);
  return [question, answer];
};

export default () => {
  gameLogic(gameTask, gameStart);
};
