'use strict';

// Global variables
const checkButton = document.querySelector('.check');
const againButton = document.querySelector('.again');
let highscore = Number(document.querySelector('.highscore').textContent);
let myNumber = randNum();
let score = 20;

// Display box
let displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// Win visual effects
let winMode = function (guessed) {
  displayMessage('✅ You win...!');
  document.querySelector('.number').textContent = guessed;
  document.body.style.backgroundColor = '#60b347';
  if (score > highscore) {
    document.querySelector('.highscore').textContent = score;
  }
};

// fail visual effects
let failTryMode = function (guessed) {
  displayMessage(guessed > myNumber ? '📈 Too high ...' : '📉 Too low ...');
  score--;
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').style.backgroundColor = 'red';
  document.querySelector('.number').textContent = guessed;
  sleep(1000).then(() => {
    document.querySelector('.number').style.backgroundColor = 'white';
    document.querySelector('.number').textContent = '?';
  });
};

let gameOverMode = function () {};

// checkButton Event Listener
checkButton.addEventListener('click', () => {
  var guessed = Number(document.querySelector('.guess').value);
  console.log(myNumber);
  if (!guessed) {
    displayMessage('😢  No Number...');
  } else if (guessed < 0 || guessed > 20) {
    displayMessage('🧨  Out of Scope...');
    againButton.onClick();
  } else if (score <= 0) {
    displayMessage('💥  You lost...');
  } else {
    if (Number(guessed) === Number(myNumber)) {
      winMode(guessed);
    } else {
      failTryMode(guessed);
    }
  }
});

// againButton Event Listener
againButton.addEventListener('click', () => {
  myNumber = randNum();
  document.body.style.backgroundColor = '#222';
  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
});

// Random number generator
function randNum() {
  return Math.round(Math.random() * 20);
}

// Delay function
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
