// getComputerChoice - When called you get a random selection of "Rock" "Paper" or "Scissors"

// Have computer chose a random number between 1, 2, or 3
function generateRandomNumber(maxNumber) {
    return Math.floor(Math.random() * maxNumber) + 1
}

function getComputerChoice() {
    // Have computer chose a random number between 1, 2, or 3
    let randomNumber = generateRandomNumber(3)
    // pick rock if 1, paper if 2, and scissors if 3
    let options = ["Rock", "Paper", "Scissors"]
    return options[randomNumber - 1]
}

// Play a single round of rpm
// take two variables, player choice and computer choice
let playerInput = "ROCK"
let computerChoice = "Rock"
// change player choice to always be all proper noun case
function capitalize(string) {
    // lower case everything
    let lower = string.toLowerCase()
    // capitalize the first letter
    let upper = lower[0].toUpperCase()
    return lower.replace(lower[0], upper)
}
let playerChoice = capitalize(playerInput)
// compare player choice and computer choice
function playRound(playerChoice, computerChoice) {
    // if player is the same as computer, it's a tie
    if (playerChoice === computerChoice) {
        return "It's a tie!"
    }
    // if player is rock and computer is paper, computer wins
    if (playerChoice === "Rock" && computerChoice === "Paper") {
        return "You lose! Paper beats Rock"
    }
    // if player is rock and computer is scissors, player wins
    if (playerChoice === "Rock" && computerChoice === "Scissors") {
        return "You Win! Rock beats Scissors"
    }
    // if player is paper and computer is scissors, comsputer wins
    if (playerChoice === "Paper" && computerChoice === "Scissors") {
        return "You lose! Scissors beats Paper"
    }
    // if player is paper and computer is rock, player wins
    if (playerChoice === "Paper" && computerChoice === "Rock") {
        return "You Win! Paper beats Rock"
    }
    // if player is scissors and computer is paper, player wins
    if (playerChoice === "Scissors" && computerChoice === " Paper") {
        return "You Win! Scissors beats Paper"
    }
    // if player is scissors and computer is rock, computer wins
    if (playerChoice === "Scissors" && computerChoice === "Rock") {
        return "You lose! Rock beats Scissors"
    }
}
