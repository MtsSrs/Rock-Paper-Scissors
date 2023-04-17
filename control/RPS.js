const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
let playerScore = 0
let computerScore = 0

function getComputerChoice(){
    const choices = ["rock", "paper", "scissors"]
    const aux = random(0,3)
    return choices[aux];
}

function playRound(playerSelection, computerSelection) {
        if(playerSelection.toLowerCase() != "paper" && playerSelection.toLowerCase() != "rock" && playerSelection.toLowerCase() != "scissors"){
            console.warn(`Player choice "${playerSelection}" is not a available choice`);
        } else if(playerSelection.toLowerCase() == computerSelection){
            console.log("Draw");
            playerScore++;
            computerScore++;
        } else if (playerSelection.toLowerCase() == "paper" && computerSelection == "rock" ) {
            console.log("Player wins!")
            playerScore++;
        } else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "paper" ){
            console.log("Player wins!")
            playerScore++;
        } else if (playerSelection.toLowerCase() == "rock" && computerSelection == "scissors"){
            console.log("Player wins!")
            playerScore++;
        } else {
            console.log("Computer wins!")
            computerScore++;
        }
}
 
function game(){
    let rounds = 0;

    while(rounds != 5){
    let playerSelection = prompt("Rock, Paper or Scissors?")
    let computerSelection = getComputerChoice();  
    playRound(playerSelection, computerSelection)
    rounds++;
    console.log(`Player Score : ${playerScore} vs ${computerScore} : Computer Score`)
    }
        
}

  
console.log(game());
