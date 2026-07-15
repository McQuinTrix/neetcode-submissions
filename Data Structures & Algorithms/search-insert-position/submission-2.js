class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    searchInsert(nums, target) {
        let leftPoint = 0;
        let rightPoint = nums.length - 1;
        let middle = 0;

        while (leftPoint <= rightPoint) {
            middle = leftPoint + Math.floor((rightPoint - leftPoint)/2);

            if (nums[middle] < target) {
                leftPoint = middle + 1;
            } else if(nums[middle] > target) {
                rightPoint = middle - 1;
            } else {
                return middle;
            }
        }

        return leftPoint;
    }
}
