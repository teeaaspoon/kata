var prompt = require("prompt-sync")();

// code below (replace this example)

//generates a random number between 1 and 100
var answer = Math.floor(Math.random() * 100);
var attempts = 0;
var alreadyGuessed = [];
while (true) {
    var guess = prompt("Guess a number:");

    if (isNaN(guess)) {
        console.log("Not a number! Try again!");
    } else if (alreadyGuessed.includes(guess)) {
        console.log("Already Guessed!");
    } else if (guess > answer) {
        attempts += 1;
        alreadyGuessed.push(guess);
        console.log("Too High!");
    } else if (guess < answer) {
        attempts += 1;
        alreadyGuessed.push(guess);
        console.log("Too Low!");
    } else if (guess == answer) {
        attempts += 1;
        alreadyGuessed.push(guess);
        console.log("You got it! You took " + attempts + " attempts!");
        break;
    }
}
