import readlineSync from 'readline-sync';

const input = require('readline-sync');
let name = input.question("May I have your name?");
console.log("Hello, " + name);

export input;
