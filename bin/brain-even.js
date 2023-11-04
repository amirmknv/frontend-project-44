#!/usr/bin/env node

import {userName} from "../src/cli.js";
import readlineSync from 'readline-sync';

console.log('Answer "yes" if the number is even, otherwise answer "no".');

const randomNumber = Math.floor(Math.random() * 100) + 1;
console.log("Question: " + randomNumber);

const answer = readlineSync.question("Your answer: ");

const evenNum = (randomNumber % 2 === 0);
const oddNum = (randomNumber % 2 !== 0);

const findNumber = (randomNumber) => {

	while (randomNumber = evenNum) {
		if (answer === "yes") {
		return "Correct!"
		};
		else {
		return "Let's try again, " + userName;
		};
	};

	while (randomNumber = oddNum) {
		if (answer === "yes") {
                return "Correct!"
                };
                else {
                return "Let's try again, " + userName;
	};
};

console.log(findNumber);
