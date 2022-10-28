console.log("Welcome to Tic Tac Toe")

let music = new Audio('./music/music.mp3');
let ting = new Audio('./music/ting.mp3');
let gameover = new Audio('./music/gameover.mp3');

let turn = "X";

// FUNCTION TO CHANGE THE TURN 
const changeTurn = () =>{
    return turn = "X"?"0":"X";
}

// FUNCTION TO CHECK FOR A WIN 
const checkWin = () =>{

}

// GAME LOGIC 
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext= element.querySelector('.boxtext');
})