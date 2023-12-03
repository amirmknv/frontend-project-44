import gameLogic from "../index.js";
import getRandomInt from "../getRandomInt.js";

const gameTask = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const gameStart = () => {
  const isPrime = (num) => {
    if (num < 2) {
	  return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
     return false;
     }
    }
    return true;
  };


 const question = getRandomInt(1, 100);
 const answer = isPrime(question) ? "yes" : "no";
 return [question, answer];
 };


export default () => {
	gameLogic(gameTask, gameStart);
};
