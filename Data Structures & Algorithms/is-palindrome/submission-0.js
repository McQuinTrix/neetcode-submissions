class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const pattern = /^[a-zA-Z0-9]$/;
        let leftPointer = 0;
        let rightPointer = s.length - 1;

        while (leftPointer < rightPointer) {
            if (pattern.test(s[leftPointer]) 
                && pattern.test(s[rightPointer])) {
                    if(s[leftPointer].toLowerCase() !== s[rightPointer].toLowerCase()) {
                        return false
                    }

                    leftPointer++;
                    rightPointer--;
            } else if (!pattern.test(s[leftPointer])) {
                leftPointer++;
            } else if (!pattern.test(s[rightPointer])) {
                rightPointer--;
            }
        }

        return true;
    }
}
