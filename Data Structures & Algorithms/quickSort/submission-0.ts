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
    quickSort(pairs: Pair[]): Pair[] {
        
        quickSortHelper(pairs, 0, pairs.length - 1)
        return pairs;
    }
}

function partition(arr: Pair[], s: number, e: number) {
    let pivot = arr[e];
    let left = s;
    let i = s

    for (i = s; i < e; i++) {
        if (arr[i].key < pivot.key) {
            let tmp = arr[left];
            arr[left] = arr[i];
            arr[i] = tmp;
            left++;
        }
    }

    // arr[e] = arr[left];
    // arr[left] = pivot;
    // [arr[left], arr[i]] = [arr[i], arr[left]];
    const temp = arr[left];
    arr[left] = arr[e];
    arr[e] = temp;

    return left;
}

function quickSortHelper(arr: Pair[], s: number, e: number): void {
        if (e - s <= 0) return;

        const pivotIdx = partition(arr, s, e);

        quickSortHelper(arr, s, pivotIdx - 1);
        quickSortHelper(arr, pivotIdx + 1, e);
    }
