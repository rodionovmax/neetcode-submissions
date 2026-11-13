class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums: number[]): number[] {
        const n = nums.length;
        let newArr: number[] = new Array(2*n);
        newArr = [...nums, ...nums];
        return newArr;
    }
}
