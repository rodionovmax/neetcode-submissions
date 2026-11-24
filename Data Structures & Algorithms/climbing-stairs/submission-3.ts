class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n: number): number {
        const memo = new Map<number, number>();
        const dfs = (i: number): number => {
            if (i >= n) return i == n ? 1 : 0;
            if (memo.has(i)) return memo.get(i)!;
            const res = dfs(i + 1) + dfs(i + 2);
            memo.set(i, res);
            return res;
        }
        return dfs(0);
    }
}
