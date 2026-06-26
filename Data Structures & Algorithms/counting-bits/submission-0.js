class Solution {
    /**
     * @param {number} n
     * @return {number[]}
     */
    countBits(n) {
        return this.dp_bit_manipulation(n)
    }

    dp_bit_manipulation (n) {
        let map = new Map();
        let result = [];

        for (let i = 0; i <= n; i++) {
            let n = i
            let count = 0;
            while (n > 0) {
                if (map.has(n)){
                    count = count + map.get(n);
                    n = 0
                } else {
                    n = n & (n-1);
                    count++;
                }
            }
            map.set(i, count);
            result.push(count);
        }
        
        return  result
    }
}
