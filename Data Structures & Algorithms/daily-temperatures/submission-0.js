class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let stack = []
        let res = new Array(temperatures.length).fill(0)
        
        for (let i = 0; i < temperatures.length; i++) {
            let curr = temperatures[i]

            while (stack.length > 0 && curr > stack[stack.length-1][0]) {
                let last = stack.pop()
                let dif = i - last[1]
                res[last[1]] = dif
            }
            stack.push([temperatures[i], i])
        }

        return res
    }
}
