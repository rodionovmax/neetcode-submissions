class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums: number[]): number[] {
        const n = nums.length;
        let newArr = new Array(2*n);
        for (let i = 0; i < n; i++) {
            newArr[i] = nums[i];
            newArr[i + n] = nums[i];
        }
        return newArr;
    }
}
