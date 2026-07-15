class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        const targetPair = [];
        let leftPointer = 0;
        let rightPointer = numbers.length - 1;

        while (leftPointer < rightPointer && leftPointer !== rightPointer) {
            const sum = numbers[leftPointer] + numbers[rightPointer];
            if (sum === target) {
                return [
                    leftPointer + 1,
                    rightPointer + 1
                ]
            }

            if (sum > target) {
                rightPointer--;
            } else {
                leftPointer++;
            }
        }
    }
}
