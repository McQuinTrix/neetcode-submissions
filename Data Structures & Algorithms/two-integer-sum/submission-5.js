class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const hashMap = {};

        for (let i = 0; i < nums.length; i++) {
            const leftOver = target - nums[i];
            if (hashMap.hasOwnProperty(leftOver)) {
                return [
                    hashMap[leftOver],
                    i
                ]
            }
            hashMap[nums[i]] = i;
        }
    }
}
