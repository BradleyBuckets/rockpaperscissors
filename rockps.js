// getComputerChoice - When called you get a random selection of "Rock" "Paper" or "Scissors"

// Have computer chose a random number between 1, 2, or 3
function generateRandomNumber(maxNumber) {
    return Math.floor(Math.random() * maxNumber) + 1
}

function getComputerChoice() {
    let randomNumber = generateRandomNumber(3)
    // log rock if 1, paper if 2, and scissors if 3
    let options = ["Rock", "Paper", "Scissors"]
    return options[randomNumber - 1]
}
