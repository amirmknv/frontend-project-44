import gameLogic from '../index.js';
import getRandomInt from '../getRandomInt.js';

const gameTask = 'What number is missing in the progression?';

const minCounter = 2;
const maxCounter = 4;
const maxLength = 19;

const gameStart = () => {
  const number1 = getRandomInt(1, 100);
  const number2 = (number1 + maxLength);
  const counter = getRandomInt(minCounter, maxCounter);
  const missingElement = '..';

  const arithmeticProgression = () => {
    const result = [];
    let i = number1;
    while (i < number2) {
      result.push(i);
      i += counter;
    }
    return result;
  };

  const progression = arithmeticProgression();
  const randomIndex = getRandomInt(0, progression.length - 1);
  const answer = progression[randomIndex].toString();
  progression[randomIndex] = missingElement;
  const question = progression.join(' ').trim();
  return [question, answer];
};

export default () => {
  gameLogic(gameTask, gameStart);
};
