import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question("May I have your name? ");
console.log("Hello, " + userName + "!");

const getRandomInt =(max) => {
	return Math.floor(Math.random() * max);
};

const number = getRandomInt(100);

export const expressionResult = () => {
console.log("What is the result of the expression?");

for (let i = 0; i < 3; i += 1) {
 let textNum = number.toString();
 console.log("Question: " + (textNum + ("-" ||" +" ||"*") + textNum);
 const userAnswer = readlineSync.question("Your answer: ");
 const correctAnswer = 

	};
};
