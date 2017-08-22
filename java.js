//****Global Variables****


var alertDisplay =  document.querySelector(".alert-display")
var guess;
var guessButton = document.querySelector(".guess-button");
var lastGuess = document.querySelector(".last-guess");
var randomNum = randomNum(0, 100);
var resetButton = document.querySelector(".reset-button");
var userInput = document.querySelector(".user-input");
var clearButton = document.querySelector(".clear-button");
var allButtons = document.querySelectorAll("button");
var alertDisplay = document.querySelector(".alert-display")
var verifyIsInteger = document.querySelector(".user-input")


//****Event Listeners****


userInput.addEventListener('keyup', activateButtons);
guessButton.addEventListener('click', storeGuess);
clearButton.addEventListener('click', clearInput);
resetButton.addEventListener('click', function(){
  window.location.reload(true);
});

//****Functions****


//Verify The User Input Is An Integer
function verifyIsInteger() {
  Number.isInteger(userInput);
}
console.log(verifyIsInteger)

//Generate A Random Number
function randomNum(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
console.log(randomNum)

//Activate Buttons
function activateButtons() {
  if (!userInput.value) {
    guessButton.disabled = true;
    clearButton.disabled = true;
    resetButton.disabled = true;
  }
  else {
    guessButton.disabled = false;
    clearButton.disabled = false;
    resetButton.disabled = false;
  }
};

//Store Guess
function storeGuess() {
  guess = parseInt(userInput.value);
  lastGuess.innerHTML = guess;
  checkGuess();
}

//Check Guess Against Random Number
function checkGuess () {
  if (userInput.value < randomNum) {
    alertDisplay.innerText = "You Guessed Too Low Asshole!!";
  }
  else if (userInput.value > randomNum) {
    alertDisplay.innerText = "You Guessed Too High You Fucker!!";
  }
  else {
    alertDisplay.innerText = "You Win You Loser!!";
  }
}

//Clear Button The Input Field
function clearInput() {
  userInput.value = " ";
}
