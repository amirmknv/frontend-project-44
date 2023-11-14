import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question("May I have your name? ");
console.log("Hello, " + userName + "!");


const getRandomInt = (min, max) => Math.floor(Math.random() * (max + 1 - min) + min);


console.log("What is the result of the expression?"); 



const getRandomOperator = () => {
const randomNum = getRandomInt(0, 2);
const mathSymbols = ['+', '-', '*'];
return mathSymbols[randomNum];
};


const calculate = (symbol, randomNum1, randomNum2) => {
 let result = 0;
	if (symbol === "+") {
	 result = randomNum1 + randomNum2;
	} else if (symbol === "-") {
	 result = randomNum1 - randomNum2;
	} else if (symbol === "*") {
	 result = randomNum1 * randomNum2;
	}
 return result;
};

const getQuestionAnswer = () => {
 const randomNum1 = getRandomInt(10, 20);
 const randomNum2 = getRandomInt(2, 19);
 const symbol = getRandomOperator();
 const question = `Question: ${randomNum1} ${symbol} ${randomNum2}`;
 console.log(question);
 const rightNumber = calculate(symbol, randomNum1, randomNum2);
 const rightAnswer = rightNumber.toString();
 return rightAnswer;
};


export default getQuestionAnswer;
