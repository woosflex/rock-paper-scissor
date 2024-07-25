// Get computer's choice and return it
function getComputerChoice() {
    let computerChoice = Math.floor((Math.random() * 3) + 1);
    if (computerChoice === 1) return "Rock";
    else if (computerChoice === 2) return "Paper";
    else return "Scissors";
}

// Get player's choice and return it
function getHumanChoice() {
    let humanChoice = prompt("What is your move? (Rock, Paper or Scissors)");
    return humanChoice;
}

// function to run game
function playGame(){
    // Initialized scores
    let humanScore = 0;
    let computerScore = 0;

    // instructions for every round
    function playRound(humanChoice, computerChoice) {
        let humanSelection = humanChoice.toUpperCase();
        console.log(`Human: ${humanChoice}, Computer: ${computerChoice}`);
        if ((humanSelection == "PAPER") && (computerChoice === "Rock")) {
            humanScore++;
            return "You win! Paper beats Paper.";
        }
        else if ((humanSelection == "ROCK") && (computerChoice === "Paper")) {
            computerScore++;
            return "You lose! Paper beats Rock.";
        }
        else if (((humanSelection == "SCISSORS") || (humanSelection === "SCISSOR")) && (computerChoice === "Paper")) {
            humanScore++;
            return "You win! Scissors beats Paper.";
        }
        else if ((humanSelection == "PAPER") && (computerChoice === "Scissors")) {
            computerScore++;
            return "You lose! Scissors beats Paper.";
        }
        else if ((humanSelection == "ROCK") && (computerChoice === "Scissors")) {
            humanScore++;
            return "You win! Rock beats Scissors.";
        }
        else if (((humanSelection == "SCISSORS") || (humanSelection === "SCISSOR")) && (computerChoice === "Rock")) {
            computerScore++;
            return "You lose! Rock beats Scissors.";
        }
        else {
            return "It's a tie!";
        }
    }

    console.log(playRound(getHumanChoice(), getComputerChoice()));
    console.log(playRound(getHumanChoice(), getComputerChoice()));
    console.log(playRound(getHumanChoice(), getComputerChoice()));
    console.log(playRound(getHumanChoice(), getComputerChoice()));
    console.log(playRound(getHumanChoice(), getComputerChoice()));
    
    if (humanScore > computerScore) {
        console.log(`Congratulations! You win by ${humanScore}.`);
    }
    else {
        console.log(`Oops! You lose. Computer won by ${computerScore}.`);
    }
}

playGame();