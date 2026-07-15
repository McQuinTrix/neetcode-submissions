class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let pointerOne = 0;
        let pointerTwo = s.length - 1;
        

        while (pointerTwo > pointerOne) {
            if (!/^[a-zA-Z0-9]+$/.test(s[pointerOne])) {
                pointerOne++;
                continue;
            } 
            if (!/^[a-zA-Z0-9]+$/.test(s[pointerTwo])) {
                pointerTwo--;
                continue;
            }

            if(s[pointerOne].toLowerCase() !== s[pointerTwo].toLowerCase()) {
                return false;
            }

            pointerOne++;
            pointerTwo--;
        }

        return true;
    }
}
