const computerChoiceDisplay = document.getElementById("computer-choice");
const playerChoiceDisplay = document.getElementById("player-choice");
const resultDisplay = document.getElementById("result");
const roundDisplay = document.getElementById("round");
const possibleChoices = document.querySelectorAll("button");
const userScoreDisplay = document.getElementById("player-score");
const computerScoreDisplay = document.getElementById("computer-score");
const playAgain = document.getElementById("end-game");
let userChoice;
let computerChoice;
let playerScore = 0;
let computerScore = 0;
let rounds = 1;

// Get User Choice
possibleChoices.forEach((choice) => {
  choice.addEventListener("click", (e) => {
    userChoice = e.target.id;
    getComputerChoice();
    getResults(userChoice, computerChoice);
    rounds++;
    endGame();

    if (userChoice === "rock") {
      playerChoiceDisplay.innerHTML = `<button id="rock"><img src="./images/rock.png" alt="rock" /></button>`;
    } else if (userChoice === "paper") {
      playerChoiceDisplay.innerHTML = ` <button id="paper"><img src="./images/paper.png" alt="paper" /></button>`;
    } else if (userChoice === "scissors") {
      playerChoiceDisplay.innerHTML = `  <button id="scissors"><img src="./images/scissors.png" alt="scissors" /></button>`;
    }
  });
});

// Get Computer Choice
function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  computerChoice = choices[Math.floor(Math.random() * choices.length)];

  if (computerChoice === "rock") {
    computerChoiceDisplay.innerHTML = `  <button id="rock"><img src="./images/rock.png" alt="rock" /></button>`;
  } else if (computerChoice === "paper") {
    computerChoiceDisplay.innerHTML = `  <button id="paper"><img src="./images/paper.png" alt="paper" /></button>`;
  } else if (computerChoice === "scissors") {
    computerChoiceDisplay.innerHTML = `    <button id="scissors"><img src="./images/scissors.png" alt="scissors" /></button>`;
  }

  playerChoiceDisplay.innerHTML = userChoice;
}

function getResults(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    resultDisplay.innerHTML = "It's a draw!";
    resultDisplay.style.color = "#1857ed";
    roundDisplay.innerHTML = `${rounds}`;
  } else if ((userChoice === "rock" && computerChoice === "scissors") || (userChoice === "paper" && computerChoice === "rock") || (userChoice === "scissors" && computerChoice === "paper")) {
    playerScore++;
    resultDisplay.innerHTML = "Player Wins!";
    resultDisplay.style.color = "#059925";
    roundDisplay.innerHTML = `${rounds}`;
    userScoreDisplay.innerHTML = `${playerScore}`;
  } else {
    computerScore++;
    resultDisplay.innerHTML = "Computer wins!";
    resultDisplay.style.color = "#d11336";
    roundDisplay.innerHTML = `${rounds}`;
    computerScoreDisplay.innerHTML = `${computerScore}`;
  }
}

playAgain.addEventListener("click", () => {
  rounds = 1;
  roundDisplay.innerHTML = `${rounds}`;
  userScoreDisplay.innerHTML = `${playerScore}`;
  computerScoreDisplay.innerHTML = `${computerScore}`;
  resultDisplay.innerHTML = "";
  playAgain.classList.toggle("hide");
});

function endGame() {
  if (rounds > 5) {
    playerScore = 0;
    computerScore = 0;
    rounds = 1;
    playAgain.classList.toggle("hide");
  }
}
