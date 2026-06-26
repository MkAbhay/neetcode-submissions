class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        return this.hash_set(nums)
    }

    hash_set (nums) {
        if (nums.length === 0)    return 0

        const set = new Set(nums);
        let start_arr = [];
        let max_seq_count = 1;

        for (const num of nums) {
            if (set.has(num+1) && !set.has(num-1)) {
                start_arr.push(num)
            }
        }

        for (const s of start_arr) {
            let curr = s
            let curr_sum = 1
            while (set.has(curr+1)) {
                curr_sum++
                curr++
            }
            max_seq_count = Math.max(max_seq_count, curr_sum)
        }

        return max_seq_count
    }   
}