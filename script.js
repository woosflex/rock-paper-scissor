// Initialized numerals
let roundNumber = 1;
let playerScore = 0;
let compScore = 0;

const gameScreen = document.getElementById("gameScreen");

// Function to create images
function createImage(src, id, alt) {
  const img = document.createElement("img");
  img.src = `./img/${src}.png`;
  img.id = id;
  img.alt = alt;
  return img;
}

function startMenu() {
  let start = document.createElement("div");
  start.id = "startButton";
  start.className = "btns";
  start.textContent = "Play";
  start.addEventListener("click", () => {
    playGame();
  });
  gameScreen.appendChild(start);
}

// Render computer's side
function computerSide() {
  let computer = document.createElement("div");
  computer.id = "computerPanel";

  let compText = document.createElement("div");
  compText.textContent = "Computer";
  compText.className = "playerInfo";

  let compChoice = document.createElement("div");
  compChoice.id = "compChoice";
  compChoice.className = "btns";
  compChoice.textContent = "Waiting";

  computer.append(compText, compChoice);
  gameScreen.appendChild(computer);
}

function gameInfo() {
  let infoPanel = document.createElement("div");
  infoPanel.id = "gameInfo";
  let humanScore = document.createElement("div");
  let roundInfo = document.createElement("div");
  let computerScore = document.createElement("div");
  humanScore.textContent = `Human: ${playerScore}`;
  roundInfo.textContent = `Round ${roundNumber}`;
  computerScore.textContent = `Computer: ${compScore}`;
  infoPanel.append(humanScore, roundInfo, computerScore);
  gameScreen.appendChild(infoPanel);
}

function humanSide() {
  const humanPanel = document.createElement("div");
  humanPanel.id = "humanPanel";
  humanPanel.textContent = "Player";

  let choices = document.createElement("div");
  choices.id = "humanChoice";

  // Create rock button
  let rockBtn = document.createElement("div");
  rockBtn.className = "btns";
  rockBtn.textContent = "Rock";
  rockBtn.addEventListener("click", () => {
    handleHumanChoice("rock");
  });
  rockBtn.appendChild(createImage("rock", "rock", "Rock"));

  // Create paper button
  let paperBtn = document.createElement("div");
  paperBtn.className = "btns";
  paperBtn.textContent = "Paper";
  paperBtn.addEventListener("click", () => {
    handleHumanChoice("paper");
  });
  paperBtn.appendChild(createImage("paper", "paper", "Paper"));

  let scissorsBtn = document.createElement("div");
  scissorsBtn.className = "btns";
  scissorsBtn.textContent = "Scissors";
  scissorsBtn.addEventListener("click", () => {
    handleHumanChoice("scissors");
  });
  scissorsBtn.appendChild(createImage("scissor", "scissor", "Scissors"));
  choices.append(rockBtn, paperBtn, scissorsBtn);
  humanPanel.appendChild(choices);
  gameScreen.appendChild(humanPanel);
}

function getComputerChoice() {
  const compChoice = document.getElementById("compChoice");
  const computerChoice = Math.floor(Math.random() * 3);
  compChoice.innerHTML = ""; // Clear previous choice

  const choices = ["rock", "paper", "scissor"];
  compChoice.appendChild(createImage(`${choices[computerChoice]}`, choices[computerChoice], choices[computerChoice]));
  return computerChoice;
}


function handleHumanChoice(choice) {
  const playerChoice = choice === "rock" ? 0 : choice === "paper" ? 1 : 2;
  const computerChoice = getComputerChoice();

  // Determine winner
  let result;
  if (playerChoice === computerChoice) {
    result = "It's a draw!";
  } else if (
    (playerChoice === 0 && computerChoice === 2) || // Rock beats Scissors
    (playerChoice === 1 && computerChoice === 0) || // Paper beats Rock
    (playerChoice === 2 && computerChoice === 1) // Scissors beats Paper
  ) {
    result = "Player wins!";
    playerScore++;
  } else {
    result = "Computer wins!";
    compScore++;
  }

  // Update game info and round
  roundNumber++;
  updateGameInfo(result);
}

function updateGameInfo(result) {
  const infoPanel = document.getElementById("gameInfo");
  infoPanel.innerHTML = `
      <div>Human: ${playerScore}</div>
      <div>Round ${roundNumber}</div>
      <div>Computer: ${compScore}</div>
      <div>${result}</div>
    `;

  // Check for end-game condition
  if (playerScore === 5 || compScore === 5) {
    setTimeout(() => {
      alert(`${playerScore === 5 ? "Player" : "Computer"} wins the game!`);
      location.reload(); // Restart game
    }, 100);
  }
}

function playScreen() {
  computerSide();
  gameInfo();
  humanSide();
}

function playGame() {
  console.log("Game Started!");
  gameScreen.innerHTML = "";
  playScreen();
}

startMenu();
