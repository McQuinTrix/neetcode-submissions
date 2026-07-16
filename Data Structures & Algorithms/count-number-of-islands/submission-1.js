class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        if (!grid) return 0;
        let numOfIslands = 0;
        let confirmedIsland = [];

        for (let i = 0; i < grid.length; i++) {

            for (let j = 0; j < grid[i].length; j++) {
                console.log(grid[i][j] === '1', i, j, !confirmedIsland.includes(`${i},${j}`), confirmedIsland )
                if (grid[i][j] === '1' && !confirmedIsland.includes(`${i},${j}`)) {
                    numOfIslands++;

                    const neighborsToVerify = [[i,j]];
                    while (neighborsToVerify.length > 0) {
                        console.log('Neigh:', neighborsToVerify);
                        const [num1, num2] = neighborsToVerify.shift();

                        if (grid[num1][num2] === '1' && !confirmedIsland.includes(`${num1},${num2}`)) {
                            confirmedIsland.push(`${num1},${num2}`);

                            if (num1 - 1 >= 0) {
                                neighborsToVerify.push([num1 - 1, num2]);
                            }
                            if (num2 - 1 >= 0) {
                                neighborsToVerify.push([num1, num2 - 1]);
                            }
                            if (num1 + 1 < grid.length) {
                                neighborsToVerify.push([num1 + 1, num2]);
                            }
                            if (num2 + 1 < grid[i].length) {
                                neighborsToVerify.push([num1, num2 + 1]);
                            }
                        }
                    }
                }

            }
        }

        return numOfIslands;
    }
}
