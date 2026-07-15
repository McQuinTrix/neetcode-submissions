class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const sortedNums = nums.sort((a, b) => a - b);
        const res = [];

        for (let i = 0; i < sortedNums.length; i++) {
            
            if (
                i > 0 
                && sortedNums[i] === sortedNums[i - 1]
            ) {
                continue;
            }

            let leftPointer = i + 1;
            let rightPointer = sortedNums.length - 1;

            while (leftPointer < rightPointer) {
                const sum = sortedNums[i] 
                    + sortedNums[leftPointer]
                    + sortedNums[rightPointer];

                if (sum > 0) {
                    rightPointer--;
                } else if (sum < 0) {
                    leftPointer++;
                } else {
                    res.push([
                        sortedNums[i],
                        sortedNums[leftPointer],
                        sortedNums[rightPointer]
                    ])
                    leftPointer++;
                    rightPointer--;
                    while (
                        leftPointer < rightPointer 
                        && sortedNums[leftPointer] === sortedNums[leftPointer - 1]
                    ) {
                        leftPointer++;
                    }
                }
            }
        }

        return res;
    }
}
