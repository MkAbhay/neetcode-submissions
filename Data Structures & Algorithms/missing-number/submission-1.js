class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums) {
        nums.sort()
        let previous = nums[0];
        for (let i = 1; i < nums.length; i++) {
            if (nums[i] -1 !== previous) {
                return nums[i] -1
            }
            previous = nums[i]
        }
        return nums[0] === 0 ? nums.length : 0
    }
}
