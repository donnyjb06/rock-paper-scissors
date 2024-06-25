// BUTTON VARIABLES
let buttons = document.querySelectorAll('#choices img')


// SCORE VARIABLES
let userScore = 0;
let cpuScore = 0;

let userScoreElmnt = document.getElementById('user-score');
let cpuScoreElmnt = document.getElementById('cpu-score');


// PLAYER CHOICE ICON VARIABLES
let userChoiceIcon = document.getElementById('user-icon');
let cpuChoiceIcon = document.getElementById('cpu-icon');


// ROUND RESULTS / DETAILS VARIABLES
let roundResults = document.getElementById('round-results');
let roundDetails = document.getElementById('round-details');


// END SCREEN VARIABLES
let endScreen = document.getElementById('end-screen');
let gameResults = document.getElementById('game-result');
const restartBtn = document.getElementById("restart-btn");


// CHOICES
const choices = ['Rock', 'Paper', 'Scissors']


// GAME
// PLAY ROUND BY CLICKING CHOICE BUTTON
buttons.forEach(button => {
    button.addEventListener("click", function() {
        // GET PLAYER CHOICE AND UPDATE CHOICE ICON
        const playerChoice = this.id;
        userChoiceIcon.setAttribute('src', `assets/images/${playerChoice}-icon.png`);

        // GET CPU CHOICE AND UPDATE CHOICE ICON
        const cpuChoice = choices[Math.floor(Math.random() * choices.length)];
        cpuChoiceIcon.setAttribute('src', `assets/images/${cpuChoice}-icon.png`);

        // INCREMENT WINNER'S SCORE
        incrementScore(determineWinner(playerChoice, cpuChoice));
        console.log(`User Score: ${userScore}, CPU Score ${cpuScore}`)

        // IF GAME IS OVER SHOW RESULT SCREEN AND RESET DOM
        finalWinner = isGameOver();
        if (finalWinner === 0) {
            restartBtn.addEventListener("click", resetGame);
            updateModal(finalWinner);
        }
        
        else if (finalWinner === 1) {
            restartBtn.addEventListener("click", resetGame);
            updateModal(finalWinner);
        }
        

    })
});


// UPDATES roundResults & roundDetails innerText
// RETURNS 1 FOR PLAYER WIN | RETURNS 0 FOR PLAYER LOSS
function determineWinner (player, computer) {
    switch (player) {
        case computer:
            roundResults.innerText = "It's a TIE!";
            roundDetails.innerText = `${player.toUpperCase()} meets ${computer.toUpperCase()}!`;
            break;

        case 'Rock':
            switch (computer) {
                case "Paper":
                    roundResults.innerText = "You LOSE!";
                    roundDetails.innerText = "ROCK gets enveloped by PAPER!"
                    return 0;

                case "Scissors":
                    roundResults.innerText = "You WIN!";
                    roundDetails.innerText = "ROCK gets smashed by ROCK!";
                    return 1;
            }

        case "Paper":
            switch (computer) {
                case "Scissors":
                    roundResults.innerText = "You LOSE!";
                    roundDetails.innerText = "PAPER gets shredded by SCISSORS!";
                    return 0;

                case "Rock":
                    roundResults.innerText = "You WIN!";
                    roundDetails.innerText = "PAPER suffocates ROCK!";
                    return 1;
            }

        case "Scissors":
            switch (computer) {
                case "Rock":
                    roundResults.innerText = "You LOSE!";
                    roundDetails.innerText = "SCISSORS get obliterated by ROCK!";
                    return 0;

                case "Paper":
                    roundResults.innerText = "You WIN!";
                    roundDetails.innerText = "SCISSORS slice through PAPER!";
                    return 1;
            }
    }
}


// INCREMENT WINNER'S SCORE BY 1
function incrementScore (winner) {
    if (winner == 1) {
        userScore++;
        userScoreElmnt.innerText = userScore;
    }

    else if (winner == 0) {
        cpuScore++;
        cpuScoreElmnt.innerText = cpuScore;
    }
}


// RETURNS 1 IF USER = FINALWINNER || RETURNS 0 IF CPU IS FINALWINNER
// RETURNS FALSE IF GAME HASN'T ENDED
function isGameOver () {
    if (userScore == 5) {
        return 1;
    }

    else if (cpuScore == 5) {
        return 0;
    }
        
    return false;
}


// REVEALS END/RESULT SCREEN MODAL
function updateModal (finalWinner) {
    if (finalWinner === 0) {
        gameResults.innerText = "You LOSE!";
        gameResults.style.color = 'var(--lose-color)';
    }
        
    else {
        gameResults.innerText = "You WIN!";
        gameResults.style.color = "var(--win-color)";
    }

    endScreen.style.display = 'flex';
}


// RESETS DOM BACK TO INITIAL HTML
function resetGame() {
    userScore = 0;
    cpuScore = 0;
    userScoreElmnt.innerText = '0';
    cpuScoreElmnt.innerText = "0";
    userChoiceIcon.setAttribute("src", "assets/images/qstn-mrk.png");
    cpuChoiceIcon.setAttribute("src", "assets/images/qstn-mrk.png");
    roundResults.innerText = "Choose your champion!";
    roundDetails.innerText = "First to 5 wins the game!"
    endScreen.style.display = "none";
    restartBtn.removeEventListener("click", resetGame);
}