class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let maxWaterStorage = 0;
        let currentStartIndex = 0;
        let currentEndIndex = heights.length - 1;

        while(currentStartIndex < currentEndIndex) {
            let currentHeight = Math.min(heights[currentStartIndex], heights[currentEndIndex]);
            let currentStorage = currentHeight * (currentEndIndex - currentStartIndex);

            if (currentStorage > maxWaterStorage) {
                maxWaterStorage = currentStorage;
            }

            if (heights[currentStartIndex] > heights[currentEndIndex]) {
                currentEndIndex--;
            } else {
                currentStartIndex++;
            }
        }

        return maxWaterStorage;
    }
}
