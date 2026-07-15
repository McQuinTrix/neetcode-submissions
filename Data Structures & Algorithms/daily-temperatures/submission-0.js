class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temps) {
        // Monotonic Descreasing Order Stack
        const mStack = [];
        const result = new Array(temps.length).fill(0);

        for(let i = 0; i < temps.length; i++) {

            while(mStack.length && mStack[mStack.length - 1].value < temps[i]) {
                const poppedVal = mStack.pop();
                result[poppedVal.index] = i - poppedVal.index;
            }

            mStack.push({
                index: i,
                value: temps[i],
            })
        }

        return result;
    }
}
