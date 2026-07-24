class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let l = 0;
        let r = matrix[0].length - 1;
        let mm = 0;

        let a = 0;
        let b = matrix.length - 1;
        let m = 0;

        while (a <= b) {
            m = Math.floor((a + b) / 2);
            if(target < matrix[m][0]) {
                b = m - 1;
            } else if (target > matrix[m][0]){
                a = m + 1;
            } else {
                return true;
            }
        }

        // After the loop, b is the index of the row that might contain target
        if (b < 0) return false;
        let row = b;

        while (l <= r) {
            mm = Math.floor((l + r) / 2);
            if(target < matrix[row][mm]) {
                r = mm - 1;
            } else if (target > matrix[row][mm]){
                l = mm + 1;
            } else {
                return true;
            }
        }

        return false
    }
}
