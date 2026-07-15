class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let responseStr = '';

        for (let i = 0; i < strs.length; i++) {
            responseStr += strs[i].length + '#' + strs[i];
        }

        return responseStr;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let responseArr = [];
        let remainingStr = str;
        
        while (remainingStr) {
            let activeIndex = 0;
            let currentElem;

            while (currentElem !== '#') {
                currentElem = remainingStr[activeIndex];
                activeIndex++;
            }

            let strLen = parseInt(remainingStr.substring(0, activeIndex));
            const resp = remainingStr.substring(activeIndex, activeIndex + strLen);
            responseArr.push(resp);
            remainingStr = remainingStr.substring(activeIndex + resp.length);
        }

        return responseArr;
    }
}
