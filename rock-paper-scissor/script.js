let humanScore = 0;
let computerScore = 0;
let numberOfRounds = 0;
const choices = document.querySelectorAll(".choices");
const start = document.querySelector(".start");
const instruction = document.querySelector(".instruction");
const gameControls = document.querySelector(".gameControls");
const human = document.querySelector(".human");
const computer = document.querySelector(".computer");
const buttons = document.querySelector(".buttons")

start.addEventListener('click', () =>{
    instruction.textContent = "The game has started! Make your choice";
    if(start){
        start.remove();
    }
});
buttons.addEventListener('click', (e) => {
    if(e.target.classList.contains("new-game")){
        e.target.remove();
        instruction.textContent = "New Game has started! make your choice."
    }
})
choices.forEach(choice => {
        choice.addEventListener('click', (e) => {
            if(instruction.textContent === ""){
                alert("press start first!");
                return;
            }
            let humanChoice = e.target.innerHTML.toLowerCase().trim();
            let computerChoice = getComputerChoice();
            instruction.textContent = playRound(humanChoice, computerChoice);
            if(numberOfRounds === 5){
                instruction.textContent =  declareWinner();
                resetGame();
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
        computer.textContent = computerScore;
        return "you lose! paper beats rock!"   
          
    }else if(humanChoice === "paper" && computerChoice ==="rock"){
        humanScore++;
        human.textContent = humanScore;
        return "you win! paper beats rock!"
        
    }else if(humanChoice === "paper" && computerChoice ==="scissor"){
        computerScore++;
        computer.textContent = computerScore;
        return "you lose! scissor beats rock!"
        
    }else if(humanChoice === "scissor" && computerChoice ==="paper"){
        humanScore++;
        human.textContent = humanScore;
        return "you win! scissor beats rock!"
        
    }else if(humanChoice === "scissor" && computerChoice ==="rock"){
        computerScore++;
        computer.textContent = computerScore;
        return "you lose! rock beats scissor!"
        
    }else if(humanChoice === "rock" && computerChoice ==="scissor"){
        humanScore++;
        human.textContent = humanScore;
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

function resetGame(){
    humanScore = 0;
    human.textContent = humanScore;
    computerScore = 0;
    computer.textContent = computerScore;
    numberOfRounds = 0;
    buttons.innerHTML = `<button class = "new-game">play again</button>`
}