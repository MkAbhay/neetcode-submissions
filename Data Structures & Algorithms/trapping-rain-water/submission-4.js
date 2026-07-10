class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        return this.space_O1(height)
    }

    space_On (height) {
        let maxl = 0
        let maxl_arr = height.map(x => {
            maxl = Math.max(maxl, x)
            return maxl
        })
        let maxr = 0
        let maxr_arr = [...height].reverse().map(x => {
            maxr = Math.max(maxr, x)
            return maxr
        }).reverse()

        let total = 0
        for (let i = 0; i < height.length; i++) {
            let min = Math.min(maxl_arr[i], maxr_arr[i])
            if (min > height[i])     total += min - height[i]
        }

        return total
    }

    space_O1 (height) {
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
