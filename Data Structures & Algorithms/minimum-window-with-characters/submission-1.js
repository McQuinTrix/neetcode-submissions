class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if (t.length > s.length) {
            return '';
        }

        const targetHashMap = {};
        for (let i = 0; i < t.length; i++) {
            targetHashMap[t[i]] = (targetHashMap[t[i]] || 0) + 1;
        }
        const numOfRequiredCharsInTarget = Object.keys(targetHashMap).length;

        const windowHashMap = {};
        let numberOfSatisfiedCharacters = 0;
        let startPointer = 0;

        let minimumWindowStart = 0;
        let shortestLength = Infinity;

        for (let endPointer = 0; endPointer < s.length; endPointer++) {
            const newChar = s[endPointer];
            windowHashMap[newChar] = (windowHashMap[newChar] || 0) + 1;

            if (targetHashMap[newChar] !== undefined 
                && targetHashMap[newChar] === windowHashMap[newChar]) {
                    numberOfSatisfiedCharacters++;
            }

            while (
                numberOfSatisfiedCharacters ===
                numOfRequiredCharsInTarget
            ) {
                const currentWindowLength = (endPointer +1) - (startPointer);

                if (shortestLength > currentWindowLength) {
                    shortestLength = currentWindowLength;
                    minimumWindowStart = startPointer;
                }

                const characterBeingRemoved = s[startPointer];
                windowHashMap[characterBeingRemoved]--; 

                if (targetHashMap[characterBeingRemoved] !== undefined
                    && windowHashMap[characterBeingRemoved] < targetHashMap[characterBeingRemoved]) {
                        numberOfSatisfiedCharacters--;
                    }

                startPointer++;
            }
        }
        
        if (shortestLength === Infinity) {
            return "";
        }

        return s.substr(minimumWindowStart, shortestLength);
    }
}
