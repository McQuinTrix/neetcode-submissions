class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const result = new Array(nums.length);
        let prefix = 1;
        let postfix = 1;

        for (let i = 0; i < nums.length; i++) {
            result[i] = prefix;
            prefix = nums[i] * prefix;
        }

        for (let k = nums.length - 1; k >= 0; k--) {
            result[k] = result[k] * postfix;
            postfix = nums[k] * postfix;
        }

        return result;
    }
}
