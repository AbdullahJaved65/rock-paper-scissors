function getComputerChoice() {
  const randomElement = Math.floor(Math.random() * computerChoices.length);
  return computerChoices[randomElement];
}

// function playRound(playerSelection, com)

function game() {
  for (let gameCount = 1; gameCount <= 5; gameCount++) {}
}

const computerChoices = ["rock", "paper", "scissor"];
const computerSelection = getComputerChoice();
let playerSelection = prompt("Which one will it be? ").toLowerCase();
let playerScore,
  computerScore = 0;
