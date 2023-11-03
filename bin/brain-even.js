#!/usr/bin/env node

import {userName} from "../src/cli.js";
import readlineSync from 'readline-sync';

console.log('Answer "yes" if the number is even, otherwise answer "no".');

const randomNumber = Math.floor(Math.random() * 100) + 1;
console.log("Question: " + randomNumber);

const answer = readlineSync.question("Your answer: ");

