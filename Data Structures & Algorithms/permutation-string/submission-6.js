class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        let s1Map = {};
        let s1CharsCount = 0;

        s1.split('').forEach((elem, ind) => {
            if(!s1Map[elem]) {
                s1CharsCount++;
            }
            s1Map[elem] = (s1Map[elem] || 0) + 1;
        })

        let leftPointer = 0;
        let rightPointer = 0;
        let windowMap = {};
        let windowMatchCount = 0;

        while(rightPointer < s2.length) {
            let addedChar = s2[rightPointer];
            windowMap[addedChar] = (windowMap[addedChar] || 0) + 1;

            if (s1Map[addedChar]) {
                if (s1Map[addedChar] === windowMap[addedChar]) {
                    windowMatchCount++;
                } else if (windowMap[addedChar] === s1Map[addedChar] + 1) {
                    windowMatchCount--;
                }
            }

            if (rightPointer - leftPointer + 1 > s1.length) {
                let removedChar = s2[leftPointer];
                windowMap[removedChar] = (windowMap[removedChar] || 0) - 1;

                if (s1Map[removedChar]) {
                    if (s1Map[removedChar] === windowMap[removedChar]) {
                        windowMatchCount++;
                    } else if (windowMap[removedChar] === s1Map[removedChar] - 1) {
                        windowMatchCount--;
                    }
                }
                
                leftPointer++;
            }

            if (windowMatchCount === s1CharsCount) {
                return true;
            }

            rightPointer++;
        }

        return false;
    }
}
