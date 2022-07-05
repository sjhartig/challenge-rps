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
    if(user=== comp){
        return("tie");
    } else if (user === "rock" && comp === "paper") {
        return(false);
    } else if (user === "rock" && comp === "scissors") {
        return(true);
    } else if (user === "paper" && comp === "scissors") {
        return(false);
    } else if (user === "paper" && comp === "rock") {
        return(true);
    } else if (user === "scissors" && comp === "rock") {
        return(false);
    } else if (user === "scissors" && comp === "paper") {
        return(true);
    } else {
        return("bad input");
    }
}

function game() {
    let uScore = 0;
    let cScore = 0;

    while (uScore < 5 && cScore < 5) { 
        let uAnswer = prompt("Lets play Rock, Paper, Scissors!").toLowerCase(); //a line break can be made with \n if needed
        let cAnswer = getcompAnswer();

        if (compareResults(uAnswer, cAnswer) === true) {
            uScore++;
            alert("You win, " + uAnswer + " beats " + cAnswer + "!" + " Score: " + uScore + " to " + cScore);
        } else if (compareResults(uAnswer, cAnswer) === false) {
            cScore++;
            alert("You lose, " + cAnswer + " beats " + uAnswer + "!" + " Score: " + uScore + " to " + cScore);
        } else if (compareResults(uAnswer, cAnswer) === "tie") {
            alert("It's a tie, " + uAnswer + " ties " + cAnswer + "!" + " Score: " + uScore + " to " + cScore);
        } else {
            alert("You didn't type Rock, Paper or Scissors! Please try again.");
        }
    }
}
