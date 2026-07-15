class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const pref = [];
        const suff = [];
        const result = [];

        pref[0] = 1;
        suff[nums.length - 1] = 1;

        for (let i = 1; i < nums.length; i++) {
            pref[i] = pref[i - 1] * nums[i - 1];
        } 

        for (let j = nums.length - 2; j >= 0; j--) {
            suff[j] = suff[j + 1] * nums[j + 1];
        } 

        for (let k = 0; k < nums.length; k++) {
            result[k] = pref[k] * suff[k];
        }  

        return result;
    }
}
