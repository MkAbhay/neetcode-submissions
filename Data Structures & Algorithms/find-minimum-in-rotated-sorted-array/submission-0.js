class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        return this.O_N(nums)
    }

    O_N (nums) {
        let low = nums[0]
        for (let i = 1; i < nums.length; i++) {
            low = Math.min(nums[i], low)
        }
        return low
    }
}
