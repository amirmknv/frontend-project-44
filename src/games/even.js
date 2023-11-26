import gameLogic from "../index.js";
import getRandomInt from "../getRandomInt.js";



const gameTask = 'Answer "yes" if the number is even, otherwise answer "no".';

const gameStart = () => {
const number = getRandomInt(0, 100);
const question = number;
const isEven = number % 2 === 0;
const answer = isEven ? "yes" : "no";
 return [question, answer];
};

export default () => {
	gameLogic(gameTask, gameStart); 
};
