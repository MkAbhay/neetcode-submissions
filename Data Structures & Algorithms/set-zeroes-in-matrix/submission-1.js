class Solution {
    /**
     * @param {number[][]} matrix
     * @return {void}
     */
    setZeroes(matrix) {
        let m = matrix.length;
        let n = matrix[0].length;
        let temp_arr = Array.from({length: m}, () => new Array(n).fill(0))

        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                if (matrix[i][j] === 0) {
                    temp_arr[i][j] = 1
                }
            }
        }

        for (let i = 0; i < temp_arr.length; i++) {
            for (let j = 0; j < temp_arr[i].length; j++) {
                if (temp_arr[i][j]===1) {
                    matrix[i].fill(0);
                    matrix.map(x => x[j] = 0)
                }
            }
        }
        return matrix
    }

}
