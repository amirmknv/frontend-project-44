import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question("May I have your name? ");
console.log("Hello, " + userName + "!");

const getRandomInt =(max) => {
	return Math.floor(Math.random() * max);
};


export const gameResult = () => {
	console.log('Answer "yes" if the number is even, otherwise answer "no".');
	for (let i = 0; i < 3; i += 1) {
	const number = getRandomInt(100);
	console.log("Question: " + number);
	const userAnswer = readlineSync.question("Your answer: ");
	
	if (number % 2 === 0 && userAnswer === "yes") {
		console.log("Correct!")
	};
		else if  (number % 2 === 0 && userAnswer === "no") {
		console.log(`${userAnswer} is wrong answer ;\(. Correct answer was ${opposite}.\n Let's try again, ${userName}!`);
		return;
	};
		else if (number % 2 !== 0 && userAnswer === "no") {
		console.log("Correct!")
	};
		else if (number % 2 !== 0 && userAnswer === "yes") {
		console.log(`${userAnswer} is wrong answer ;\(. Correct answer was ${opposite}.\n Let's try again, ${userName}!`); 
		return;
	};
	console.log(`Congratulations, ${userName}!`);
	};
};
