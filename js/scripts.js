let uScore = 0;
let cScore = 0;

game();

function getcompAnswer() {
    let randomInt = Math.floor(Math.random()*3);

    if (randomInt == 0) {
        return("rock");
    } else if (randomInt == 1) {
        return("paper");
    } else {
        return("scissors");
    }
}

function compareResults(user, comp) {
    if (user === "rock" && comp === "scissors") {
        return(true);
    } else if (user === "paper" && comp === "rock") {
        return(true);
    } else if (user === "scissors" && comp === "paper") {
        return(true);
    } else {
        return false;
    }
}

function game() {
    let uScore = 0;
    let cScore = 0;

    while (true) { 
        if (compareResults(uAnswer, cAnswer) === true) {
            uScore++;
        } else {
            cScore++;
        }
    }

}
