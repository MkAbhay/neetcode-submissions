class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums) {
        return this.formula(nums)
    }

    formula (nums) {
        const n = nums.length;
        const sum = (n * (n+1))/2;
        const num_sum = nums.reduce((acc, cur) => {
            acc = acc + cur
            return acc
        }, 0);
        console.log(sum, num_sum)
        return sum - num_sum
    }

    worst_method (nums) {
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
