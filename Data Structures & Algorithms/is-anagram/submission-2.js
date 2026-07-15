class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) {
            return false;
        }

        const charCodeA = 'a'.charCodeAt(0);
        const count = Array(26).fill(0);

        for (let i = 0; i < s.length; i++) {
            count[(s.charCodeAt(i) - charCodeA)]++;
            count[(t.charCodeAt(i) - charCodeA)]--;
        }

        return count.filter(i => i !== 0).length === 0;
    }
}
