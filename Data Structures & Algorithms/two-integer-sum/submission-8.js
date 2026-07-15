class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {        
        const newArr = nums.map((val, index) => [val, index]).sort((i, j) => {
            return i[0] > j[0] ? 1 : -1;
        });

        let firstIndex = 0;
        let lastIndex = newArr.length - 1;

        while (firstIndex < lastIndex) {
            const sum = newArr[firstIndex][0] + newArr[lastIndex][0];
            if (sum === target) {
                break;
            }

            if (target > sum) {
                firstIndex++;
            } else {
                lastIndex--;
            }

        }

        return [newArr[firstIndex][1], newArr[lastIndex][1]].sort();
    }
}
