import gameLogic from "../index.js";
import getRandomInt from "../getRandomInt.js";

const gameTask = "Find the greatest common divisor of given numbers.";

const randomNum1 = getRandomInt(1, 50);
const randomNum2 = getRandomInt(1, 50);
const question = `Question: ${randomNum1} ${randomNum2}`;

const gameStart = (x, y) => {
 while (y) {
	 let t = y;
	 y = x % y;
	 x = t;
 }

 let answer = x;
 return [question, answer];
};


export default () => {
	gameLogic(gameTask, gameStart);
};
