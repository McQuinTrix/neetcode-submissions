class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let maxWaterHold = 0;
        let leftPointer = 0;
        let rightPointer = heights.length - 1;

        while (leftPointer < rightPointer) {
            const breadth = rightPointer - leftPointer;
            const length = Math.min(heights[leftPointer], heights[rightPointer]);

            if (breadth * length > maxWaterHold) {
                maxWaterHold = breadth * length;
            }

            if (heights[leftPointer] <= heights[rightPointer]){
                leftPointer++;
            } else {
                rightPointer--;
            }
        }

        return maxWaterHold;
    }
}
