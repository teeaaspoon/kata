var whiteQueen = [0, 0];
var blackQueen = [7, 5];

function generateBoard(whiteQueen, blackQueen) {
    //check to make sure whiteQueen and blackQueen are arrays
    if (whiteQueen.constructor != Array || blackQueen.constructor != Array) {
        console.log("Please enter an array with 2 integers");
        return;
    }
    //check if the array only has 2 values
    if (whiteQueen.length > 2 || blackQueen.length > 2) {
        console.log("Please enter only 2 values in the array");
        return;
    }
    //check if the array values are integers
    if (whiteQueen.some(isNaN) || blackQueen.some(isNaN)) {
        console.log("Please only enter integers");
        return;
    }
    //check if the 2 values entered are less than 8
    for (var index = 0; index < 2; index++) {
        if (whiteQueen[index] > 8 || blackQueen[index] > 8) {
            console.log("Please enter values less than 8");
            return;
        }
    }
    //generate an array with 8 arrays inside that only have 8 values
    var generatedBoard = [];
    for (var i = 0; i < 8; i++) {
        generatedBoard.push([0, 0, 0, 0, 0, 0, 0, 0]);
    }
    //set the white queen coordinates
    for (var i = 0; i < 8; i++) {
        if (whiteQueen[0] === i) {
            var j = whiteQueen[1];
            generatedBoard[i][j] = 1;
        }
    }
    //set the black queen coordinates
    for (var i = 0; i < 8; i++) {
        if (blackQueen[0] === i) {
            var j = blackQueen[1];
            generatedBoard[i][j] = 1;
        }
    }
    return generatedBoard;
}

function queenThreat(board) {
    //check if board is an array
    if (board.constructor != Array) {
        console.log("Please input a valid board");
        return;
    }
    //check if this board has 8 values that are also arrays
    if (board.length < 8) {
        console.log("Please input a valid board");
        return;
    }
    for (var i = 0; i < board.length; i++) {
        if (board[i].constructor != Array) {
            console.log("Please input a valid board");
            return;
        }
        //check if each array inside board has 8 values as well
        if (board[i].length < 8) {
            console.log("Please input a valid board");
            return;
        }
    }
    //find the 2 queen's locations
    var queenPositions = [];
    for (var i = 0; i < board.length; i++) {
        for (var j = 0; j < board[i].length; j++) {
            if (board[i][j] === 1) {
                queenPositions.push(i, j);
            }
        }
    }
    var firstQueenPosition = [queenPositions[0], queenPositions[1]];
    var secondQueenPosition = [queenPositions[2], queenPositions[3]];
    //check for threat in the same row (values in the same row are equal)
    if (firstQueenPosition[1] === secondQueenPosition[1]) {
        console.log(
            "Queen Threat in same row. Row: " + (firstQueenPosition[1] + 1)
        );
        return true;
    }
    //check for threat in the same column
    if (firstQueenPosition[0] === secondQueenPosition[0]) {
        console.log(
            "Queen Threat in same row. Row: " + (firstQueenPosition[0] + 1)
        );
        return true;
    }
    //check for threat in diagonal

    //check every position to the right diagonal of the first queen
    var rightDiagIndex = firstQueenPosition[1] + 1;
    var leftDiagIndex = firstQueenPosition[1] - 1;
    for (var i = firstQueenPosition[0] + 1; i < board.length; i++) {
        if (board[i][rightDiagIndex] === 1) {
            console.log("Queen threat in right diagonal");
            return true;
        }
        //check every position to the left diagonal of first queen
        if (board[i][leftDiagIndex] === 1) {
            console.log("Queen threat in left diagonal");
            return true;
        }
        rightDiagIndex += 1;
        leftDiagIndex -= 1;
    }

    // return false if no threat
    return false;
}

var board = generateBoard(whiteQueen, blackQueen);
//console.log(board);
console.log(
    queenThreat([
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 0, 0, 1, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0]
    ])
);
