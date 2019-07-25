var playerOneTurn = true;
var playerTwoTurn = false;
var playerOneMarker = "X";
var playerTwoMarker = "O";
var tableStatus = [];
var playerStatus = document.getElementById("playerTurn");
var gameOver = false;
var tieGame = false;

//document.location.reload(true);

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
];

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

function updatePlayerTurn() {
    if (playerOneTurn) {
        playerStatus.innerHTML = "Player 1";
    } else {
        playerStatus.innerHTML = "Player 2";
    }
}

function changePlayer() {
    playerOneTurn = !playerOneTurn;
    playerTwoTurn = !playerTwoTurn;
}            

function winnerDetection() {

    //reset array to empty
    tableStatus = [];

    //add all the td values to tableStatus array

    //iterate through rows
    for (var i = 0; i < 3; i++) {
        //iterate through columns
        for (var j = 0; j < 3; j++) {
            tableStatus.push(document.getElementById("board").rows[i].cells[j].innerHTML);
        }
    }

    //iterate through all arrays within collection
    for (var i = 0; i < winningCombos.length; i++) {
        
        //[row][col]
        var tempArray = [];
        for (var j = 0; j < winningCombos[i].length; j++) {
           
            tempArray.push(winningCombos[i][j]);
            //console.log(tempArray); 
        }

        //set player marker to check in cells
        var checkMarker;
        if (playerOneTurn) {
            checkMarker = "X";
        } else {
            checkMarker = "O";
        }
        //check tempArray (a winning combo) to tableStatus array
        var counter = 0;
        for (var k = 0; k < tempArray.length; k++) {
            var cellValue = tableStatus[tempArray[k]]
            //console.log(cellValue);
            if (cellValue == checkMarker) {
                counter++;
            }
        }

        //if winning array combos contains 3 of the same marker
        if (counter == 3) {
            gameOver = true;

            if (playerOneTurn) {
                alert("Player One Wins!!!");
                document.location.reload(true);
            } else {
                alert("Player Two Wins!!!");
                document.location.reload(true);
            }
        }   
    }

    if (!gameOver && stalemate()) {
        alert("Tie Game");
        document.location.reload(true);
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
    }

    winnerDetection();
    changePlayer();
    updatePlayerTurn();
});

function stalemate() {
    for (var i = 0; i < 9; i++) {
        if (tableStatus[i] == "") {
            return false;
        }
    }
    return true;
}

$("#reset").click(function () {
    document.location.reload(true);
});

