
//clickSquare function

var playerOneTurn = true;
var playerTwoTurn = false;
var playerOneMarker = "X";
var playerTwoMarker = "O";

function markSquare(selectedCell) {
    //mark square with 'X' or 'O'
    if (selectedCell.innerHTML == "") {
        if (playerOneTurn) {
            selectedCell.innerHTML = playerOneMarker;
        }
        else {
            selectedCell.innerHTML = playerTwoMarker
        }
    } 
}

function changePlayer() {
    playerOneTurn = !playerOneTurn;
    playerTwoTurn = !playerTwoTurn;
}            

function winnerDetection() {

}

//square.addEventListener('click', squareSelect, false);
$('td').click(function(e) {
    //below gets index of td clicked
    var cell = $(this).closest('td');
    var cellIndex = cell[0].cellIndex
    var row = cell.closest('tr');
    var rowIndex = row[0].rowIndex;

    console.log(cellIndex);
    console.log(rowIndex);
    var selectedCell = document.getElementById('board').rows[rowIndex].cells[cellIndex];
    markSquare(selectedCell);
    var testCellSelection = document.getElementById('board').rows[1].cells[2];
    testCellSelection.innerHTML = "yes";
    //winnerDetection();
    //changePlayer();
});

const winningCombos = [];
