// Function to get Computer Choice of Rock, Paper, or Scissors

const WINNING_SCORE = 5

function getComputerChoice() {
    let computerChoice;
    let x = Math.floor(Math.random() * 3) + 1;
    switch (x) {
        case 1:
            computerChoice = "Rock"
            break;
        case 2:
            computerChoice = "Paper"
            break;
        case 3:
            computerChoice = "Scissors"
    }
    return computerChoice
}

function determineWinner(computerChoice, userChoice) {
    switch (computerChoice) {
        case "ROCK":
            if (userChoice === 'PAPER') {
                return 'User'
            } else if (userChoice === 'SCISSORS'){
                return 'Computer'
            } else {
                return 'Tie'
            }
        case "PAPER":
            if (userChoice === 'SCISSORS') {
                return 'User'
            } else if (userChoice === 'ROCK'){
                return 'Computer'
            } else {
                return 'Tie'
            }
        case "SCISSORS":
            if (userChoice === 'ROCK') {
                return 'User'
            } else if (userChoice === 'PAPER'){
                return 'Computer'
            } else {
                return 'Tie'
            }
        default:
            break;
    }
}



function updateScore(result) {
    if (result === 'user') userScore++;
    if (result === 'computer') computerScore++;

    document.querySelector("p.user-score").textContent = userScore;
    document.querySelector("p.computer-score").textContent = computerScore;
}


function playRound(buttonClicked) {
    if (userScore >= WINNING_SCORE || computerScore >= WINNING_SCORE) return;
    console.log('button was heard');
    let userChoice = buttonClicked.toUpperCase()
    let computerChoice = getComputerChoice().toUpperCase()
    roundResult = determineWinner(computerChoice, userChoice)
    const roundResultText = document.querySelector("p.game-result")
    

    switch (roundResult) {
        case 'User':
            roundResultText.textContent = `You win! ${userChoice} beats ${computerChoice}.`
            updateScore('user')
            break
        case 'Computer':
            roundResultText.textContent = `You lose! ${computerChoice} beats ${userChoice}.`;
            updateScore('computer')
            break
        case 'Tie':
            roundResultText.textContent = `Draw! ${userChoice} ties ${computerChoice}.`
            break
    }  
    console.log('I can get here');

    if (userScore >= WINNING_SCORE || computerScore >= WINNING_SCORE) {
        document.getElementById('restartButton').classList.remove('hidden');
        if (userScore >= WINNING_SCORE) {
            roundResultText.textContent = `You win! Press Restart to play another round`
        } else {
            roundResultText.textContent = `You lose! Press Restart to play another round`
        }
    }
}

function restartGame() {
    userScore = 0;
    computerScore = 0;
    document.querySelector("p.user-score").textContent = userScore;
    document.querySelector("p.computer-score").textContent = computerScore;
    document.querySelector("p.game-result").textContent = ''
    document.getElementById('restartButton').classList.add('hidden');
}

let computerScore = 0;
let userScore = 0;

const buttons = document.querySelectorAll("button.player-input");
console.log(buttons);

// Alternative Approach: Inline Arrow Function
//You can also use an inline arrow function in the event listener to directly pass the parameter:
buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
        let choice = event.target.textContent
        playRound(choice)
    });
    console.log(button);
})



//console.log(computerScore, userScore);
//console.log(getComputerChoice());
//console.log(getUserChoice());