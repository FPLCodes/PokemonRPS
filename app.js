let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard = document.querySelector(".scores");
const result = document.querySelector(".text-two");
const fire = document.getElementById("f");
const water = document.getElementById("w");
const grass = document.getElementById("g");

function getCompChoice() {
    const choices = ['f', 'w' ,'g'];
    const randNum = Math.floor(Math.random() * 3)
    return choices[randNum];
}

function win() {
    
}

function lose() {
}

function draw() {
}

function game(userChoice) {
    const compChoice = getCompChoice();
    switch (userChoice + compChoice) {
        case "fg":
        case "wf":
        case "gw":
            win();
            break;
        case "fw":
        case "wg":
        case "gf":
            lose();
            break;
        case "ff":
        case "ww":
        case "gg":
            draw();
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
