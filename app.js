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
$('td').click(function(e) {
    //below gets index of td clicked
    var cell = $(this).closest('td');
    var cellIndex = cell[0].cellIndex
    var row = cell.closest('tr');
    var rowIndex = row[0].rowIndex;
    var selectedCell = document.getElementById('board').rows[rowIndex].cells[cellIndex];
    selectedCell.innerHTML = 'X';
 });


