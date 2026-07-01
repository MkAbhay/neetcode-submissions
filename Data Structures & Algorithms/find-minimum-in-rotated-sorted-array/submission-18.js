class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        return this.binary_serach_two(nums)
    }

        binary_serach_two (nums) {
        let start  = 0
        let end = nums.length -1
        while (start < end) {
            let mid = start + Math.floor((end - start) / 2) 
            if (nums[mid] < nums[end])   end = mid
            else start = mid + 1
        }

        return nums[start]
    }

    binary_serach (nums) {
        let start  = 0
        let end = nums.length -1
        while (start <= end) {
            let mid = start + Math.floor((end - start) / 2) 
            if (nums[0] < nums[mid])   start = mid + 1
            else if (nums[0] > nums[mid]) {
                if (nums[mid-1] > nums[mid])    return nums[mid]
                end = mid - 1
            }
            else    return Math.min(nums[mid], nums[end])
        }

        return nums[0]
    }

    O_N (nums) {
        let low = nums[0]
        for (let i = 1; i < nums.length; i++) {
            low = Math.min(nums[i], low)
        }
        return low
    }
}
