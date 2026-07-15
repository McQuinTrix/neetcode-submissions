class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        let prevEligibleNum = 1;
        for (let i = 1; i < nums.length; i++) {
            if (nums[i] !== nums[i-1]) {
                nums[prevEligibleNum] = nums[i];
                prevEligibleNum = prevEligibleNum + 1;
            }
        }
        return prevEligibleNum;
    }
}
