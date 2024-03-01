// rock = 1, scissors = 2, paper = 3

const body = document.querySelector("body");
const pscore = document.querySelector("#pscore");
const cscore = document.querySelector("#cscore");
const winner = document.querySelector("#winner");
pscore.textContent = "0";
cscore.textContent = "0";


function getComputerChoice() {
  return Math.floor(Math.random() * 3) + 1;
}

const playRound = (playerChoice) => {
  computerChoice = getComputerChoice();
  let outcome = "";
  if (computerChoice === playerChoice) {
    outcome = "Tie!";
  }
  if (computerChoice === 1) {
    if (playerChoice === 2) {
      outcome = "You lost!";
      cscore.textContent = parseInt(cscore.textContent) + 1;
    } else {
      outcome = "You won!";
      pscore.textContent = parseInt(pscore.textContent) + 1;
    }
  } else if (computerChoice === 2) {
    if (playerChoice === 1) {
      outcome = "You won!";
      pscore.textContent = parseInt(pscore.textContent) + 1;
    } else {
      outcome = "You lost!";
      cscore.textContent = parseInt(cscore.textContent) + 1;
    }
  } else {
    if (playerChoice === 1) {
      outcome = "You lost!";
      cscore.textContent = parseInt(cscore.textContent) + 1;
    } else {
      outcome = "You won!";
      pscore.textContent = parseInt(pscore.textContent) + 1;
    }
  }
  if (parseInt(cscore.textContent) == 5){
    winner.textContent = "Computer Won!";
  }
  if (parseInt(pscore.textContent) == 5){
    winner.textContent = "Player Won!";
  }
}

const rbtn = document.querySelector("#rock");
const sbtn = document.querySelector("#scissors");
const pbtn = document.querySelector("#paper");

rbtn.textContent = "Rock";
sbtn.textContent = "Scissors";
pbtn.textContent = "Paper";


rbtn.addEventListener('click', () => {playRound(1)} );
sbtn.addEventListener('click', () => {playRound(2)} );
pbtn.addEventListener('click', () => {playRound(3)} );

/*
rbtn.addEventListener('click', playRound);
sbtn.addEventListener('click', playRound);
pbtn.addEventListener('click', playRound);
*/
