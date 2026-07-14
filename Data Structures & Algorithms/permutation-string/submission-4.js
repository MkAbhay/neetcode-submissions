class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        let target_map = new Map()
        let search_map = new Map()

        // set need freq map
        for (const s of s1) {
            target_map.set(s, (target_map.get(s) || 0) + 1) 
        } 

        let need = target_map.size
        let has = 0

        let l = 0
        for ( let r = 0; r < s2.length; r++) {
            if (target_map.has(s2[r])) {
                search_map.set(s2[r], (search_map.get(s2[r]) || 0) + 1)
                if (target_map.get(s2[r]) === search_map.get(s2[r]))    has++
                
                while (target_map.get(s2[r]) < search_map.get(s2[r])) {
                    search_map.set(s2[l], search_map.get(s2[l]) - 1)
                    if (target_map.get(s2[l]) > search_map.get(s2[l]))  has--
                    l++
                }
                
                if ( need === has ) return true
            } else {
                l = r + 1
                has = 0
                search_map.clear()
            }
        }
        
        return false
    }
}
