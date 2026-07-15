class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let leftPointer = 0;
        let rightPointer = nums.length - 1;

        while (leftPointer <= rightPointer) {
            let middlePoint = leftPointer + Math.floor((rightPointer-leftPointer)/2);

            if (nums[middlePoint] < target) {
                leftPointer = middlePoint + 1;
            } else if (nums[middlePoint] > target) {
                rightPointer = middlePoint - 1;
            } else {
                return middlePoint;
            }
        }

        return -1;
    }
}
