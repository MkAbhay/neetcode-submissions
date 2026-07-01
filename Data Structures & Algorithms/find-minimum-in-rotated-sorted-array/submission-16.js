class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        return this.binary_serach(nums)
    }

    binary_serach (nums) {
        let start  = 0
        let end = nums.length -1
        while (start < end) {
            let mid = start + Math.floor((end - start) / 2) 
            if (nums[mid] < nums[end])   end = mid
            else start = mid + 1
        }

        return nums[start]
    }

    O_N (nums) {
        let low = nums[0]
        for (let i = 1; i < nums.length; i++) {
            low = Math.min(nums[i], low)
        }
        return low
    }
}
