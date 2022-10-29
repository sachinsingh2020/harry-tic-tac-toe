console.log("Welcome to Tic Tac Toe")

let music = new Audio('./music/music.mp3');
// music.play();
let ting = new Audio('./music/ting.mp3');
let gameover = new Audio('./music/gameover.mp3');
let isgameover = false;
let turn = "X";

// FUNCTION TO CHANGE THE TURN 
const changeTurn = () => {
    return turn === "X" ? "0" : "X";
}

// FUNCTION TO CHECK FOR A WIN 
const checkWin = () => {
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2,22,4, 4.8, 0],
        [3, 4, 5,22,4,14.8,0],
        [6, 7, 8,22,4,25,0],
        [0, 3, 6,22,-6,14.8,90],
        [1, 4, 7,22,4,14.8,90],
        [2, 5, 8,22,14,14.5,90],
        [0, 4, 8,28,0,14,45],
        [2, 4, 6,28,2,14,-45],
    ]
    wins.forEach(e => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")) {
            document.querySelector(".info").innerText = boxtext[e[0]].innerText + " Won";
            isgameover = true;
            document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = '200px';
            document.querySelector('.line').style.width = `${e[3]}vw`;
            document.querySelector('.line').style.transform = `translate(${e[4]}vw, ${e[5]}vw) rotate(${e[6]}deg)`;
        }
    })
}
// GAME LOGIC 
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element) => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            turn = changeTurn();
            ting.play();
            checkWin();
            if (!isgameover)
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
        }
    })
})

// ADD ONCLICK LISTENER TO RESET BUTTON 
let reset = document.getElementById('reset')
reset.addEventListener('click', () => {
    let boxtexts = document.getElementsByClassName('boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = "";
    });
    turn = 'X';
    isgameover = false;
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = '0px';
    document.querySelector('.line').style.width = `0vw`;


})