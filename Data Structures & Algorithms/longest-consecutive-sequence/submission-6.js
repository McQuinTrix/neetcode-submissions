class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const hashMap = {};
        let longestSequence = 0;

        for (let i = 0; i < nums.length; i++) {
            hashMap[nums[i]] = true;
        }

        for (let j = 0; j < Object.keys(hashMap).length; j++) {
            if (!hashMap[parseInt(Object.keys(hashMap)[j])-1]) {
                let seq = true;
                let currentSequence = 1;
                while(seq) {
                    if (hashMap[parseInt(Object.keys(hashMap)[j])+currentSequence]) {
                        currentSequence++;
                    } else {
                        seq = false;
                    }
                }
                if (currentSequence > longestSequence) {
                    longestSequence = currentSequence;
                }
            }
        }

        return longestSequence;
    }
}
