// variables for the game
var computerChoice = "";  // var completter
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "z", ""]; // alphabert
var wins = 1;
var losses = 1;
var guessesLeft = 10;
var guessedLetters = [];

computerChoice = letters[Math.floor(Math.random() * letters.lenght)];
console.log(letters);

document.onkeyup = function (event) {
    letterSelected(event.key);

};

function letterSelected(letter1) {

    if (guessedLetters.indexOf(letter1) > -1) {
        alert("Letter already guessed");
        return;
    }
    if (letter1 === computerChoice) {
        console.log("win");
        document.getElementById("wins").innerHTML = wins++;
        resetgame();
    }

    else {
        guessesLeft--;

        document.getElementById("guesses-left").innerHTML = guessesLeft;

    }
        if (guessesLeft === 0) {
            console.log("los");
            document.getElementById("losses").innerHTML = losses++;
            resetgame();
        }
    

    $(document).ready(function () {
            letterSelected(e.target.textContent);
        }
    }