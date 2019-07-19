//clickSquare function

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

//square.addEventListener('click', squareSelect, false);
var table = document.getElementById("board");
table.addEventListener("click", tableClick);

function tableClick(event) {
    var element = event.target;
    //var y = element.cellIndex;
    //var x = element.parent.rowIndex;
   // alert(element, x, y);
    
}


