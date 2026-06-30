class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        return this.sliding_window(s, k)
    }

    sliding_window (s, k) {
        let max_replace_count = 0
        let map = new Map()

        let l = 0
        let max_char_count = 0
        for (let r = 0; r < s.length; r++) {
            // set char in map
            map.set(s[r], (map.get(s[r]) || 0) + 1)
            // calculate max_char_count
            max_char_count = Math.max(map.get(s[r]), max_char_count)

            // reduce length from map if sub_string condition fails
            while ( (r - l + 1) - max_char_count > k ) {
                map.set(s[l], map.get(s[l]) - 1)
                l++
            }

            // calculate max_replace_coumt
            max_replace_count = Math.max(max_replace_count, r - l + 1)
        }

        return max_replace_count
    }

    brute_force (s, k) {
        let max_repeating_count = 0;
        for (let i = 0; i < s.length; i++) {
            let map = new Map();
            let max_char = '';
            let count = 0;
            for (let j = i; j < s.length; j++) {
                // set into map
                map.set(s[j], ((map.get(s[j]) || 0) + 1))
                // check for max char
                if (max_char === s[j])  count++
                else if (max_char !== s[j] && count > 0)    count--
                else {
                    max_char = s[j]
                    count++
                }

                // max repeating calculation
                let sub_string_length = j - i + 1;
                let max_char_count = map.get(max_char);
                if (sub_string_length - max_char_count <= k)   max_repeating_count = Math.max(max_repeating_count, sub_string_length)
            }
        }

        return  max_repeating_count
    }
}
