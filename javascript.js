let computerChoice = "dead";
let playerChoice = "unpicked";


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
    // if (playerChoice === "rock") {
    //     playerResult = "Valid Input";
    // }
    // else if (playerChoice === "paper") {
    //     playerResult = "Valid Input";
    // }
    // else if (playerChoice === "scissors") {
    //     playerResult = "Valid Input";
    // }
    // else {
    //     playerResult = "Invalid Input";
    // }
    // console.log(playerResult);
}

function playRound (playerSelection, computerSelection) {
    playerSelection = getPlayerChoice();
    computerSelection = getComputerChoice();
    if ((playerChoice === "rock") && (computerChoice === "scissors")) {
        return "You Win! Rock beats Scissors!";
    }

    else if ((playerChoice === "scissors") && (computerChoice === "paper")) {
        return "You Win! Scissors beats Paper!";
    }

    else if ((playerChoice === "paper") && (computerChoice === "rock")) {
        return "You Win! Paper beats Rock!";
    }

    if ((playerChoice === "scissors") && (computerChoice === "rock")) {
        return "You Lose! Rock beats Scissors!";
    }

    else if ((playerChoice === "paper") && (computerChoice === "scissors")) {
        return "You Lose! Scissors beats Paper!";
    }

    else if ((playerChoice === "rock") && (computerChoice === "paper")) {
        return "You Lose! Paper beats Rock!";
    }

    else if ((playerChoice === "rock") && (computerChoice === "rock")) {
        return "Draw!";
    }

    else if ((playerChoice === "paper") && (computerChoice === "paper")) {
        return "Draw!";
    }

    else if ((playerChoice === "scissors") && (computerChoice === "scissors")) {
        return "Draw!";
    }

    else {
        return "Input Error!";
    }
}
