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
        let max_seq_count = 0;

        for (const num of nums) {
            if (!set.has(num-1)) {
                let curr = num
                let curr_sum = 0
                while (set.has(curr)) {
                    curr_sum++
                    curr++
                }
                max_seq_count = Math.max(max_seq_count, curr_sum)
            }
        }

        return max_seq_count
    }   
}