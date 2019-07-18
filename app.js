//clickSquare function

const square = document.querySelector(".square");
var playerOneTurn = true;
var playerTwoTurn = false;

function squareSelect() {
    if (playerOneTurn) {
        //put X in selected square;
        //check if game won
        //switch to player2
    } else {
        //It's player 2's turn
        //put O in selected square
        //check if game won
        //switch to player 1

    }
}

function markSquare() {
    //mark square with 'X' or 'O'
    var sqrValue;
    changePlayer();
}

function changePlayer() {
    playerOneTurn = !playerOneTurn;
    playerTwoTurn = !playerTwoTurn;
}            



square.addEventListener('click', squareSelect, false);
1   `234WEDSXZ`
var someInput = document.querySelector('input');
someInput.addEventListener('click', myFunc, false);
someInput.myParam = 'This is my parameter';
function myFunc(evt) {
    window.alert(evt.target.myParam);
}

