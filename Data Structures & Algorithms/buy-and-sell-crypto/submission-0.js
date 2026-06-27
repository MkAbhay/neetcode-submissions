class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        return this.brute_force(prices)
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
