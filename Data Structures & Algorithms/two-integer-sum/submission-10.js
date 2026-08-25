class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const hash = {};

        for (let i = 0; i < nums.length; i++) {
            if (Object.hasOwn(hash, target-nums[i])) {
                return [
                    hash[target-nums[i]],
                    i,
                ]
            }
            hash[nums[i]] = i;
        }
    }
}
