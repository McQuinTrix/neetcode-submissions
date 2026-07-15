class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        for (let i = 0; i < board.length; i++) {
            const hash = {};
            for (let j = 0; j < board[i].length; j++) {
                const val = board[i][j];
                if (hash[val]) {
                    console.log('yoo', hash);
                    return false
                }
                if (val !== '.'){
                    hash[val] = true;
                }
            }
        }

        for (let k = 0; k < board.length; k++) {
            const hash = {};
            for (let m = 0; m < board.length; m++) {
                const val = board[m][k];
                if (hash[val]) {
                    console.log('yoo2');
                    return false;
                } 

                if (val !== '.'){
                    hash[val] = true;
                }
            }
        }

        for (let square = 0; square < 9; square++) {
            const hash = {};

            for (let x = 0; x < 3; x++) {
                for (let y = 0; y < 3; y++) {
                    const boardX = Math.floor(square/3) * 3 + x;
                    const boardY = (square % 3) * 3 + y;

                    const val = board[boardX][boardY];


                    if (hash[val]) {
                        return false;
                    } 
                    if (val !== '.'){
                        hash[val] = true;
                    }
                }
            }
        }
        return true;
    }
}
