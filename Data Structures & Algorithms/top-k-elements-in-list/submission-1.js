class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const hashMap = {};
        const bucketArr = new Array(nums.length);

        for (let i = 0; i < nums.length; i++) {
            if(!hashMap[nums[i]]) {
                hashMap[nums[i]] = 0;
            }

            hashMap[nums[i]]++;
        }

        Object.keys(hashMap).forEach((key) => {
            if (!bucketArr[parseInt(hashMap[key])]) {
                bucketArr[parseInt(hashMap[key])] = [];
            }
            bucketArr[parseInt(hashMap[key])].push(key);
        })

        const response = [];

        for (let i = bucketArr.length - 1; i > 0; i--) {
            if (bucketArr[i]) {
                for (let abc of bucketArr[i]) {
                    response.push(abc);

                    if (response.length === k) {
                        return response;
                    }
                }
            }
        }
    }
}
