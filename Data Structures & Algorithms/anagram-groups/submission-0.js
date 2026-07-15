class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const hashMap = {};

        for (let i = 0; i < strs.length; i++) {
            console.log(i);
            const sorted = strs[i].split('').sort();

            if (!hashMap[sorted]) {
                hashMap[sorted] = [];
            } 

            hashMap[sorted].push(strs[i]);
        }

        return Object.keys(hashMap).map((item) => {
            return hashMap[item];
        })
    }
}
