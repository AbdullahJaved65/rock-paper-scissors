function getComputerChoice() {
  const randomElement = Math.floor(Math.random() * computerChoices.length);
  return computerChoices[randomElement];
}

// function playRound(playerSelection, computerSelection) {}

function game() {
  for (let gameCount = 1; gameCount <= 5; gameCount++) {
    let playerSelection = prompt("Which one will it be? ").toLowerCase();
    const computerSelection = getComputerChoice();

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
      } else if (
        playerSelection === "rock" &&
        computerSelection === "scissor"
      ) {
        console.log("You've won!");
        playerScore++;
      } else if (playerSelection === "rock" && computerSelection === "paper") {
        console.log("Looks like you've lost this one pal!");
        computerScore++;
      } else if (playerSelection === "paper" && computerSelection === "rock") {
        console.log("You've won!");
        playerScore++;
      } else if (
        playerSelection === "paper" &&
        computerSelection === "scissor"
      ) {
        console.log("Looks like you've lost this one pal!");
        computerScore++;
      } else if (
        playerSelection === "scissor" &&
        computerSelection === "rock"
      ) {
        console.log("Looks like you've lost this one pal!");
        computerScore++;
      } else if (
        playerSelection === "scissor" &&
        computerSelection === "paper"
      ) {
        console.log("You've won!");
        playerScore++;
      }
      console.log(playerScore);
      console.log(computerScore);
    } else {
      console.log("Please make a correct selection.");
    }
  }
  if (playerScore === computerScore) {
    console.log("You're both tied up!");
  } else if (playerScore > computerScore) {
    console.log("You won!");
  } else if (playerScore < computerScore) {
    console.log("Looks like you've lost this one pal!");
  }
}

const computerChoices = ["rock", "paper", "scissor"];

// let playerSelection = "rock";
let playerScore = 0;
let computerScore = 0;

game();
