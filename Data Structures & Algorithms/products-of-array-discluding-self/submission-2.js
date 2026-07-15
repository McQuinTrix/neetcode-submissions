class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let allProduct = 1;
        const result = [];
        let zeroCount = 0;

        for (let i = 0; i < nums.length; i++) {
            if (nums[i] !== 0) {
                allProduct = allProduct * nums[i];
            } else {
                zeroCount++;
            }
        }

        if (zeroCount > 1) {
            return new Array(nums.length).fill(0);
        }

        for (let j = 0; j < nums.length; j++) {
            if (zeroCount === 1) {
                result[j] = nums[j] === 0 ? allProduct : 0;
            } else {
                result[j] = allProduct/nums[j];
            }
            
        }

        return result;
    }
}
