
export getName;
 
// Wait for user's response.
const getName = (name) => {
console.log("Welcome to the Brain Games!");
const userName = readlineSync.question('May I have your name? ');
console.log('Hello, ' + name + '!'); 
}
