const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

function getComputerChoice(){
    const choices = ["rock", "paper", "scissors"]
    const aux = 2
    return choices[aux];
}

function playRound(playerSelection, computerSelection) {
        if(playerSelection.toLowerCase() == computerSelection){
            console.log("Draw");
        } else if (playerSelection.toLowerCase() == "paper" && computerSelection == "rock" ) {
            console.log("Player wins!")
        } else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "paper" ){
            console.log("Player wins!")
        } else if (playerSelection.toLowerCase() == "rock" && computerSelection == "scissors"){
            console.log("Player wins!")
        } else {
            console.log("Computer wins!")
        }
}
   

  const playerSelection = "rock";
  const computerSelection = getComputerChoice();
  
  console.log(playRound(playerSelection, computerSelection));

