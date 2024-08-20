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

function getUserChoice() {
    let userChoice = prompt("Enter your choice of Rock, Paper, or Scissors").toUpperCase();
    while (userChoice !== 'ROCK' && userChoice !== 'SCISSORS' && userChoice !== 'PAPER') {
        alert('Please enter a valid argument or either Rock, Paper, or Scissors')
        userChoice = prompt("Enter your choice of Rock, Paper, or Scissors").toUpperCase();
    }
    return userChoice.toUpperCase()
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

function playRound() {
    let userChoice = getUserChoice().toUpperCase()
    let computerChoice = getComputerChoice().toUpperCase()
    roundResult = determineWinner(computerChoice, userChoice)
    switch (roundResult) {
        case 'User':
            alert(`You win! ${userChoice} beats ${computerChoice}.`)
            userScore++
            break;
        case 'Computer':
            alert(`You lose! ${computerChoice} beats ${userChoice}.`);
            computerScore++
            break;
        case 'Tie':
            alert(`Draw! ${userChoice} ties ${computerChoice}.`)
            break
    }  
}

function playGame() {
    let round = 1
    while (round <= 5) {
        playRound();
        round++;
    }

    if (computerScore > userScore) {
        alert(`Sorry, you lose ${computerScore} games to ${userScore}.`);
    } else if (userScore > computerScore) {
        alert(`Congrats, you win ${userScore} games to ${computerScore}.`);
    } else {
        alert(`Woah, a draw at ${userScore} games to ${computerScore}.`)
    }
    return
}

let computerScore = 0;
let userScore = 0;

playGame()
console.log(computerScore, userScore);
//console.log(getComputerChoice());
//console.log(getUserChoice());