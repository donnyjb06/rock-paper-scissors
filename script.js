// GETS COMPUTER CHOICE
function getComputerChoice() {
    return choice = Math.floor(Math.random() * 3);
}


// GETS USER CHOICE
function getHumanChoice() {
    let choice;

    // LOOP TO GET CORRECT CHOICE THAT IS A NUMBER AND IS BETWEEN 1 & 3
    while (true) {
        choice = parseInt(prompt("1. Rock | 2. Paper | 3. Scissors. Type a number between 1 & 3"));

        if (!isNaN(choice) && choice >= 1 && choice <= 3) {
            return choice - 1;
        }

        alert("Invalid input. Please enter a number between 1 & 3!");
    }
}

function playRound(user_choice, cpu_choice, choices) {
    // OUTPUTS USER AND CPU CHOICES
    console.log(`User Choice: ${choices[user_choice]} | Computer Choice: ${choices[cpu_choice]}`)

    switch (user_choice) {
        case cpu_choice:
            console.log("Its a tie!");
            break;

        case 0: // IF USER CHOOSES ROCK
            switch (cpu_choice) {
                case 1: // IF CPU CHOOSES PAPER
                    console.log("You lose! Paper beats rock!");
                    return 0;
                
                case 2: // IF CPU CHOOSES SCISSORS
                    console.log("You win! Rock beats scissors!");
                    return 1;
            }

        case 1: // IF USER CHOOSES PAPER
            switch (cpu_choice) {
                case 2: // IF CPU CHOOSES SCISSORS
                    console.log("You lose! Scissors beats paper!");
                    return 0;

                case 0: // IF CPU CHOOSES ROCK
                    console.log("You win! Paper beats rock!");
                    return 1;
            }

        case 2:  // IF USER CHOOSES SCISSORS
            switch (cpu_choice) {
                case 0: // IF CPU CHOOSES ROCK
                    console.log("You lose! Rock beats scissors!");
                    return 0;

                case 1: // IF CPU CHOOSES PAPER
                    console.log("You win! Scissors beats paper!");
                    return 1;
            }
    }

    
}


function playGame() {
    const CHOICES = ['ROCK', 'PAPER', 'SCISSORS'];
    let playerScore = 0;
    let cpuScore = 0;  
    let winner;  

    // LOOP TO PLAY 5 ROUNDS
    for (let i = 0; i < 5; i++) {
        console.log(`Round #${i + 1} of 5`);

        winner = playRound(getHumanChoice(), getComputerChoice(), CHOICES);

        if (winner === 1) {
            playerScore++;
        } 

        else if (winner === 0) {
            cpuScore++;
        }
        
        console.log("----------------");
    }

    if (playerScore > cpuScore) {
        console.log(`Good job! You won ${playerScore} to ${cpuScore}!`)
    }

    else if (cpuScore > playerScore) {
        console.log(`Nice try! You lost ${cpuScore} to ${playerScore}! Maybe next time!`);
    }

    else {
        console.log(`It's a tie! You both had ${cpuScore}!`);
    }
}

playGame()