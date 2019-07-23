
//clickSquare function

var playerOneTurn = true;
var playerTwoTurn = false;
var playerOneMarker = "X";
var playerTwoMarker = "O";
var tableStatus = [];
var playerStatus = document.getElementById("playerTurn");

var winningCombos = [
    //winning rows
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    //winning columns
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    //winning diagonals
    [0, 4, 8],
    [2, 4, 6]
]

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
    if (playerOneTurn) {
        playerStatus.innerHTML = "Player 1";
    } else {
        playerStatus.innerHTML = "Player 2";
    }
}            

function winnerDetection() {
    var x = document.getElementById("board").rows[0].cells.length;
    var gameTable = document.getElementById("board");
    tableStatus = [];

    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            
            tableStatus.push(document.getElementById("board").rows[i].cells[j].innerHTML);
            //console.log(document.getElementById("board").rows[i].cells[j].innerHTML);
        }
    }
}

//square.addEventListener('click', squareSelect, false);
$('td').click(function(e) {
    //below gets index of td clicked
    var cell = $(this).closest('td');
    var cellIndex = cell[0].cellIndex
    var row = cell.closest('tr');
    var rowIndex = row[0].rowIndex;

    var selectedCell = document.getElementById('board').rows[rowIndex].cells[cellIndex];

    //check if square already marked
    if (selectedCell.innerHTML == "") {
        markSquare(selectedCell);
        changePlayer();
        winnerDetection();
    }
});

