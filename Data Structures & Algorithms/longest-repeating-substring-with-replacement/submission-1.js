class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        return this.brute_force(s, k)
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
