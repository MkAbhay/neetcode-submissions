class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        return this.space_On(board)
    }

    space_On (board) {
        // col
        for (let r = 0; r < 9; r++) {
            let set = new Set()
            for (let c = 0; c < 9; c++) {
                if (board[r][c] === '.')    continue
                if (set.has(board[r][c]))   return false
                set.add(board[r][c])
            }
        }

        // row
        for (let c = 0; c < 9; c++) {
            let set = new Set()
            for (let r = 0; r < 9; r++) {
                if (board[r][c] === '.')    continue
                if (set.has(board[r][c]))   return false
                set.add(board[r][c])
            }
        }

        //squarecell
        for (let sq = 0; sq < 9; sq++) {
            let set = new Set()
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {
                    let r = Math.floor(sq / 3) * 3 + i
                    let c = Math.floor(sq % 3) * 3 + j

                    if (board[r][c] === '.')    continue
                    if (set.has(board[r][c]))   return false
                    set.add(board[r][c])
                }
            }
        }

        return true
    }

    space_On2 (board) {
        // col
        for (let r = 0; r < 9; r++) {
            let set = new Set()
            for (let c = 0; c < 9; c++) {
                if (board[r][c] === '.')    continue
                if (set.has(board[r][c]))   return false
                set.add(board[r][c])
            }
        }

        // row
        for (let c = 0; c < 9; c++) {
            let set = new Set()
            for (let r = 0; r < 9; r++) {
                if (board[r][c] === '.')    continue
                if (set.has(board[r][c]))   return false
                set.add(board[r][c])
            }
        }

        // squarecell
        let map = new Map()
        for (let r = 0; r < 9; r++) {
            for (let c = 0; c < 9; c++) {
                let key = `${Math.floor(r/3)},${Math.floor(c/3)}`
                if (board[r][c] === '.')    continue
                if (!map.has(key))  map.set(key, new Set([board[r][c]]))
                else {
                    if (map.get(key).has(board[r][c]))  return false
                    map.get(key).add(board[r][c])
                }
            }
        }

        return true
    }
}
