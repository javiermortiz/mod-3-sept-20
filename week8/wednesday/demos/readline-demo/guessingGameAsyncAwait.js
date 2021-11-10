const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let SECRET_NUMBER;

function ask(question) {
    return new Promise(resolve => {
        rl.question(question, answer => {
            resolve(answer);
        });
    });
}

askRange();

async function askRange() {
    const min = await ask("Enter a min number: ");
    const max = await ask("Enter a max number: ");
    console.log(`I'm thinking of number between ${min} and ${max}...`);
    SECRET_NUMBER = randomInRange(Number(min), Number(max));
    askGuess();
}

async function askGuess() {
    const num = await ask("Enter a guess: ");
    const isCorrect = checkGuess(Number(num));
    if (isCorrect) {
        console.log("YOU WON.");
        rl.close();
    } else {
        askGuess();
    }
}

function randomInRange(min, max) {
    let range = max - min;
    return min + Math.floor(Math.random() * (range + 1));
}

function checkGuess(guess) {
    if (guess > SECRET_NUMBER) {
        console.log("Too high.");
        return false;
    } else if (guess < SECRET_NUMBER) {
        console.log("Too low.");
        return false;
    } else {
        console.log("Correct!");
        return true;
    }
}