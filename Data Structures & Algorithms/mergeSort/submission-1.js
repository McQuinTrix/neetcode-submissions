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
    mergeSort(pairs) {
        if (pairs.length <= 1) {
            return pairs;
        }

        const midPoint = Math.ceil(pairs.length / 2);
        let dividedPart1 = this.mergeSort(pairs.slice(0,midPoint));
        let dividedPart2 = this.mergeSort(pairs.slice(midPoint));

        let newArray = [];
        let ptr1 = 0;
        let ptr2 = 0;

        while(ptr1 < dividedPart1.length && ptr2 < dividedPart2.length) {

            if (dividedPart1[ptr1].key <= dividedPart2[ptr2].key) {
                newArray.push(dividedPart1[ptr1]);
                ptr1++;
            } else {
                newArray.push(dividedPart2[ptr2]);
                ptr2++;
            }
        }

        if (ptr1 < dividedPart1.length) {
            newArray.push(...dividedPart1.slice(ptr1));
        } 

        if (ptr2 < dividedPart2.length) {
            newArray.push(...dividedPart2.slice(ptr2));
        } 

        return newArray
    }
}
