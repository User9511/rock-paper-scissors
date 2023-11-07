const body = document.body;
const computerChoiceDisplay = document.getElementById("computer-choice");
const playerChoiceDisplay = document.getElementById("player-choice");
const resultDisplay = document.getElementById("result");
const roundDisplay = document.getElementById("round");
const playerScoreDisplay = document.getElementById("player-score");
const computerScoreDisplay = document.getElementById("computer-score");
const finalResultDisplay = document.getElementById("end-game");
let playAgain = document.getElementById("playAgain");
let finalPlayerScoreDisplay = document.getElementById("final-player-score");
let finalComputerScoreDisplay = document.getElementById("final-computer-score");
let finalResultHeader = document.getElementById("final-result-header");

let playerScore = 0;
let computerScore = 0;
let rounds = 0;
let userChoice;
let computerChoice;
let playerOptions = document.querySelectorAll(".playerOption");

// Generate Random Computer Choice
function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  computerChoice = choices[Math.floor(Math.random() * choices.length)];
  if (computerChoice == "rock") {
    computerChoiceDisplay.innerHTML = `<button id="rock" class="playerOption"><img src="./images/rock.png" alt="rock" /></button>`;
  } else if (computerChoice == "paper") {
    computerChoiceDisplay.innerHTML = `<button id="paper" class="playerOption"><img src="./images/paper.png" alt="paper" /></button>`;
  } else if (computerChoice == "scissors") {
    computerChoiceDisplay.innerHTML = `<button id="scissors" class="playerOption"><img src="./images/scissors.png" alt="scissors" /></button>`;
  }
  return computerChoice;
}

// Get User Choice
playerOptions.forEach((option) => {
  option.addEventListener("click", (e) => {
    rounds++;
    getComputerChoice();
    restartGame();
    userChoice = e.target.id;
    playerChoiceDisplay.innerHTML = userChoice;
    if (userChoice == "rock") {
      playerChoiceDisplay.innerHTML = `<button id="rock" class="playerOption"><img src="./images/rock.png" alt="rock" /></button>`;
    } else if (userChoice == "paper") {
      playerChoiceDisplay.innerHTML = `<button id="paper" class="playerOption"><img src="./images/paper.png" alt="paper" /></button>`;
    } else if (userChoice == "scissors") {
      playerChoiceDisplay.innerHTML = `<button id="scissors" class="playerOption"><img src="./images/scissors.png" alt="scissors" /></button>`;
    }
    getResults(userChoice, computerChoice);
    return userChoice;
  });
});

// Update Displays
function getResults(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    roundDisplay.innerHTML = `${rounds}`;
    resultDisplay.innerHTML = `It's a draw!`;
    resultDisplay.style.color = "Blue";
  } else if ((userChoice == "rock" && computerChoice == "scissors") || (userChoice == "paper" && computerChoice == "rock") || (userChoice == "scissors" && computerChoice == "paper")) {
    playerScore++;
    resultDisplay.innerHTML = `Player Wins!`;
    resultDisplay.style.color = "Green";
    playerScoreDisplay.innerHTML = `${playerScore}`;
    roundDisplay.innerHTML = `${rounds}`;
  } else {
    computerScore++;
    resultDisplay.innerHTML = `Computer Wins!`;
    resultDisplay.style.color = "Red";
    computerScoreDisplay.innerHTML = `${computerScore}`;
    roundDisplay.innerHTML = `${rounds}`;
  }
  finalScoreDisplay();
}

// Display who won the  game
function finalScoreDisplay() {
  if (rounds >= 5) {
    body.classList.add("blur");
    if (playerScore > computerScore) {
      finalResultHeader.innerHTML = `YOU WON THE GAME!`;
      finalResultHeader.style.color = "green";
      finalPlayerScoreDisplay.innerHTML = `Your Score: ${playerScore}`;
      finalComputerScoreDisplay.innerHTML = `Computer Score: ${computerScore}`;
    } else if (playerScore < computerScore) {
      finalResultHeader.innerHTML = `COMPUTER WON THE GAME!`;
      finalResultHeader.style.color = "red";
      finalPlayerScoreDisplay.innerHTML = `Your Score: ${playerScore}`;
      finalComputerScoreDisplay.innerHTML = `Computer Score: ${computerScore}`;
    } else if (playerScore === computerScore) {
      finalResultHeader.innerHTML = `IT'S A DRAW!`;
      finalResultHeader.style.color = "blue";
      finalPlayerScoreDisplay.innerHTML = `Your Score: ${playerScore}`;
      finalComputerScoreDisplay.innerHTML = `Computer Score: ${computerScore}`;
    }
  }
}

// Restart new game
function restartGame() {
  if (rounds >= 5) {
    finalResultDisplay.classList.remove("hide");
    playAgain.addEventListener("click", () => {
      playerScore = 0;
      computerScore = 0;
      rounds = 0;
      playerScoreDisplay.innerHTML = `${playerScore}`;
      computerScoreDisplay.innerHTML = `${computerScore}`;
      roundDisplay.innerHTML = `${rounds}`;
      resultDisplay.innerHTML = "";
      finalResultDisplay.classList.add("hide");
    });
  }
}
