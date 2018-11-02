"strict mode"

const button = document.getElementById("startButton");
const reward = "2 additional hours of armpit plays";
let userTry = 6;
let RNDnumber = Math.floor(Math.random() * 6) +1;


window.onload = function buttonClick() {
    button.addEventListener("click", StartGame, false);
}

const StartGame = function() {
    let StartGuess = prompt("Guess a number between 1 and 6!");
    if (parseInt(StartGuess) === RNDnumber) {
        alert("Your guess was right! Your reward is " + reward + ". Enjoy it!");
    } else {
        userTry -= 1;
        let nextTry = prompt("Your guess was not right! You have " + userTry + " tries left!");
    }
    do {
        userTry -= 1;
        let nextTry = prompt("Your guess was not right! You have " + userTry + " tries left!");
    } while (userTry > 1);
    if (userTry < 1) {
        button.addEventListener("click", function() {
            alert("You have no more tries left!");
        })
    }
}

if (nextTry !== RNDnumber) {
    alert("I'm sorry, you didn't win! You'll still receive your prize, what is " + reward + ".");
};

