class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        return this.brute_force(prices)
    }

    reverse(prices) {
        let max_sell = 0;
        let max_profit = 0;
        for (let i = prices.length-1; i <= 0; i++) {
            if (prices[i] > max_sell) {
                max_sell = prices[i]
                continue;
            }
            let cur_profit = max_sell - prices[i]
            max_profit = Math.max(cur_profit, max_profit)
        }
        return max_profit
    }

    brute_force (prices) {
        let max_profit = 0;
        for (let i = 0; i < prices.length; i++) {
            for (let j = i + 1; j < prices.length; j++) {
                let current_profit = prices[j] - prices[i]
                max_profit = Math.max(max_profit, current_profit)
            }
        }
        return max_profit
    }
}
