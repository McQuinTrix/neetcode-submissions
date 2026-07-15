/** Pair class to store key-value pairs */
// class Pair {
//   /**
//    * @param {number} key The key to be stored in the pair
//    * @param {string} value The value to be stored in the pair
//    */
//   constructor(key, value) {
//       this.key = key;
//       this.value = value;
//   }
// }
class Solution {
    /**
     * @param {Pair[]} pairs
     * @returns {Pair[]}
     */
    quickSort(pairs) {
        if (pairs.length <= 1) {
            return pairs;
        }

        const pivot = pairs.length - 1;
        let left = 0;

        for (let i = 0; i < pairs.length - 1; i++) {
            if (pairs[i].key < pairs[pivot].key) {
                let tmp = pairs[left];
                pairs[left] = pairs[i];
                pairs[i] = tmp;
                left++;
            }
        }

        let tmp2 = pairs[left];
        pairs[left] = pairs[pivot];
        pairs[pivot] = tmp2;

        return [
            ...this.quickSort(pairs.slice(0, left)),
            pairs[left],
            ...this.quickSort(pairs.slice(left+1)),
        ];
    }

}
