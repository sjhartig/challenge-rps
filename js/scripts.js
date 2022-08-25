// init variables
let uScore = 0;
let cScore = 0;
let tScore = 0;
let cAnswer = "";
let result = "";

// connect to page elements
const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');

const score = document.querySelector('#score');
const results = document.querySelector('#results');
const winner = document.querySelector('#winner');

// Add event listeners and play a round of RPS with my answer
rockBtn.addEventListener('click', function() {
    playRound("rock");
});

paperBtn.addEventListener('click', function() {
    playRound("paper");
});

scissorsBtn.addEventListener('click', function() {
    playRound("scissors");
});

// primary game logic
function getComputerAnswer() {
    let randomInt = Math.floor(Math.random()*3);

    if (randomInt == 0) {
        cAnswer = "rock";
    } else if (randomInt == 1) {
        cAnswer = "paper";
    } else {
        cAnswer = "scissors";
    }
}

function compareResults(uAnswer, cAnswer) {
    if (uAnswer === "rock" && cAnswer === "scissors") {
        result = "win";
    } else if (uAnswer === "paper" && cAnswer === "rock") {
        result = "win";
    } else if (uAnswer === "scissors" && cAnswer === "paper") {
        result = "win";
    } else if (uAnswer === cAnswer) {
        result = "tie";
    } else {
        result = "lose";
    }
}

function incrementScore() {
    if (result === "win") {
        uScore++;
    } else if (result === "tie") {
        tScore++;
    } else {
        cScore++;
    }
}

function updatePageResults(u) {
    results.textContent = "You chose " + u + ", the bully chose " + cAnswer;
    score.textContent = "Player: " + uScore + ", Bully: " + cScore + ", Ties: " + tScore;
}

function checkForWin() {
    if (uScore === 5) {
        winner.textContent = "You Win!";
    } else if (cScore === 5) {
        winner.textContent = "You Lose!";
    } else {
        return;
    };
}

function playRound(uAnswer) {
    getComputerAnswer();
    compareResults(uAnswer, cAnswer);
    incrementScore();
    updatePageResults(uAnswer);
    checkForWin();
}

/* 
    When I hit the button
        play a round of RPS with my answer
        
    A round should consist of:
        generate a random computer answer
        compare the computer answer to my answer and pick a round winner
        increase respective score
        
    Once the round is complete, update the page with the results
        show the user answer vs the computer answer
        show the new score
    
    Check to see if the game is over
        check if either the player or the computer has 5 points
        if not, return
        if so,
            display win or lose text
            remove the buttons
            add play again button
*/