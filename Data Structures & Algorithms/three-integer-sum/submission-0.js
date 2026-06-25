class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        if (nums.length < 3)  return []
        nums.sort((a, b) => a - b);
        let result = [];

        for (let i = 0; i < nums.length; i++) {
            if (i>0 && nums[i] === nums[i-1])   continue;
            let start = i
            let mid = i +1
            let end = nums.length -1;
            while (mid < end) {
                let sum  = nums[start] + nums[mid] + nums[end]
                if (sum > 0)    end--    
                else if (sum < 0)   mid++  
                else  {
                    result.push([nums[start], nums[mid], nums[end]]);
                    while (mid < end && nums[mid] === nums[mid+1])  mid++
                    while (mid < end && nums[end] === nums[end-1])  end--

                    mid++
                    end--
                }
            }
        }
        
        return result
    }

    // double_for (nums) {
    //     const map = new Map();
    //     let result = [];

    //     for (let i = 0; i < nums.length; i++) {
    //         for (let j = i + 1; j < nums.length; j++) {
    //             let sum = nums[i] + nums[j]
    //             let diff = sum * (-1)
    //             map.set(diff, [i,j])
    //         }
    //     }

    //     for (let i = 0; i < nums.length; i++) {
    //         if (map.has(nums[i])) {
    //             const index_arr = map.get(nums[i])
    //             if (!index_arr.includes(i)) {
    //                 index_arr.push(i)
    //                 result.push(index_arr.map(x => nums[x])) 
    //             }
    //         }
    //     }
    //     console.log(result)
    //     return result

    // }
}
