class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const hashMap = {};

        for (let i = 0; i < nums.length; i++) {
            if (hashMap[nums[i]]) {
                return true;
            }
            hashMap[nums[i]] = true;
        }

        return false;
    }
}
