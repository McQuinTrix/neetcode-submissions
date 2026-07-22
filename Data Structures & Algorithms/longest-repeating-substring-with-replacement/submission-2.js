class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let l = 0;
        let result = 0;
        let windowMap = {};

        for (let r = 0; r < s.length; r++) {
            let currLen = r - l + 1;
            windowMap[s[r]] = (windowMap[s[r]] || 0) + 1;

            let maxVal = Math.max(...Object.values(windowMap));

            while (currLen - maxVal > k) {
                windowMap[s[l]]--;
                l++;
                currLen = r - l +1;
                maxVal = Math.max(...Object.values(windowMap));
            }
            result = Math.max(currLen, result);
        }

        return result;
    }
}
