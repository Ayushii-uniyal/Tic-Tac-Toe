//storing all grid buttons inside a array
let boxes = document.querySelectorAll(".main > button");

//stroing player for player's turn
let player = "X";

//buttons
let reset = document.querySelector(".reset");
let newGame = document.querySelector(".new");
let ok = document.querySelector(".ok");

//winning msg
let winOutput = document.querySelector(".output");

//input player1 and player2
let player1 = document.querySelector(".p21");
let player2 = document.querySelector(".p22");

//variables
let X, O;
let c = 0;

//clear all the grid
const clearGame = () => {
    boxes.forEach(box => {
        box.innerText = "";
        box.disabled = false;
    });
}

const resetGame = () => {
    player = "X";
    c = 0;
    clearGame();
    winOutput.innerText = "";
}

//each time box is clicked it will get executed
boxes.forEach(box => {
    box.addEventListener("click", () =>{
        c++;
        if(player === "X"){
            box.style.color = "rgb(44, 110, 73)";
            box.innerText = "X";
            player = "O";
        }
        else{
            box.style.color = "red";
            box.innerText = "O";
            player = "X";
        }
        box.disabled = "true";

        winner();
    })    
});


//deciding who is winner
let winArr = [[0, 1, 2], [0, 3, 6], [0, 4, 8], [1, 4, 7], [2, 5, 8], [3, 4, 5], [6, 7, 8], [2, 4, 6]];
const winner = () =>{
    let winPlayer;
    let f = 0;
    winArr.forEach(pat => {
        let b1 = boxes[pat[0]].innerText;
        let b2 = boxes[pat[1]].innerText;
        let b3 = boxes[pat[2]].innerText;

        if(b1 != "" && b2 != "" && b3 != ""){
            if(b1 === b2 && b2 === b3){
                if(b1 === 'X'){
                    winPlayer = X != undefined? X : "X";
                    winOutput.style.color = "rgb(44, 110, 73)";
                }
                else{
                    winPlayer = O != undefined? O : "O";
                    winOutput.style.color = "red";
                }
                console.log(winPlayer);
                winOutput.innerText = `Congratulations! ${winPlayer} is winner :)`;
                f = 1;
            }
        }
    })
    console.log(f);
    if(f === 1){
        boxes.forEach(box => {
            box.disabled = true;
        })
    }
    /*else{
        boxes.forEach(box => {
            if(box.innerText == ""){
                f = 1;
            }
        });
    }*/
    else if(c == 9){
        winOutput.innerText = "Game draws :(";
        winOutput.style.color = "darkorange";
    }
}


// actions performed by buttons reset game, new game and ok
reset.addEventListener("click", () => {
    resetGame();
});

newGame.addEventListener("click", () => {
    resetGame();
    player1.value = "";
    player2.value = "";  
    X = "X";
    O = "O";  
});

ok.addEventListener("click", () => {
    X = player1.value != undefined? player1.value : "X";
    O = player2.value != undefined? player2.value : "O";

});

