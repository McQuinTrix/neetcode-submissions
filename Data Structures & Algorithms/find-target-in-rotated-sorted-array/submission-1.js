class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    // 4 5 6 7(m) 8 1 2 3
    // 7 8 1 2(m) 3 4 5 6
    search(nums, target) {
        let l = 0;
        let r = nums.length - 1;

        while (l <= r) {
            let m = l + Math.floor((r - l)/2);

            if (nums[m] === target) {
                return m;
            }

            if (nums[m] >= nums[l]) {
                if (target >= nums[l] && target < nums[m]) {
                    r = m - 1;
                } else {
                    l = m + 1;
                }
            } else {
                if (target <= nums[r] && target > nums[m]) {
                    l = m + 1;
                } else {
                    r = m - 1;
                }
            }
        }

        return -1;
    }
}
