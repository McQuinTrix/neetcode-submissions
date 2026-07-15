class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const hashMap = {};
        const frequencyCount = Array.from({ length: nums.length + 1 }, () => []);
        const result = [];

        for (let i = 0; i < nums.length; i++) {
            if (!hashMap[nums[i]]) {
                hashMap[nums[i]] = 0
            } 
            hashMap[nums[i]]++;
        }

        const keys = Object.keys(hashMap);
        for (let j = 0; j < keys.length; j++) {
            let val = hashMap[keys[j]];

            if (!frequencyCount[val]) {
                frequencyCount[val] = [];
            }
            console.log(frequencyCount);
            frequencyCount[val].push(keys[j]);
        }

        console.log(frequencyCount);

        for (let x = frequencyCount.length - 1; x >=0; x--) {
            for(let l = 0; l < frequencyCount[x].length; l++) {
                if (result.length < k) {
                    result.push(frequencyCount[x][l]);
                }
            }
        }

        return result;
    }
}
