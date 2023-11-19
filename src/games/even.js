import gameLogic from "../index.js";
import getRandomInt from "../getRandomInt.js";



const gameTask = 'Answer "yes" if the number is even, otherwise answer "no".';

const gameStart = () => {
const number = getRandomInt(100);
const question = "Question: " + number;
const isEven = number % 2 === 0;
const answer = isEven ? "yes" : "no";
 return [question, answer];
};

export default () => {
	gameLogic(gameTask, gameStart); 
};
