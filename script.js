const rockBtn = document.querySelector(".Rock");
const paperBtn = document.querySelector(".Paper");
const scissorsBtn = document.querySelector(".Scissors");
const stat = document.querySelector(".status")

let playerScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let compChoice = Math.floor(Math.random() * 3);
    return compChoice;
};

rockBtn.addEventListener("click", () => {
    stat.innerHTML = "hi"
    playGame(0, getComputerChoice());
})

paperBtn.addEventListener("click", () => {
    playGame(1, getComputerChoice());
})

scissorsBtn.addEventListener("click", () => {
    playGame(2, getComputerChoice());
})

function playGame(playerChoice, computerChoice){
    let arr = ["rock", "paper", "scissors"];

    if (playerChoice == computerChoice){
        stat.innerHTML = "Draw, Player: " + playerScore + " Computer: " + computerScore;

    } else if (playerChoice == 0 && computerChoice == 2){
        playerScore++;
        stat.innerHTML = "Player Scores, rock vs scissors, Player: " + playerScore + " Computer: " + computerScore;

    } else if (playerChoice == 1 && computerChoice == 0){
        playerScore++;
        stat.innerHTML = "Player Scores, paper vs scissors, Player: " + playerScore + " Computer: " + computerScore;
        
    } else if (playerChoice == 2 && computerChoice == 1){
        playerScore++;
        stat.innerHTML = "Player Scores, scissors vs paper, Player: " + playerScore + " Computer: " + computerScore;
    } else{
        computerScore++;
        stat.innerHTML = "Computer Scores, " + arr[computerChoice] + " vs " + arr[playerChoice] + ", Player: " + playerScore + " Computer: " + computerScore;
    } 

    if (computerScore + playerScore == 5){
        if (playerScore > computerScore){
            stat.innerHTML = "Player wins with " + playerScore + " points, scores have been reset"
        } else {
            stat.innerHTML = "Computer wins with "+ computerScore + " points, scores have been reset"
        }

        computerScore = 0;
        playerScore = 0;
    }
};

