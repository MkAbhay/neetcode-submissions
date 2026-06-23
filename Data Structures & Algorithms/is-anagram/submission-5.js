class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const map_s = new Map();

        // set map for string s 
         for (const char_s of s){
            let count = map_s.get(char_s)
            if (count >= 1)
                map_s.set(char_s, ++count)
             else 
                map_s.set(char_s, 1)
        }

        // check for string t char with s map
        for (const char_t of t){
            let count = map_s.get(char_t)
            if ( !count )   return false  
            else if (count === 1)   map_s.delete(char_t)
            else    map_s.set(char_t, --count)
        }

        

        return !map_s.size
    }
}
