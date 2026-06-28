class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        return this.sort(nums)
    }

    sort (nums) {
        nums.sort()
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] === nums[i+1]) {
                return nums[i]
            }
        }
    }
}
