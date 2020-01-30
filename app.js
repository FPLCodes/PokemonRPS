let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard = document.querySelector(".scores");
const result = document.getElementById("text");
const fire = document.getElementById("f");
const water = document.getElementById("w");
const grass = document.getElementById("g");
const userSmall = "(You)".fontsize(4).sub();
const compSmall = "(Trainer)".fontsize(4).sub();

function word(letter) {
  return letter === "f" ? "Fire" : letter === "w" ? "Water" : "Grass";
} 

function getCompChoice() {
    const choices = ['f', 'w' ,'g'];
    const randNum = Math.floor(Math.random() * 3);
    return choices[randNum];
}

function win(userChoice, compChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result.innerHTML = `${word(userChoice)}${userSmall} beats ${word(compChoice)}${compSmall} You win!`;
    document.getElementById(userChoice).classList.add("correct");
    if (userChoice === "f") {
      result.style.color="red";
    }
    if (userChoice === "g") {
      result.style.color = "green";
    }
    if (userChoice === "w") {
      result.style.color = "blue";
    }
  setTimeout(function () {document.getElementById(userChoice).classList.remove('correct')}, 400);
}

function lose(userChoice, compChoice) {
  compScore++;
  compScore_span.innerHTML = compScore;
  userScore_span.innerHTML = userScore;
  result.innerHTML = `${word(compChoice)}${compSmall} beats ${word(userChoice)}${userSmall} You lose!`;
  document.getElementById(userChoice).classList.add("wrong");
  if (userChoice === "f") {
    result.style.color = "blue";
  }
  if (userChoice === "g") {
    result.style.color = "red";
  }
  if (userChoice === "w") {
    result.style.color = "darkgreen";
  }
  setTimeout(function () { document.getElementById(userChoice).classList.remove('wrong') }, 400);
}

function draw(userChoice, compChoice) {
  result.innerHTML = "It's a draw";
  document.getElementById(userChoice).classList.add("draw");
  setTimeout(function () { document.getElementById(userChoice).classList.remove('draw') }, 400);
}

function game(userChoice) {
    const compChoice = getCompChoice();
    switch (userChoice + compChoice) {
        case "fg":
        case "wf":
        case "gw":
        win(userChoice, compChoice);
            break;
        case "fw":
        case "wg":
        case "gf":
        lose(userChoice, compChoice);
            break;
        case "ff":
        case "ww":
        case "gg":
        draw(userChoice, compChoice);
            break;
    }
}

function main() {
    fire.addEventListener('click', function() {
      game("f");
    })

    water.addEventListener('click', function () {
      game("w");
    })

    grass.addEventListener('click', function () {
      game("g");
    })
}

main();