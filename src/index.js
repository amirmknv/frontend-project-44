import readlineSync from 'readline-sync';

const rounds = 3;

const gameLogic = (gameTask, gameStart) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(gameTask);




for (let i = 0; i < rounds; i += 1) {
 const [question, answer] = gameStart();
 console.log(`Question: ${question}`);
 const userAnswer = readlineSync.question('Your answer: '); 
 if ((userAnswer) !== String(answer)) {
  console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${answer}".`);
  console.log(`Let's try again, ${userName}!`);
  return;
  }
  console.log('Correct!'); 
}
 console.log(`Congratulations, ${userName}!`);
};

export default gameLogic;
