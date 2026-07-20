class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        if (prices.length < 2) {
            return 0;
        }

        let res = 0;
        let leftPointer = 0;
        let rightPointer = 1;

        while (rightPointer < prices.length) {
            if (prices[leftPointer] > prices[rightPointer]) {
                leftPointer = rightPointer;
            } else {
                res = Math.max(prices[rightPointer] - prices[leftPointer], res);
            }

            rightPointer++;
        }

        return res;
    }
}
