// (6. Optional) Implement n-Queen’s Problem
function isSafe(board, row, col, n) {
    for (let i = 0; i < row; i++) {
        if (board[i][col] === 1) {
            return false;
        }
    }

    let i = row - 1;
    let j = col - 1;
    while (i >= 0 && j >= 0) {
        if (board[i][j] === 1) {
            return false;
        }
        i--;
        j--;
    }

    i = row - 1;
    j = col + 1;
    while (i >= 0 && j < n) {
        if (board[i][j] === 1) {
            return false;
        }
        i--;
        j++;
    }

    return true;
}

function solveNQueens(n) {
    const board = new Array(n);
    for (let i = 0; i < n; i++) {
        board[i] = new Array(n).fill(0);
    }

    const solutions = [];
    function solve(row) {
        if (row === n) {
            const solution = [];
            for (let i = 0; i < n; i++) {
                solution.push(board[i].join(' '));
            }
            solutions.push(solution);
            return;
        }

        for (let col = 0; col < n; col++) {
            if (isSafe(board, row, col, n)) {
                board[row][col] = 1;
                solve(row + 1);
                board[row][col] = 0;
            }
        }
    }

    solve(0);

    return solutions;
}

const n = 4;
const solutions = solveNQueens(n);

console.log(`Solutions for ${n}-Queen's Problem:`);
for (const solution of solutions) {
    console.log(solution.join('\n'));
    console.log();
}  