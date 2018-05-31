let board = {
    0: ['-', '-', '-'],
    1: ['-', '-', '-'],
    2: ['-', '-', '-']
}

makeBoard = () => {
    console.log(`${board[0]}, ${board[1]}, ${board[2]}`)
};

let xTurn = (x, y) => {
    if (board[x][y] === '-') {
        board[x][y] = 'X';
        console.log(`${board[0]}\n${board[1]}\n${board[2]}`);
        if (handleWinner()) {
            console.log('X is the winner');
        } else {
            console.log('It\'s player O\'s turn');
        }
    } else {
        console.log('Spot Occupied Already');
    }
};

let oTurn = (x, y) => {
    if (board[x][y] === '-') {
        board[x][y] = 'O';
        console.log(`${board[0]}\n${board[1]}\n${board[2]}`);
        if (handleWinner()) {
            console.log('O is the winner');
        } else {
            console.log('It\'s player X\'s turn');
        }
    } else {
        console.log('Spot Occupied Already');
    }
}

let handleWinner = () => {
    for (let i = 0; i < 3; i++) {
        let one = board[i][0];
        let two = board[i][1];
        let three = board[i][2];
        if (one === "X" && one === two && one === three) {
            return true;
        }
        if (one === "O" && one === two && one === three) {
            return true;
        }
    }
    return false;
};