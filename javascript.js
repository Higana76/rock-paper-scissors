let computerChoice = "dead";

function getComputerChoice() {
    let x = Math.floor((Math.random() * 3) +1);
    console.log(x);    
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

let playerChoice = "unpicked";
function getPlayerChoice() {
    playerChoice = prompt("Type rock/paper/scissors", "paper").toLowerCase();
    console.log(playerChoice);
    if (playerChoice === "rock") {
        playerResult = "Valid Input";
    }
    else if (playerChoice === "paper") {
        playerResult = "Valid Input";
    }
    else if (playerChoice === "scissors") {
        playerResult = "Valid Input";
    }
    else {
        playerResult = "Invalid Input";
    }
    console.log(playerResult);
}

function playRound (playerSelection, computerSelection) {

}
