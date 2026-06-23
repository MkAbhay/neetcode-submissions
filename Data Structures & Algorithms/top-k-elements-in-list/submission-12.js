class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const count = {};
        const freq = Array.from({ length: nums.length + 1 }, () => []);

        for (const n of nums) {
            count[n] = (count[n] || 0) + 1;
        }
        for (const n in count) {
            freq[count[n]].push(parseInt(n));
        }

        const res = [];
        for (let i = freq.length - 1; i > 0; i--) {
            for (const n of freq[i]) {
                res.push(n);
                if (res.length === k) {
                    return res;
                }
            }
        }
    }

    bucket_method(nums, k) {
        const result = [];
         const map = new Map();

        for (let num of nums)   map.set(num, (map.get(num) || 0) + 1);

        const bucket = Array.from({length: nums.length +1}, () => []);

        for (let [key, value] of map) {
            bucket[value].push(key)
        }

        for (let i = bucket.length - 1; i > 0; i-- ) {
            for (const x of bucket[i]) {
                result.push(x)
                if (result.length === k)    return result
            }
        }
    }

    sort_method(nums, k) {
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
