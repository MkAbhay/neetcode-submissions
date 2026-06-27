class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        return this.brute_force(heights)
    }

    brute_force (heights) {
        let max_sum = 0;
        for (let i = 0; i < heights.length - 1; i++) {
            for (let j = i + 1; j < heights.length; j++) {
                let length = Math.min(heights[i], heights[j])
                let breath = j - i
                let area = length * breath;
                max_sum = Math.max(max_sum, area)
            }
        }
        return max_sum
    }
}
