console.log("Welcome to Tic Tac Toe")

let music = new Audio('./music/music.mp3');
let ting = new Audio('./music/ting.mp3');
let gameover = new Audio('./music/gameover.mp3');

let turn = "X";

// FUNCTION TO CHANGE THE TURN 
const changeTurn = () =>{
    if(turn=='X')
    return turn="0";
    else
    return turn="X";
}

// FUNCTION TO CHECK FOR A WIN 
const checkWin = () =>{

}
// GAME LOGIC 
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element) => {
    let boxtext= element.querySelector('.boxtext');
    element.addEventListener('click',()=>{
        if(boxtext.innerText === '')
        {
            boxtext.innerText=turn;
            changeTurn();
            ting.play();
            checkWin();
            document.getElementsByClassName("info")[0].innerText = "Turn for "+turn;
        }
    })
})