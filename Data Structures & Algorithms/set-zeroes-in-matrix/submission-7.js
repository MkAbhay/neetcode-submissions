class Solution {
    /**
     * @param {number[][]} matrix
     * @return {void}
     */
    setZeroes(matrix) {
        return this.optimal(matrix)
    }

    // time O(m*n) - space O(1)
    optimal (matrix) {
        let m = matrix.length;
        let n = matrix[0].length;

        let zero_in_first_row = false;
        let zero_in_first_col =  false;

        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {j
                if (matrix[i][j] === 0) {
                    if (i===0)  zero_in_first_col = true
                    if (j===0)  zero_in_first_row = true
                    matrix[i][0] = 0;
                    matrix[0][j] = 0;
                }
            }
        }

        for (let i = 1; i < m; i++) {
            for (let j = 1; j < n; j++) {
                if ((matrix[i][0] === 0) || (matrix[0][j] === 0)) {
                    matrix[i][j] = 0;
                }
            }
        }

        if (zero_in_first_row) {
            console.log('row')
            for (let i = 0; i < m; i++) {
                matrix[i][0] = 0
            }
        }

        if (zero_in_first_col) {
            for (let j = 0; j < n; j++) {
                matrix[0][j] = 0
            }
        }

        return matrix
    }

    // time O(m*n) - space O(m+n)
    bollean_array () {
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
