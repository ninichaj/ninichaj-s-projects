let SecretNumber = Math.floor(Math.random()*100)+1;
let Guess = Number(prompt("Enter your guess: "))
for (let Attempts = 0 ; Attempts < 10; Attempts ++) {
    if (Guess === SecretNumber) {
        alert("You guessed the secret number! Well done!");
        break
    }
    else if (Guess < SecretNumber) {
        alert("To low! Try again.")
    }
    else {
        alert("To high! Try again.")
    }
    Guess = Number(prompt("Enter your guess: "))
}
