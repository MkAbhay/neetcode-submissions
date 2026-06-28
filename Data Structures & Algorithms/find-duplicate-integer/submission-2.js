class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        return this.marking(nums)
    }

    marking (nums) {
        for (let i = 0; i < nums.length; i++) {
            let remove_negitive = Math.abs(nums[i]) 
            if (Math.sign(nums[remove_negitive]) === -1 )    return remove_negitive
            nums[remove_negitive] *= (-1)
        }
    }

    set (nums) {
        const set = new Set()
        for (const n of nums) {
            if (set.has(n)) return n
            set.add(n)
        }
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
