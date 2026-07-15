class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    // 5 9 10 1(m) 2 3 4 5
    search(nums, target) {
        let l = 0;
        let r = nums.length - 1;

        while (l <= r) {
            let m = l + Math.floor((r-l)/2);

            if (target === nums[m]) {
                return m;
            }

            if (nums[m] >= nums[l]) {
                if (target >= nums[l] && target < nums[m]) {
                    r = m - 1;
                } else {
                    l = m + 1;
                }
            } else {
                if (target > nums[m] && target <= nums[r]) {
                    l = m + 1;
                } else {
                    r = m -1;
                }
            }
        }

        return -1;
    }
}
