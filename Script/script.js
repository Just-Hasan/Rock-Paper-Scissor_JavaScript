"use strict";
const gameResult = document.querySelector(".victorius");

let playerScore = document.querySelector(".players-score");
let computerScore = document.querySelector(".computers-score");

const playerChoiceImage = document.querySelector(".player-choice-img");
const computerChoiceImage = document.querySelector(".computers-choice-img");

const rockDecision = document.querySelector(".rock-decision");
const paperDecision = document.querySelector(".paper-decision");
const scissorDecision = document.querySelector(".scissor-decision");

let playersScore = 0;
let computersScore = 0;

const theGameDecision = function (playersChoice) {
  const decision = ["paper", "scissor", "rock"];
  const randomNumber = Math.round(Math.random() * 2);
  const computerDecision = decision[randomNumber];

  if (computerDecision === playersChoice) {
    gameResult.textContent = "TIE";
    gameResult.style.backgroundColor = "orangered";
    computerChoiceImage.src = `Images/${playersChoice}.png`;
    //
  } else if (computerDecision === "paper" && playersChoice === "scissor") {
    playerScore.textContent = `Your Score : ${++playersScore}`;
    gameResult.textContent = "You win!";
    gameResult.style.backgroundColor = "green";
    computerChoiceImage.src = `Images/paper.png`;
    //
  } else if (computerDecision === "scissor" && playersChoice === "rock") {
    playerScore.textContent = `Your Score : ${++playersScore}`;
    gameResult.textContent = "You win!";
    gameResult.style.backgroundColor = "green";
    computerChoiceImage.src = `Images/scissor.png`;

    //
  } else if (computerDecision === "rock" && playersChoice === "paper") {
    playerScore.textContent = `Your Score : ${++playersScore}`;
    gameResult.textContent = "You win!";
    gameResult.style.backgroundColor = "green";
    computerChoiceImage.src = `Images/rock.png`;
  } else {
    computerScore.textContent = `Your Score : ${++computersScore}`;
    gameResult.textContent = "You lost to a machine lol";
    gameResult.style.backgroundColor = "red";
    computerChoiceImage.src = `Images/${computerDecision}.png`;
  }
};

rockDecision.addEventListener("click", () => {
  const rock = "rock";
  playerChoiceImage.src = `Images/rock.png`;
  theGameDecision(rock);
});

paperDecision.addEventListener("click", () => {
  const paper = "paper";
  playerChoiceImage.src = `Images/paper.png`;
  theGameDecision(paper);
});

scissorDecision.addEventListener("click", () => {
  const scissor = "scissor";
  playerChoiceImage.src = `Images/scissor.png`;
  theGameDecision(scissor);
});
