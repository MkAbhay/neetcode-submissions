class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = new Map();

        for (let num of nums)   map.set(num, (map.get(num) || 0) + 1);

        const array = [...map]

        array.sort((a, b) => b[1] - a[1])

        console.log(array)
        return array.slice(0, k).map(x => x[0])
    }

    intuition(nums, k) {
        const map = new Map();
        const result = [];

        for (let num of nums)   map.set(num, (map.get(num) || 0) + 1);

        for (let i = 0; i < k; i++){
            let most_frequent = null;
            let most_frequest_value = 0;
            for (let [key, value] of map) {
                if (most_frequest_value < value) {
                    most_frequent = key;
                    most_frequest_value = value
                }
            }
            result.push(most_frequent);
            map.delete(most_frequent)
        }

        return result
    }
}
