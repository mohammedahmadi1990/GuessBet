// 'use strict';

const checkButton = document.querySelector('.check');
const againButton = document.querySelector('.again');
let highscore = Number(document.querySelector('.highscore').textContent);

let myNumber = randNum();
let score = 20;

// Event Listeners
checkButton.addEventListener('click', () => {
  var guessed = Number(document.querySelector('.guess').value);
  console.log(myNumber);
  if (!guessed) {
    document.querySelector('.message').textContent = 'Empty guess';
  }

  if (Number(guessed) === Number(myNumber)) {
    document.querySelector('.message').textContent = 'You ROCK...!';
    document.querySelector('.number').textContent = guessed;
    document.querySelector('.number').style.backgroundColor = 'green';
    if (score > highscore) {
      document.querySelector('.highscore').textContent = score;
    }
  } else {
    document.querySelector('.message').textContent = 'Guess again...';
    score--;
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').style.backgroundColor = 'red';
    document.querySelector('.number').textContent = guessed;
    sleep(1000).then(() => {
      document.querySelector('.number').style.backgroundColor = 'white';
      document.querySelector('.number').textContent = '?';
    });
  }
});

againButton.addEventListener('click', () => {
  myNumber = randNum();
  document.querySelector('.number').style.backgroundColor = 'white';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
});

// Random number generator
function randNum() {
  return Math.round(Math.random() * 20);
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
