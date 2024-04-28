let humanScore = computerScore = 0;

function getComputerChoice() {
    let randomChoice = Math.random() * 3;
    if(randomChoice >= 0 && randomChoice < 1) {
        return "rock";
    }
    else if(randomChoice >= 1 && randomChoice < 2) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function getHumanChoice() {
    let human = prompt();
    return human;
}

function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();
    switch(humanChoice) {
        case "rock":
            switch(computerChoice) {
                case "rock":
                    return "Tie!";
                case "paper":
                    computerScore += 1;
                    return "You lose! Paper beats Rock!";
                case "scissors":
                    humanScore += 1;
                    return "You win! Rock beats Scissors!";
            }
        case "paper":
            switch(computerChoice) {
                case "rock":
                    humanScore += 1;
                    return "You win! Paper beats Rock!";
                case "paper":
                    return "Tie!";
                case "scissors":
                    computerScore += 1;
                    return "You lose! Scissors beats Paper!";
            }
        case "scissors":
            switch(computerChoice) {
                case "rock":
                    computerScore += 1;
                    return "You lose! Rock beats Scissors!";
                case "paper":
                    humanScore += 1;
                    return "You win! Scissors beats Paper!";
                case "scissors":
                    return "Tie!";
            }
    }
}

function playGame() {
    for(let i = 0 ; i < 5 ; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(humanSelection, computerSelection));
    }
    if(humanScore > computerScore) {
        console.log("You win! You got " + humanScore + " point!");
    }
    else if(humanScore < computerScore) {
        console.log("You lose! You got " + humanScore + " point!");
    }
    else {
        console.log("Tie! You got " + humanScore + " point!");
    }
}

playGame();