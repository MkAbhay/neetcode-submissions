class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let l = 0
        let r = nums.length - 1
        while ( l < r) {
            let mid = l + Math.floor((r - l) / 2)
            if (nums[mid] < nums[r])    r = mid
            else    l = mid + 1
        }
        // nums[l] is the roated point 
        let start = 0
        let end = nums.length - 1
        if ( target <= nums[end])    start = l
        else    end = nums[l - 1] ? l -1 : l
        while (start <= end) {
            let mid = start + Math.floor((end - start) / 2)
            if (nums[mid] === target)   return mid
            else if (nums[mid] < target)    start = mid + 1
            else    end = mid - 1 
        }
        return -1
    }

}