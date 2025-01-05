let userScore=0;
let compScore=0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const loader = document.querySelector(".loader");
const userScoreP = document.querySelector("#user-score");
const compScoreP = document.querySelector("#comp-score");
const resetBtn= document.querySelector("#reset");

loader.style.display = "none";//so that loader only visible when some event is happening.

const reset = () => {
    loader.style.display = "block";
    loader.style.animation = "spinAnimate 2s linear 1";
    msg.innerText = "Starting Again...";
    msg.style.backgroundColor = "#081b31";

    setTimeout(() => {
        userScore=0;
        compScore=0;
        userScoreP.innerText=0;
        compScoreP.innerText=0;
        loader.style.display = "none";
        msg.innerText="Play Your Move";
    },2000)
}

resetBtn.addEventListener("click", () => {
    reset();
})


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
    // Show loader
    loader.style.display = "block";
    loader.style.animation = "spinAnimate 2s linear 1";
    msg.innerText = "Loading...";
    msg.style.backgroundColor = "#081b31";

    setTimeout(() => {
        // Hide loader after 2 seconds
        loader.style.display = "none";

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
    }, 2000); // 2-second delay to match loader animation
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice= choice.getAttribute("id");
        loader.style.animation = "spinAnimate 2s linear 1"; // Start loader animation on click
        playGame(userChoice);
    });
});
