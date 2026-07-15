class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const pref = new Array(nums.length);
        const suff = new Array(nums.length);
        const result = new Array(nums.length);

        pref[0] = 1;
        suff[nums.length - 1] = 1;

        for (let i = 1; i < nums.length; i++) {
            pref[i] = nums[i - 1] * pref[i - 1];
        }

        for (let j = nums.length - 2; j >= 0; j--) {
            suff[j] = nums[j + 1] * suff[j + 1];
        }

        for (let x = 0; x < nums.length; x++) {
            result[x] = pref[x] * suff[x];
        }

        return result;
    }
}
