class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let pre = []
        let temp = 1;
        for (let i = 0; i < nums.length; i++) {
            let product = temp*nums[i]
            pre.push(product)
            temp = product
        }
        let suf = []
        temp = 1
        for (let i = nums.length-1; i >= 0; i--) {
            let product = temp*nums[i]
            suf.push(product)
            temp = product
        }
        suf.reverse()

        return nums.map((x, i) => (pre[i-1] ?? 1) * (suf[i+1] ?? 1) )
    }

    intuition(nums) {
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
