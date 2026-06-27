class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        return this.kadane(nums)
    }

    kadane (nums) {
        let max_sum = -Infinity;
        let curr_sum = 0;
        for (let i = 0; i < nums.length; i++) {
            curr_sum = curr_sum + nums[i];
            max_sum = Math.max(curr_sum, max_sum)
            if ( curr_sum < 0)  curr_sum = 0
        }
        return (max_sum)
    }
}
