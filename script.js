let boxes = document.querySelectorAll(".box");
let accouncer = document.querySelector(".WinnerAnnounce");
let winnerName = document.querySelector("#winnerName");
let newGame = document.querySelector(".new-game");
let resetGame = document.querySelector(".reset");
let resetCnt = document.querySelector(".resetCnt");
let scoreO = document.querySelector(".score-O")
let scoreX = document.querySelector(".score-X")
let = player1 = document.querySelector(".player-1");
let = player2 = document.querySelector(".player-2");


let cntO = 0;
let cntX = 0;
let changeX = true;

let reCnt = () => {
    cntO = 0;
    cntX = 0;
    scoreO.innerText = `${cntO}`;
    scoreX.innerText = `${cntX}`;
}

let restart = () => {
    changeX = false;
    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
    });
    accouncer.classList.add("hide");
};

const winPettern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];



boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box clicked");
        if (changeX) {
            box.innerText = "X";
            box.style.color = "blue";
            player1.style.animationName = "";
            player2.style.animationName = "playerAnimation";
            changeX = false;

        } else {
            box.innerText = "O";
            box.style.color = "#ff00d7";
            player1.style.animationName = "playerAnimation";
            player2.style.animationName = "";
            changeX = true;

        }
        box.disabled = true;
        checkForWinner();
    });
});

const showWinner = (e) => {
    winnerName.innerText = `${e}`;
    accouncer.classList.remove("hide");
}

let cntXY = (c) => {
    if (c == "X") {
        cntX++;
        scoreX.innerText = `${cntX}`;
    } else if (c == "O") {
        cntO++;
        scoreO.innerText = `${cntO}`;
    }
}

const checkForWinner = () => {
    for (pattern of winPettern) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != "" && pos3Val != "") {
            if (pos1Val == pos2Val && pos2Val == pos3Val) {
                console.log("Winner");
                showWinner(pos1Val);
                cntXY(pos1Val);
            }
        }
    }
};

newGame.addEventListener("click", restart);
resetGame.addEventListener("click", restart);
resetCnt.addEventListener("click", reCnt);

