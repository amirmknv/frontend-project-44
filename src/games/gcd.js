import gameLogic from "../index.js";
import getRandomInt from "../getRandomInt.js";

const gameTask = "Find the greatest common divisor of given numbers.";

const randomNum1 = getRandomInt(1, 50);
const randomNum2 = getRandomInt(1, 50);
const question = `Question: ${randomNum1} ${randomNum2}`;

const answer = (randomNum1, randomNum2) => {
 while (randomNum1 && randomNum2) {
if (randomNum1 > randomNum2) {
   randomNum1 = randomNum1 % randomNum2;
 }  else {
   randomNum2 = randomNum2 % randomNum1;
  } 
 }
 randomNum1 = randomNum1 + randomNum2;
 return randomNum1;

};

const gameStart = () => {
 return [question, String(answer(randomNum1, randomNum2))]
};

export default () => {
	gameLogic(gameTask, gameStart);
};
