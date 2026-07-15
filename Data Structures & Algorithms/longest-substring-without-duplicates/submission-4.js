class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let result = 0;
        let currentIndex = 0;
        let trackArray = new Set();

        while (currentIndex < s.length) {
            while(trackArray.has(s[currentIndex])) {
                let firstValue = trackArray.values().next().value;
                trackArray.delete(firstValue);
            }
            trackArray.add(s[currentIndex]);
            result = Math.max(trackArray.size, result);
            currentIndex++;
        }

        return result;
    }
}
