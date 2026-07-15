class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const hashMap = {};
        const result = [];

        for (let i = 0; i < strs.length; i++) {
            const strMap = strs[i].split('').sort().join();
            if (!hashMap[strMap]) {
                hashMap[strMap] = [];
            }

            hashMap[strMap].push(strs[i]);
        }

        for (let j = 0; j < Object.keys(hashMap).length; j++) {
            const key = Object.keys(hashMap)[j];
            result.push(hashMap[key]);
        }

        return result;
    }

    
}