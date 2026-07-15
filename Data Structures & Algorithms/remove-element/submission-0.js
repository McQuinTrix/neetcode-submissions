class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        let k = 0;
        let hit = 0;

        for (let i = 0; i < nums.length; i++) {
            if (nums[i] === val) {
                hit++;
            } else {
                nums[i - hit] = nums[i];
            }
            console.log(nums, hit);
        }

        return nums.length - hit;
    }
}
