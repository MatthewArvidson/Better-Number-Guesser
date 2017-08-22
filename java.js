//Global Variables
var alertDisplay =  document.querySelector(".alert-display")
var guess;
var guessButton = document.querySelector(".guess-button");
var lastGuess = document.querySelector(".last-guess");
var randomNum = randomNum(0, 100);
var resetButton = document.querySelector(".reset-button");
var userInput = document.querySelector(".user-input");
var clearButton = document.querySelector(".clear-button");
var allButtons = document.querySelectorAll("button");
console.log(allButtons);

//Functions
//Generate a Random Number
function randomNum(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

console.log(randomNum)

allButtons.addEventListener('keyup', activateButtons);
guessButton.addEventListener('click', storeGuess);
clearButton.addEventListener('click', clearInput);
console.log(activateButtons);


//Take User Input and Compare it to the Random Number

function activateButtons() {
  if (userInput.value !== " ") {
    allButtons.attr("disabled", true);
  } else {
    allButtons.attr("disabled", false)
  }
};

function storeGuess() {
  guess = parseInt(userInput.value);
  lastGuess.innerHTML = guess;
  checkGuess();
}

function checkGuess () {
  if (userInput.value < randomNum) {
    alert("You Guessed Too Low Asshole!!")
  }
  else if (userInput.value > randomNum) {
    alert("You Guessed Too High You Fucker!!")
  }
  else {
    alert("You Win You Loser!!")
  }
}

function clearInput() {
  userInput.value = " ";
}
















// function userGuess() {
//   var guessButton = document.querySelector('.user-input');
// }
//
// //Event Listeners
// button.addEventListener('click', function(event) {
//   event.preventDefault();
//
// })
//
// resetButton.addEventListener('click', function(event) {
//   event.preventDefault();
//   var userInput =
//
// })
