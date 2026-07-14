class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        return this.char(s1, s2)
    }

    char (s1, s2) {
        if (s1.length > s2.length)  return false

        const s1_arr = new Array(26).fill(0)
        const s2_arr = new Array(26).fill(0)

        // populate target and first window 
        for (let i = 0; i < s1.length; i++) {
            s1_arr[s1.charCodeAt(i) - 97]++
            s2_arr[s2.charCodeAt(i) - 97]++
        }

        // check for matches with first window
        let matches = 0
        for (let i = 0; i < 26; i++){
            if (s1_arr[i] === s2_arr[i])   matches ++
        }

        // ittrate over s2
        let l = 0
        for (let r = s1.length; r < s2.length; r++) {
            if (matches === 26) return true

            s2_arr[s2.charCodeAt(r) - 97]++
            if (s1_arr[s2.charCodeAt(r) - 97] === s2_arr[s2.charCodeAt(r) - 97])    matches++
            else if (s1_arr[s2.charCodeAt(r) - 97] === s2_arr[s2.charCodeAt(r) - 97] - 1) matches--

            s2_arr[s2.charCodeAt(l) - 97]--
            if (s1_arr[s2.charCodeAt(l) - 97] === s2_arr[s2.charCodeAt(l) - 97])    matches++
            else if (s1_arr[s2.charCodeAt(l) - 97] === s2_arr[s2.charCodeAt(l) - 97] + 1) matches--

            l++
        }

        return matches === 26
    }

    map (s1, s2) {
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
