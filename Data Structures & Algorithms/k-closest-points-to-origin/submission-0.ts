class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points: number[][], k: number): number[][] {
        let l = 0;
        let r = points.length - 1;
        let pivot = points.length;

        while (pivot != k) {
            pivot = partition(points, l, r);
            if (pivot < k) {
                l = pivot + 1;
            } else {
                r = pivot - 1;
            }
        }
        return points.slice(0, k);
    }
}

function partition(points: number[][], l, r) {
    const pivotIdx = r;
    const pivotDist = calcDistance(points[pivotIdx]);
    let i = l;
    for (let j = l; j < r; j++) {
        if (calcDistance(points[j]) <= pivotDist) {
            [points[i], points[j]] = [points[j], points[i]];
            i++;
        }
    }
    [points[i], points[r]] = [points[r], points[i]];
    return i;
}

function calcDistance(point: number[]): number {
    return point[0] ** 2 + point[1] ** 2;
}
