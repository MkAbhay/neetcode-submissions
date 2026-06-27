class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        return this.two_pointer(heights)
    }

    two_pointer (heights) {
        let max_area = 0;

        let l = 0
        let r = heights.length-1
        while (l < r) {
            let current_area = Math.min(heights[l], heights[r]) * (r - l)
            max_area = Math.max(current_area, max_area)
            if (heights[l] < heights[r])    l++
            else    r--
        }
        return max_area
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
