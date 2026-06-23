class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    second_approach(s, t) {
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

    isAnagram(s, t) {
        if (s.length !== t.length)  return false

        // create a array of length 26 for a-z [0,0,0,0...]
        const count = new Array(26).fill(0);

        for (let i = 0; i < s.length; i++) {
            // itrate over s and t and increment +1 for one and decrement -1 for other
            count[s.charCodeAt(i) - 'a'.charCodeAt(0)]++
            count[t.charCodeAt(i) - 'a'.charCodeAt(0)]--
        }

        return count.every(x => x === 0)
    }
}
