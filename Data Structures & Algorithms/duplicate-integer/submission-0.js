class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const map = {};
        for(let i = 0; i < nums.length; i++){
            const item = nums[i];
            if (map[item]) {
                return true
            }
            map[item] = true;
        }

        return false;
    }
}
