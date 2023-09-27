var wins = 0;
var losses = 0;
var ties = 0;

function getComputerChoice() {
    var rps = ["rock", "paper", "scissors"];
    var random = Math.floor(Math.random() * rps.length);
    return rps[random];
}

function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        ties++;
        return "It's a tie!";
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        wins++;
        return `You win! ${playerChoice} beats ${computerChoice}`;
    } else {
        losses++;
        return `You lose! ${computerChoice} beats ${playerChoice}`;
    }
}
var playerName = prompt("Enter rock, paper, scissors:").toLowerCase();
var computerChoice = getComputerChoice();
console.log("Computer says:", computerChoice);

var result = playRound(playerName, computerChoice);
console.log(result);
console.log(`Wins: ${wins}, Losses: ${losses}, Ties: ${ties}`);