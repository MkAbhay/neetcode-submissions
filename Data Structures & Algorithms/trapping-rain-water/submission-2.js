class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let l = 0
        let r = height.length-1
        let maxl = height[l]
        let maxr = height[r]
        let total = 0
        while (l < r) {
            if (height[l] < height[r]) {
                if (maxl > height[l])   total += maxl - height[l]
                else maxl = height[l]
                l++
            } else {
                if (maxr > height[r])   total += maxr - height[r]
                else maxr = height[r]
                r--
            }
        }
        return total
    }
}
