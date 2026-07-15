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

        const hash1 = {};
        const hash2 = {};

        for(let i = 0; i < s.length; i++) {
            if (!hash1[s[i]]) {
                hash1[s[i]] = 0;
            }
            if (!hash2[t[i]]) {
                hash2[t[i]] = 0;
            }

            hash1[s[i]]++;
            hash2[t[i]]++;
        }
        
        for (let j = 0; j < Object.keys(hash1).length; j++) {
            const key = Object.keys(hash1)[j]; 
            if (hash1[key] !== hash2[key]) {
                return false;
            }
        }

        return true;
    }
}
