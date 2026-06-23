class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let zero = nums.filter(x => x === 0)
        if (zero.length > 1) {
            return nums.map(x => 0)
        }

        let product = nums.filter(x => x !== 0).reduce((acc, cur) => {
            acc = acc * cur
            return acc
        }, 1)
        console.log(product)
        
        return nums.every(x => x !== 0) ? nums.map(x => product/x) : nums.map(x => x === 0 ? product : 0)
    }
}
