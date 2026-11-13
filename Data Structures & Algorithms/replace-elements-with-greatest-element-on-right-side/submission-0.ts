class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr: number[]): number[] {
        let right: number[] = [];
        let max = 0;
        for (let i = 0; i < arr.length; i++) {
            right = arr?.slice(i + 1);
            for (let el of right) {
                max = Math.max(...right);
                arr[i] = max;
            }
            if (i === arr.length - 1) {
                arr[i] = -1;
            }
        }
        return arr;
    }
}
