
export const readlineSync = require('readline-sync');
 
// Wait for user's response.
export const userName = readlineSync.question('May I have your name? ');
console.log('Hi, ' + userName + '!');
