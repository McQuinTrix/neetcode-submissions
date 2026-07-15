class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const ans = [];

        for (let i = 0; i < nums.length; i++) {
            const num1 = nums[i];
            for (let j = i+1; j < nums.length; j++) {
                const num2 = nums[j];
                if (num1 + num2 === target) {
                    return [i, j];
                }
            }
        }
    }
}
