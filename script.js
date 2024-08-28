// Function to get Computer Choice of Rock, Paper, or Scissors

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

function gameOver(roundResultText) {
    if (computerScore == 5) {
        roundResultText.textContent = 'Computer wins! To start again make your selection'
        userScore = 0
        computerScore = 0
    } else if (userScore == 5) {
        roundResultText.textContent = 'You win! To start again make your selection'
        userScore = 0
        computerScore = 0
    }
    return
}


function playRound(buttonClicked) {
    console.log('button was heard');
    let userChoice = buttonClicked.toUpperCase()
    let computerChoice = getComputerChoice().toUpperCase()
    roundResult = determineWinner(computerChoice, userChoice)
    const roundResultText = document.querySelector("p.game-result")
    const userScoreboard = document.querySelector("p.user-score");
    const computerScoreboard = document.querySelector("p.computer-score");

    switch (roundResult) {
        case 'User':
            roundResultText.textContent = `You win! ${userChoice} beats ${computerChoice}.`
            //alert(`You win! ${userChoice} beats ${computerChoice}.`)
            userScore++
            userScoreboard.textContent = userScore;
            gameOver(roundResultText)
            userScoreboard.textContent = userScore;
            break;
        case 'Computer':
            roundResultText.textContent = `You lose! ${computerChoice} beats ${userChoice}.`;
            //alert(`You lose! ${computerChoice} beats ${userChoice}.`);
            computerScore++
            computerScoreboard.textContent = computerScore;
            gameOver(roundResultText);
            computerScoreboard.textContent = computerScore;
            break;
        case 'Tie':
            roundResultText.textContent = `Draw! ${userChoice} ties ${computerChoice}.`
            //alert(`Draw! ${userChoice} ties ${computerChoice}.`)
            break
    }  
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

//Create user and computer scoreboard
//userScoreboard = document.createElement("div");
//userScoreboard.classList.add("user-score");
//userScoreboard.appendChild(document.createElement("h3"))
//console.log(userScoreboard);
//userScoreboard

//computerScoreboard = document.createElement("div");
//computerScoreboard.classList.add("computer-score");
//computerScoreboard.appendChild(document.createElement("h3"))







console.log(computerScore, userScore);
//console.log(getComputerChoice());
//console.log(getUserChoice());