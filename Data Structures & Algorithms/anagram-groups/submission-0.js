class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map();

        for (const word of strs){
            let key = word.split("").sort().join("");
            let val_arr = map.get(key) || []
            val_arr.push(word)
            map.set(key, val_arr)
        }

        return [...map.values()]
    }
}
