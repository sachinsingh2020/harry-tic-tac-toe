console.log("Welcome to Tic Tac Toe")
let lock=0;
let music = new Audio('./music/music.mp3');
music.play();
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
    let wins
    if (!x.matches) {
        wins = [
            [0, 1, 2, 22, 4, 4.8, 0],
            [3, 4, 5, 22, 4, 14.8, 0],
            [6, 7, 8, 22, 4, 25, 0],
            [0, 3, 6, 22, -6, 14.8, 90],
            [1, 4, 7, 22, 4, 14.8, 90],
            [2, 5, 8, 22, 14, 14.5, 90],
            [0, 4, 8, 28, 0, 14, 45],
            [2, 4, 6, 28, 2, 14, -45],
        ]
    }
    else {
        wins = [
            [0, 1, 2, 56, 9.4, 12, 0],
            [3, 4, 5, 56, 9.4, 36.8, 0],
            [6, 7, 8, 56, 9.4, 62, 0],
            [0, 3, 6, 56, -15.8, 37, 90],
            [1, 4, 7, 56, 9.4, 36, 90],
            [2, 5, 8, 56, 34.6, 36, 90],
            [0, 4, 8, 74, 1.3, 38, 45],
            [2, 4, 6, 74, -1, 38, -45],
        ]
    }

    wins.forEach(e => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")) {
            document.querySelector(".info").innerText = boxtext[e[0]].innerText + " Won";
            isgameover = true;
            document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = '200px';
            document.querySelector('.line').style.width = `${e[3]}vw`;
            document.querySelector('.line').style.transform = `translate(${e[4]}vw, ${e[5]}vw) rotate(${e[6]}deg)`;
            lock =1;
        }
    })
}
// GAME LOGIC 
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element) => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if (boxtext.innerText === '' && lock==0) {
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
    lock=0;


})
function myFunction(x) {
    if (x.matches) { // If media query matches
        document.body.style.backgroundColor = "yellow";
    } else {
        document.body.style.backgroundColor = "pink";

    }
}
let x = window.matchMedia("(max-width:560px)")
myFunction(x);
x.addListener(myFunction);