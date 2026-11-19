class Solution {
    /**
     * @param {number[]} students
     * @param {number[]} sandwiches
     * @return {number}
     */
    countStudents(students: number[], sandwiches: number[]): number {
        let n = students.length;
        let idx = 0;

        let res = n;
        let sandwich: number
        for (sandwich of sandwiches) {
            let cnt = 0;
            while (cnt < n && students[idx] !== sandwich) {
                idx++;
                idx %= n;
                cnt++;
            }

            if (students[idx] === sandwich) {
                students[idx] = -1;
                res--;
            } else {
                break;
            }
        }
        return res;
    }
}
