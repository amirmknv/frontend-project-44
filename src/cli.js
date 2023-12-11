import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name?');

// eslint-disable-next-line no-unused-vars
console.log(`Hello, ${userName}!`);

export default userName;
