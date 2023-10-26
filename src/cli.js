import readlineSync from 'readline-sync';

export const userName = (name) => {
	const question = readlineSync.question( "May I have your name?");
	return console.log("Hello, " + name);
};

