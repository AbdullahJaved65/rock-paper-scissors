function getComputerChoice() {
  const randomElement = Math.floor(Math.random() * computerChoices.length);
  return computerChoices[randomElement];
}

function playRound(playerSelection, computerSelection) {
  if (
    playerSelection === "rock" ||
    playerSelection === "scissor" ||
    (playerSelection === "paper" && playerSelection != null)
  ) {
    if (
      (playerSelection === "rock" && computerSelection === "rock") ||
      (playerSelection === "paper" && computerSelection === "paper") ||
      (playerSelection === "scissor" && computerSelection === "scissor")
    ) {
      console.log("It is a draw!");
    } else if (playerSelection === "rock" && computerSelection === "scissor") {
      console.log("You've won!");
      playerScore++;
    } else if (playerSelection === "rock" && computerSelection === "paper") {
      console.log("Looks like you've lost this one pal!");
      computerScore++;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
      console.log("You've won!");
      playerScore++;
    } else if (playerSelection === "paper" && computerSelection === "scissor") {
      console.log("Looks like you've lost this one pal!");
      computerScore++;
    } else if (playerSelection === "scissor" && computerSelection === "rock") {
      console.log("Looks like you've lost this one pal!");
      computerScore++;
    } else if (playerSelection === "scissor" && computerSelection === "paper") {
      console.log("You've won!");
      playerScore++;
    }
  } else {
    console.log("Please make a correct selection.");
  }
}

function game() {
  for (let gameCount = 1; gameCount <= 5; gameCount++) {
    playRound(playerSelection, computerSelection);
    if (playerScore === computerScore) {
      console.log("You're both tied up!");
    } else if (playerScore > computerScore) {
      console.log("You won!");
    } else if (playerScore < computerScore) {
      console.log("Looks like you've lost this one pal!");
    }
  }
}

const computerChoices = ["rock", "paper", "scissor"];
const computerSelection = getComputerChoice();
let playerSelection = prompt("Which one will it be? ").toLowerCase();
let playerScore,
  computerScore = 0;

game();
