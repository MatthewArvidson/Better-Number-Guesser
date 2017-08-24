//****Global Variables****


var alertDisplay = document.querySelector(".alert-display");
var allButtons = document.querySelectorAll("button");
var guessButton = document.querySelector(".guess-button");
var userSetRandomNumButton = document.querySelector(".user-set-random-number");
var lastGuess = document.querySelector(".last-guess");
var resetButton = document.querySelector(".reset-button");
var userInput = document.querySelector(".user-input");
var clearButton = document.querySelector(".clear-button");
var verifyIsInteger = document.querySelector(".user-input");
var minInputField = document.querySelector(".user-min");
var maxInputField = document.querySelector(".user-max");
var userMin;
var guess;
var userMax;
var randomNum;
// var setRandomNum = document.querySelector(".set-random-number");


//****Event Listeners****


userInput.addEventListener("keydown", checkKeyPressed)
minInputField.addEventListener('input', activateUserSetRandomNumberButton);
maxInputField.addEventListener('input', activateUserSetRandomNumberButton);
userInput.addEventListener('input', activateButtons);
guessButton.addEventListener('click', storeGuess);
clearButton.addEventListener('click', clearInput);
resetButton.addEventListener('click', function(){
  window.location.reload(true);
});
userSetRandomNumButton.addEventListener('click', function(){
  if (userMin < userMax) {
  userMin = parseInt(minInputField.value);
  userMax = parseInt(maxInputField.value);
  }
  else {
    userMin = parseInt(maxInputField.value);
    userMax = parseInt(minInputField.value);
  }
  randomNum = makeRandomNum(userMin, userMax);
  console.log(randomNum);
})


//****Functions****


function checkKeyPressed(event) {
  var keyNum = window.event.keyCode;
  if (keyNum === 13) {
    storeGuess();
  }
  console.log("keyNum", keyNum);
}

//Generate A Random Number
function makeRandomNum(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};


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

//Activate User Set Random Number Buttons

function activateUserSetRandomNumberButton() {
  if (!minInputField.value || !maxInputField.value) {
  // if (!minInputField.value) {
    userSetRandomNumButton.disabled = true;
  }
  else {
    userSetRandomNumButton.disabled = false;
  }
}

//Store Guess + Verify The User Input Is An Integer
function storeGuess() {
  console.log(randomNum);
  guess = parseInt(userInput.value);
  lastGuess.innerHTML = guess;
  if (isNaN(guess)) {
    alertDisplay.innerText = "Only Numbers Mother Fucker!";
  }
  else {
    checkGuess()
  };
  clearInput()
  userInput.focus();
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
