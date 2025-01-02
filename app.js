let userScore=0;
let compScore=0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScoreP = document.querySelector("#user-score");
const compScoreP = document.querySelector("#comp-score");


const genCompChoice = () => {
    //gen comp choice
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const gameDraw = () => {
    msg.innerText="Game Was Draw. Play Again!";
    msg.style.backgroundColor= "#081b31";
};

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScoreP.innerText = userScore;
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
      } else {
        compScore++;
        compScoreP.innerText = compScore;
        msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
      }
};

const playGame = (userChoice) => {
    const compChoice = genCompChoice();
    if(userChoice === compChoice) {
        gameDraw();
    }
    else {
        let userWin=true;
        if(userChoice === "rock") {
            //scissor,paper
            userWin = compChoice === "paper" ? false : true;
        }
        else if (userChoice === "paper") {
            //rock, scissor
            userWin= compChoice === "scissors" ? false: true;
        }
        else {
            //rock,paper
            userWin = compChoice === "rock" ? false: true; 
        }
        showWinner (userWin, userChoice, compChoice);
    }

};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice= choice.getAttribute("id");
        playGame(userChoice);
    });
});