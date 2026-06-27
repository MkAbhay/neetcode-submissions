class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = [];
        for (let char of s) {
            if (char === '(' || char === '{' || char === '[') {
                stack.push(char);
            } else if (
                (stack[stack.length-1] === '(' && char === ')') || 
                (stack[stack.length-1] === '{' && char === '}') ||
                (stack[stack.length-1] === '[' && char === ']')
            ) {
                stack.pop()
            } else {
                return false
            }
        }

        return stack.length === 0
    }
}
