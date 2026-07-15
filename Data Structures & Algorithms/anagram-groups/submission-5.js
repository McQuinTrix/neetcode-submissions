class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const hashMap = {};

        for (let i = 0; i < strs.length; i++) {
            const arrayMap = new Array(26).fill(0);

            for (let j = 0; j < strs[i].length; j++) {
                arrayMap[strs[i][j].charCodeAt(0) - 'a'.charCodeAt(0)]++
            }

            if (!hashMap[arrayMap.join(',')]) {
                hashMap[arrayMap.join(',')] = [];
            }

            hashMap[arrayMap.join(',')].push(strs[i]);
        }

        return Object.values(hashMap);
    }
}
