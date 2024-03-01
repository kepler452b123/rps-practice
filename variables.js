// rock = 1, scissors = 2, paper = 3

function getComputerChoice() {
  return Math.random() * (3 - 1) + 1;
}

function playerChoiceParsing() {
  const choice = prompt("Enter Rock, Paper, or Scissors");
  if (choice.charAt(0).toLowerCase() === "r") {
    return 1;
  } else if (choice.charAt(0).toLowerCase() === "s") {
    return 2;
  } else {
    return 3;
  }
}

function playRound(computerChoice, playerChoice) {
  if (computerChoice === playerChoice) {
    return "Tie!";
  }
  if (computerChoice === 1) {
    if (playerChoice === 2) {
      return "You lost!";
    } else {
      return "You won!";
    }
  } else if (computerChoice === 2) {
    if (playerChoice === 1) {
      return "You won!";
    } else {
      return "You lost!";
    }
  } else {
    if (playerChoice === 1) {
      return "You lost!";
    } else {
      return "You won!";
    }
  }
}

function playGame() {
  let playerScore = 0;
  let computerScore = 0;

  for (i = 0; i < 5; i++) {
    let playerChoice = playerChoiceParsing();
    let computerChoice = getComputerChoice();
    let winner = playRound(computerChoice, playerChoice);
    if (winner === "You won!") {
      playerScore++;
    } else if (winner === "You lost!") {
      computerScore++;
    }
    console.log(winner);
  }
  if (playerScore > computerScore) {
    console.log("You won the game!");
  } else if (playerScore < computerScore) {
    console.log("You lost the game!");
  } else {
    console.log("The game was a draw!");
  }
}

playGame();
