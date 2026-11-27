/** Pair class to store key-value pairs */
// class Pair {
//   /**
//    * @param {number} key The key to be stored in the pair
//    * @param {string} value The value to be stored in the pair
//    */
//   key: number;
//   value: string;
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
    mergeSort(pairs: Pair[]): Pair[] {
        if (pairs.length <= 1) {
            return pairs;
        }
        const mid = Math.floor(pairs.length / 2);
        const left = this.mergeSort(pairs.slice(0, mid));
        const right = this.mergeSort(pairs.slice(mid));
        const merged: Pair[] = [];

        let i = 0, j = 0;
        
        while (i < left.length && j < right.length) {
            if (left[i].key <= right[j].key) {
                merged.push(left[i]);
                i++;
            } else {
                merged.push(right[j]);
                j++;
            }
        }

        while (i < left.length) {
            merged.push(left[i++]);
        }

        while (j < right.length) {
            merged.push(right[j++]);
        }

        return merged;
    }
}
