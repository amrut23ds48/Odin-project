let humanScore = 0;
let computerScore = 0;
let numberOfRounds = 0;
const choices = document.querySelectorAll(".choices");
const start = document.querySelector(".start");
const instruction = document.querySelector(".instruction");
const gameControls = document.querySelector(".gameControls");

start.addEventListener('click', () =>{
    instruction.textContent = "The game has started! Make your choice";
    if(start){
        start.remove();
    }
});

choices.forEach(choice => {
        choice.addEventListener('click', (e) => {
            let humanChoice = e.target.innerHTML.toLowerCase().trim();
            let computerChoice = getComputerChoice();
            instruction.textContent = playRound(humanChoice, computerChoice);
            if(numberOfRounds === 5){
                instruction.textContent =  declareWinner();
            }
        });
        
    });

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
function playRound(humanChoice, computerChoice){
    numberOfRounds++;
    if(humanChoice === "rock" && computerChoice ==="paper"){
        computerScore++;
        return "you lose! paper beats rock!"   
          
    }else if(humanChoice === "paper" && computerChoice ==="rock"){
        humanScore++;
        return "you win! paper beats rock!"
        
    }else if(humanChoice === "paper" && computerChoice ==="scissor"){
        computerScore++;
        return "you lose! scissor beats rock!"
        
    }else if(humanChoice === "scissor" && computerChoice ==="paper"){
        humanScore++;
        return "you win! scissor beats rock!"
        
    }else if(humanChoice === "scissor" && computerChoice ==="rock"){
        computerScore++;
        return "you lose! rock beats scissor!"
        
    }else if(humanChoice === "rock" && computerChoice ==="scissor"){
        humanScore++;
        return "you win! rock beats scissor!"
        
    }else{
        return "Its a draw! nobody wins"
    }
}

function declareWinner(){
    const result = (humanScore === computerScore) ? 
                    "The game was draw! play again?":
                    (humanScore > computerScore) ?
                    "You are final winner!":
                    "You are loser :)";
    return result;
}
