class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const sortedArray = nums.map((item, index) => {
            return [item, index];
        }).sort((itemA, itemB) => itemA[0] - itemB[0]);

        let leftPoint = 0;
        let rightPoint = nums.length - 1;

        while (leftPoint < rightPoint) {
            const sum = sortedArray[leftPoint][0] + sortedArray[rightPoint][0];
            if (sum === target) {
                return [
                    Math.max(sortedArray[leftPoint][1], sortedArray[rightPoint][1]),
                    Math.min(sortedArray[leftPoint][1], sortedArray[rightPoint][1])
                ]
            } else if(sum > target) {
                rightPoint--;
            } else {
                leftPoint++;
            }
        }

        return [];
    }
}
