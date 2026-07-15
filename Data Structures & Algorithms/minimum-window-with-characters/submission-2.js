class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(sourceString, targetString) {
        if (targetString.length > sourceString.length) {
            return '';
        }

        const targetHashMap = {};
        for (let a = 0; a < targetString.length; a++) {
            targetHashMap[targetString[a]] = (targetHashMap[targetString[a]] || 0) + 1;
        }
        const targetCharCount = Object.keys(targetHashMap).length;

        const windowHashMap = {};
        let windowTargetCharCount = 0;
        let startPoint = 0;
        let minLength = Infinity;
        let minStartPoint = 0;

        for (let endPoint = 0; endPoint < sourceString.length; endPoint++) {
            const addChar = sourceString[endPoint];
            windowHashMap[addChar] = (windowHashMap[addChar] || 0) + 1;

            if (targetHashMap[addChar] !== undefined 
                && targetHashMap[addChar] === windowHashMap[addChar]) {
                    windowTargetCharCount++;
            }

            while(windowTargetCharCount === targetCharCount) {
                const currentLen = (endPoint + 1) - startPoint;
                if (minLength > currentLen) {
                    minLength = currentLen;
                    minStartPoint = startPoint;
                }

                const toRemoveChar = sourceString[startPoint];
                windowHashMap[toRemoveChar]--;

                if (targetHashMap[toRemoveChar] !== undefined 
                    && targetHashMap[toRemoveChar] > windowHashMap[toRemoveChar]) {
                        windowTargetCharCount--;
                }

                startPoint++;
            }
        }

        if (minLength === Infinity) {
            return '';
        }

        return sourceString.substr(minStartPoint, (minLength))
    }
}
