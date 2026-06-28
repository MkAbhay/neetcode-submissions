class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        return this.sliding_window(s)
    }

    sliding_window (s) {
        let set = new Set()
        let max_length = 0
        let current_length = 0;

        let l = 0, r = 0;
        while (r < s.length && l < s.length) {
            if (set.has(s[r])) {
                set.delete(s[l])
                l++
                current_length--
            } else {
                set.add(s[r]);
                r++
                current_length++
            }
            max_length = Math.max(max_length, current_length)
        }

        return max_length
    }
}
