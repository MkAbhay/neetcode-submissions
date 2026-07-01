class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        let t_map = new Map();
        let s_map = new Map();
        let min_sub = []
        let min_sub_length = Infinity
        for (let char of t) {
            t_map.set(char, (t_map.get(char) || 0 ) + 1)
        }     
        let has = t_map.size
        let need = 0

        let l = 0; 
        for (let r = 0; r < s.length; r++) {
            if (t_map.has(s[r])) {
                s_map.set(s[r], (s_map.get(s[r]) || 0) + 1)
                if (t_map.get(s[r]) === s_map.get(s[r]))    need++
            }

            while (has === need) {
                if (min_sub_length > r - l + 1) {
                    min_sub = [l, r]
                    min_sub_length = r - l + 1
                }
                if (t_map.has(s[l])) {
                    s_map.set(s[l], s_map.get(s[l]) - 1 )
                    if (t_map.get(s[l]) > s_map.get(s[l]))  need -= 1
                }
                l += 1 
            }
        }
        let [first, last] = min_sub
        return min_sub.length !== 0 ? s.substring(first, last+1) : ""
    } 
}
