class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let result = [];
        let product = nums.filter(x => x !== 0).reduce((acc, cur) => {
            acc = acc * cur
            return acc
        }, 1)
        let zero = nums.filter(x => x === 0)

        if (zero.length > 1) {
            result = nums.map(x => 0)
        } else if (zero.length === 1) {
            result =  nums.map(x => x === 0 ? product : 0)
        } else {
            result = nums.map(x => product/x)
        }        

        return result
    }
}
