let computerChoice = "";
let playerChoice = "";
let userScore = 0;
let computerScore = 0;
let scoreboard;
let gameResult = "";


function getComputerChoice() {
    let x = Math.floor((Math.random() * 3) +1);   
    if (x === 1) {
        computerChoice = "rock";
    }
    else if (x === 2) {
        computerChoice = "paper";
    }
    else if (x === 3){
        computerChoice = "scissors";
    }
    else {
        computerChoice = "broken";
    }
    console.log(computerChoice);
}

function getPlayerChoice() {
    playerChoice = prompt("Type rock/paper/scissors", "paper").toLowerCase();
    console.log(playerChoice);
}

function playRound (playerSelection, computerSelection) {
    playerSelection = getPlayerChoice();
    computerSelection = getComputerChoice();
    if ((playerChoice === "rock") && (computerChoice === "scissors")) {
        userScore = userScore + 1;
        gameResult = "You Win! Rock beats Scissors!";
    }

    else if ((playerChoice === "scissors") && (computerChoice === "paper")) {
        userScore = userScore + 1;
        gameResult = "You Win! Scissors beats Paper!";
    }

    else if ((playerChoice === "paper") && (computerChoice === "rock")) {
        userScore = userScore + 1;
        gameResult = "You Win! Paper beats Rock!";
    }

    else if ((playerChoice === "scissors") && (computerChoice === "rock")) {
        computerScore = computerScore + 1;
        gameResult = "You Lose! Rock beats Scissors!";
    }

    else if ((playerChoice === "paper") && (computerChoice === "scissors")) {
        computerScore = computerScore + 1;
        gameResult = "You Lose! Scissors beats Paper!";
    }

    else if ((playerChoice === "rock") && (computerChoice === "paper")) {
        computerScore = computerScore + 1;
        gameResult = "You Lose! Paper beats Rock!";
    }

    else if ((playerChoice === "rock") && (computerChoice === "rock")) {
        gameResult = "Draw!";
    }

    else if ((playerChoice === "paper") && (computerChoice === "paper")) {
        gameResult = "Draw!";
    }

    else if ((playerChoice === "scissors") && (computerChoice === "scissors")) {
        gameResult = "Draw!";
    }

    else {
        gameResult = "Input Error!";
    }
}

function game() {
    playerSelection = getPlayerChoice;
    computerSelection = getComputerChoice;
    playRound (playerSelection, computerSelection);
    scoreboard = "User: " + userScore + "!     Computer: " + computerScore + "!";
    console.log(scoreboard);
    console.log(gameResult);
    
    playRound (playerSelection, computerSelection);
    scoreboard = "User: " + userScore + "!     Computer: " + computerScore + "!";
    console.log(scoreboard);
    console.log(gameResult);
    
    playRound (playerSelection, computerSelection);
    scoreboard = "User: " + userScore + "!     Computer: " + computerScore + "!";
    console.log(scoreboard);
    console.log(gameResult);
    
    playRound (playerSelection, computerSelection);
    scoreboard = "User: " + userScore + "!     Computer: " + computerScore + "!";
    console.log(scoreboard);
    console.log(gameResult);

    playRound (playerSelection, computerSelection);
    scoreboard = "User: " + userScore + "!     Computer: " + computerScore + "!";
    console.log(scoreboard);
    console.log(gameResult);
}
