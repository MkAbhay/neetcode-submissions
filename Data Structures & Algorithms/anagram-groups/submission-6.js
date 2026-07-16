class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        return this.non_sort (strs)
    }

    non_sort (strs) {
        let map = new Map()
        
        for (let i = 0; i < strs.length; i++) {
            let count = new Array(26).fill(0);
            for (let j = 0; j < strs[i].length; j++) {
                count[strs[i].charCodeAt(j) - 97]++
            }
            let key = count.join()
            let arr = map.get(key) || []
            arr.push(strs[i])
            map.set(key, arr)
        }

        return [...map.values()]
    }

    sort (strs) {
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
