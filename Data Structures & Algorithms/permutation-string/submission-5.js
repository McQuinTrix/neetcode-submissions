class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        let s1Length = s1.length;
        let s1Map = {};
        let s1CharNum = 0;

        s1.split('').forEach((item, i) => {
            if(!s1Map[item]){
                s1CharNum++;
            }
            s1Map[item] = (s1Map[item] || 0) + 1;
        });

        let r = 0;
        let l = 0;
        let winMap = {};
        let s1MatchNum = 0;

        while(r < s2.length) {
            let addedChar = s2[r];
            winMap[addedChar] = (winMap[addedChar] || 0) + 1;

            if (s1Map[addedChar]){ 
                if (winMap[addedChar] === s1Map[addedChar]){
                    s1MatchNum++;
                } else if(winMap[addedChar] === s1Map[addedChar] + 1){
                    s1MatchNum--;
                }
            }

            if (r-l + 1 > s1Length) {
                let removedChar = s2[l];
                winMap[removedChar] = (winMap[removedChar] || 0) - 1;

                if (s1Map[removedChar] 
                    && winMap[removedChar] === s1Map[removedChar]){
                        s1MatchNum++;
                } else if (s1Map[removedChar] 
                    && winMap[removedChar] === s1Map[removedChar] - 1) {
                        s1MatchNum--;
                }

                l++;
            } 

            console.log(winMap, s1MatchNum, s1CharNum);

            if (s1MatchNum === s1CharNum) {
                return true;
            }

            r++;
        }

        return false;
    }
}
