class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     * [5, 0, 1, 2, 3, 4];
     * [3, 4, 5, 0, 1, 2];
     */
    findMin(nums) {
        let l = 0;
        let r = nums.length - 1;
        let result = nums[0];

        while(l <= r) {
            if (nums[l] < nums[r]) {
                result = Math.min(result, nums[l]);
            }

            let m = l + Math.floor(((r - l) + 1)/2);
            if (nums[m] < result) {
                result = nums[m];
            }

            if (nums[m] >= nums[l]) {
                l = m + 1;
            } else {
                r = m - 1;
            }
        }

        return result;
    }
}
