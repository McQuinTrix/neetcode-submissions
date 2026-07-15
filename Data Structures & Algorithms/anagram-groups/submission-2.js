class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const hashMap = {};

        for (let i = 0; i < strs.length; i++) {
            const keyArray = new Array(26).fill(0);
            strs[i].split('').forEach((item) => {
                const currentIndex = item.charCodeAt(0) - 'a'.charCodeAt(0);
                keyArray[currentIndex]++;
            })
            const keyStr = keyArray.join(',');

            if (!hashMap[keyStr]) {
                hashMap[keyStr] = [];
            }

            hashMap[keyStr].push(strs[i]);
        }

        return Object.keys(hashMap).map((item) => {
            return hashMap[item];
        })
    }
}
