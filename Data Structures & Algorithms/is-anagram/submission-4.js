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

        const hashtable = new Array(26).fill(0);

        for (let i = 0; i < s.length; i++) {
            hashtable[s[i].charCodeAt(0) - 'a'.charCodeAt(0)]++;
            hashtable[t[i].charCodeAt(0) - 'a'.charCodeAt(0)]--;
        }

        return hashtable.every((val) => val === 0);
    }
}
