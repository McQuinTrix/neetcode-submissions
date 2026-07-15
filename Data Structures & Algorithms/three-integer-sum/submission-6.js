class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const sortedNums = nums.sort((a, b) => a - b);;
        const result = [];

        for (let i = 0; i < sortedNums.length; i++) {
            if (sortedNums[i] > 0) break;
            if (i > 0 && sortedNums[i-1] === sortedNums[i]){
                continue;
            }
            let startIndex = i+1;
            let endIndex = sortedNums.length - 1;

            while (startIndex < endIndex) {
                const sum = sortedNums[i] + sortedNums[startIndex] + sortedNums[endIndex];
                if (sum > 0) {
                    endIndex--;
                } 
                if (sum < 0) {
                    startIndex++;
                }
                if (sum === 0) {
                    result.push([sortedNums[i], sortedNums[startIndex], sortedNums[endIndex]]);
                    startIndex++;
                    endIndex--;
                    while (startIndex < endIndex && sortedNums[startIndex] === sortedNums[startIndex-1]){
                        startIndex++;
                    }
                } 
            }
        }

        return result;
    }
}
