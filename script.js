let userScore = 0;
let computerScore = 0;
let flag = true;

const userScore_span = document.querySelector('.user-score');
const computerScore_span = document.querySelector('.comp-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_div = document.querySelector('.result');
const paper_div = document.getElementById('p');
const rock_div = document.getElementById('r');
const scissors_div = document.getElementById('s');
const fuckAll_div = document.getElementById('f');
const footerChange_p = document.querySelector('footer p')
const cheat_div = document.querySelector('.button')

const wordsDict = {
  "p": "Paper",
  "r": "Rock",
  "s": "Scissors",
  "f": "Fuck all"
};

function getComputerChoice() {
  const choices = ['p', 'r', 's'];
  const randomNumber = Math.floor(Math.random() * choices.length);
  return choices[randomNumber];
}

function convertToWord(letter) {
  if (letter === 'p') return "Paper";
  if (letter === 'r') return "Rock";
  if (letter === 'f') return "Fuck all"
  return "Scissors";
}

function win(userChoice, computerChoice) {
  const userChoice_div = document.getElementById(userChoice);
  userScore++;
  userScore_span.textContent = userScore;
  computerScore_span.textContent = computerScore;
  result_div.textContent = `${wordsDict[userChoice]} beats ${wordsDict [computerChoice]}. You win!`;
  userChoice_div.classList.add('win-border');
  setTimeout(() => userChoice_div.classList.remove('win-border'), 400);
}

function lose(userChoice, computerChoice) {
  const userChoice_div = document.getElementById(userChoice);
  computerScore++;
  userScore_span.textContent = userScore;
  computerScore_span.textContent = computerScore;
  result_div.textContent = `${wordsDict[userChoice]} loses to ${wordsDict[computerChoice]}. You lost...`;
  userChoice_div.classList.add('lose-border');
  setTimeout(() => userChoice_div.classList.remove('lose-border'), 400);
}

function draw(userChoice, computerChoice) {
  const userChoice_div = document.getElementById(userChoice);
  result_div.textContent = `${wordsDict[userChoice]} equals ${wordsDict[computerChoice]}. No point`;
  userChoice_div.classList.add('draw-border');
  setTimeout(() => userChoice_div.classList.remove('draw-border'), 400);
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case 'rs':
    case 'pr':
    case 'sp':
    case 'fp':
    case 'fr':
    case 'fs':
      win(userChoice, computerChoice);
      break;
    case 'sr':
    case 'rp':
    case 'ps':
      lose(userChoice, computerChoice);
      break;
    case 'rr':
    case 'pp':
    case 'ss':
      draw(userChoice, computerChoice);
      break;
  }
}

function main() {

  paper_div.addEventListener('click', () => game('p'));
  rock_div.addEventListener('click', () => game('r'))
  scissors_div.addEventListener('click', () => game('s'))
  fuckAll_div.addEventListener('click', () => game('f'))
}

main();

cheat_div.addEventListener('click', () => {
  if (flag) {
    cheat_div.textContent = 'on';
    footerChange_p.textContent = 'Cheat mode now is';
  } else {
    cheat_div.textContent = 'off';
  }
  fuckAll_div.classList.toggle('cheat');
  cheat_div.classList.toggle('active');
  document.body.classList.toggle('hide');
  flag = !flag;
})