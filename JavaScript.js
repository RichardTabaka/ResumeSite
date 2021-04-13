var board = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0]
]


function createPuzzle() {
    let x = 0
    var inputPuzzle = document.getElementById("puzzle").value;
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            board[i][j] = inputPuzzle[x];
            x++;
        }
    }

    

}

function createPuzzle81() {
    var tbl = document.getElementById("PuzzleInput");
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (tbl.rows[i].cells[j].children[0].value != "") {
                board[i][j] = tbl.rows[i].cells[j].children[0].value;
            }
        }
    }

    solve(board);
    printBoard(board);

}

function isValid(board, row, col, num) {
    for (let i = 0; i < 9; i++) {
        let m = 3 * Math.floor(row / 3) + Math.floor(i / 3);
        let n = 3 * Math.floor(col / 3) + i % 3;
        if (board[row][i] == num || board[i][col] == num || board[m][n] == num) {
            return false;
        }
    }
    return true;
}


function solve(board) {
    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            if (board[row][col] == 0) {
                for (let num = 1; num <= 9; num++) {
                    if (isValid(board, row, col, num)) {
                        board[row][col] = num;
                        if (solve(board)) {
                            return true;
                        } else {
                            board[row][col] = 0;
                        }
                    }
                }
                return false;
            }
        }
    }
    return true;
}

function printBoard(bo) {
    let boardString = "";
    for (let i = 0; i < 9; i++) {
        if (i % 3 == 0 && i != 0) {
            boardString += ("----------------\n");
        }
        for (let j = 0; j < 9; j++) {
            if (j % 3 == 0 && j != 0) {
                boardString += (" | ");
            }
            if (j == 8) {
                boardString += (String(bo[i][j]));
            }
            else {
                boardString += (String(bo[i][j], " "));
            }
        }
        boardString += ("\n");
    }

    alert(boardString);
}