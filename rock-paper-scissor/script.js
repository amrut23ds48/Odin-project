let humanScore = 0;
let computerScore = 0;
const choices = document.querySelectorAll(".choices");
const start = document.querySelector(".start");

start.addEventListener('click', playGame);

function getComputerChoice(){
    let number = Math.floor(Math.random() * 3);
    if(number === 0){
        return "rock";
    } else if(number === 1){
        return "paper";
    } else {
        return "scissor";
    }   
}
function getHumanChoice(){
    choices.forEach((choice) => {
        choice.addEventListener('click', (e) => {
            console.log(e.target.innerHTML);
            return e.target.innerHTML.toLowerCase();
        });
    });
}
function playRound(humanChoice, computerChoice){
    if(humanChoice === "rock" && computerChoice ==="paper"){
        computerScore++;
        console.log("you lose! paper beats rock!");   
          
    }else if(humanChoice === "paper" && computerChoice ==="rock"){
        humanScore++;
        console.log("you win! paper beats rock!");
        
    }else if(humanChoice === "paper" && computerChoice ==="scissor"){
        computerScore++;
        console.log("you lose! scissor beats rock!");
        
    }else if(humanChoice === "scissor" && computerChoice ==="paper"){
        humanScore++;
        console.log("you win! scissor beats rock!");
        
    }else if(humanChoice === "scissor" && computerChoice ==="rock"){
        computerScore++;
        console.log("you lose! rock beats scissor!");
        
    }else if(humanChoice === "rock" && computerChoice ==="scissor"){
        humanScore++;
        console.log("you win! rock beats scissor!");
        
    }else{
        console.log("Its a draw! nobody wins");
    }
}

function playGame(){
    for(let i = 0; i < 5; i++){
        let human = getHumanChoice();
        let computer = getComputerChoice();
        playRound(human, computer);
    }
    declareWinner(humanScore, computerScore);
}
function declareWinner(humanScore, computerScore){
    const result = (humanScore === computerScore) ? 
                    "The game was draw! play again?":
                    (humanScore > computerScore) ?
                    "You are final winner!":
                    "You are loser :)";
    return result;
}
