class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let maxNum = 0;

        for (let i = 0; i < piles.length; i++) {
            if (piles[i] > maxNum) {
                maxNum = piles[i];
            }
        }

        let l = 0;
        let r = maxNum;
        let result = Infinity;

        while(l <= r) {
            let m = l + Math.floor((r - l + 1)/2);

            let hoursTakenToEat = 0;

            for (let j = 0; j < piles.length; j++) {
                let hourTaken = Math.ceil(piles[j]/m);
                hoursTakenToEat += hourTaken;
            }

            if (hoursTakenToEat > h) {
                l = m + 1;
            }

            if (hoursTakenToEat <= h) {
                if (result > m) {
                    result = m;
                }
                r = m - 1;
            }
        }
        
        return result;
    }
}
