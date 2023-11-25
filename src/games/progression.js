import gameLogic from "../index.js";
import getRandomInt from "../getRandomInt.js";

const gameTask = "What number is missing in the progression?";


const minIndexNumber = 1;
const maxIndexNumber = 9;
const minCounter = 2;
const maxCounter = 4;
const maxLength = 19;


const gameStart = () => {
 const number1 = getRandomInt(1, 100);
 const number2 = (number1 + maxLength);
 const randomIndex = getRandomInt(minIndexNumber, maxIndexNumber);
 const counter = getRandomInt(minCounter, maxCounter);
 const missingElement = ".."; 


const arithmeticProgression = () => {
 let result = "";
 let i = number1;
 while (i <= number2) {
  result = `${result} ${i}`;
  i += counter;
  }

  return result;
};

const progression = arithmeticProgression(number1, number2);
const splitResult = progression.split(" ");

const answer = splitResult.at(randomIndex);
splitResult[randomIndex] = missingElement;
const question = splitResult.join(" ").trim();
return [question, answer];


};

export default () => {
	gameLogic(gameTask, gameStart);
};
