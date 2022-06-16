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
    document.querySelector('.message').textContent = 'Guess again';
    score--;
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').style.backgroundColor = 'red';
  }
});

againButton.addEventListener('click', () => {
  myNumber = randNum();
  console.log(myNumber);
});

// Random number generator
function randNum() {
  return Math.round(Math.random() * 20);
}
