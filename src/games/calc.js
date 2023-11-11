import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question("May I have your name? ");
console.log("Hello, " + userName + "!");

const getRandomNum = (min, max) => Math.floor(Math.random() * (max + 1 - min) + min);


export const expressionResult = () => {
 console.log("What is the result of the expression?");
 const mathSymbols = ['+', '-', '*']; 
};


const getRandomSymbol = () => {
 const randomNum = getRandomNum[0, 2];
 return mathSymbols[randomNum];
};


const calculate = (symbol, randomNum1, randomNum2) => {
 let result;
	if (symbol === "+") {
	 result = randomNum1 + randomNum2
	} else if (symbol === "-") {
	 result = randomNum1 - randomNum2
	} else if (symbol === "*") {
	 result = randomNum1 * randomNum2
	}
 return result;
};




};
