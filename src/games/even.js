import readlineSync from 'readline-sync';

const gameResult = (number) => {
	console.log('Answer "yes" if the number is even, otherwise answer "no".');
const randomNumber = Math.floor(Math.random() * 100) + 1;
console.log("Question: " + randomNumber);
const answer = readlineSync.question("Your answer: ");

const evenNum = (randomNumber % 2 === 0);
const oddNum = (randomNumber % 2 !== 0);
	if (number = evenNum) && (answer === "yes") {
	console.log("Correct")
	};
	else if (number = oddNum) && (answer === "no") {
	console.log("Correct")
	};
	else if (number = evenNum) && (answer === "no" {
	console.log("'yes' is wrong answer ;(. Correct answer was 'no'. n/ Let's try again, " + userName) 
	};
	else if (number = oddNum) && (answer === "yes") {
	console.log("'yes' is wrong answer ;(. Correct answer was 'no'. n/ Let's try again, " + userName)
	};
	
};

export default gameResult;
