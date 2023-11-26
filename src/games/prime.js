import gameLogic from "../index.js";
import getRandomInt from "../getRandomInt.js";

const gameTask = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const gameStart = () => {
 const isPrime = (num) => {
    for(let i = 2, s = Math.sqrt(num); i <= s; i++) {
        if(num % i === 0) return false;
    }
 const question = getRandomInt(number);
 const answer = isPrime ? "yes" : "no";
 return [question, answer];
 };
};

export default () => {
	gameLogic(gameTask, gameStart);
};
