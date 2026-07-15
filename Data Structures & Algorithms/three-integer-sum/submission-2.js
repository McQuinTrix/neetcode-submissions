class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a, b) => a - b);
        const res = [];

        for (let i = 0; i < nums.length; i++) {
            if (i > 0 && nums[i] === nums[i - 1]) continue;

            let leftPointer = i + 1;
            let rightPointer = nums.length - 1;

            while (leftPointer < rightPointer) {
                const sum = nums[i] 
                            + nums[leftPointer] 
                            + nums[rightPointer]
                
                if ( sum > 0 ) {
                    rightPointer--;
                } else if ( sum < 0) {
                    leftPointer++;
                } else {
                    res.push([
                        nums[i],
                        nums[leftPointer], 
                        nums[rightPointer]
                    ])
                    leftPointer++;
                    rightPointer--;

                    while (
                        leftPointer < rightPointer
                        && nums[leftPointer] === nums[leftPointer - 1]
                    ) {
                        leftPointer++;
                    }
                }
            }
        }

        return res;
    }
}
