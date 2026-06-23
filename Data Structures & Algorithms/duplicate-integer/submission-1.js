class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const map = new Map();
        for (let x of nums){
            if (map.get(x))
                return true    
            map.set(x, 1)
        }
        return false
    }
}
