class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        if (!grid) return null;

        let freshOranges = 0;
        let rottenOranges = [];
        let totalMins = 0;

        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[i].length; j++) {
                if(grid[i][j] === 1) freshOranges++;
                if(grid[i][j] === 2) {
                    rottenOranges.push([i, j]);
                }
            }   
        }

        const directions = [
            [1, 0],
            [0, 1],
            [-1, 0],
            [0, -1],
        ]

        while (rottenOranges.length > 0 && freshOranges > 0) {
            let rottenCurrSize = rottenOranges.length;
            for (let i = 0; i < rottenCurrSize; i++) {
                const [row, col] = rottenOranges.shift();

                console.log(row, col);

                for (const [x, y] of directions) {
                    const rowX = +row + +x;
                    const rowY = +col + +y;

                    if (rowX >= 0 
                        && rowX < grid.length 
                        && rowY >= 0 
                        && rowY < grid[rowX].length 
                        && grid[rowX][rowY] === 1) {
                            console.log('hello love')
                            grid[rowX][rowY] = 2;
                            rottenOranges.push([rowX, rowY]);
                            freshOranges--;
                        }

                }
            }

            totalMins++;
        }

        console.log(totalMins)

        return freshOranges !== 0 ? -1 : totalMins;
    }
}
