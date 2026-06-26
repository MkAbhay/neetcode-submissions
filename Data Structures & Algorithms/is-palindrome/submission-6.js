class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        // 65-90    A-Z
        // 97-122   a-z
        // 48-57    0-9
        return  this.two_pointer(s);
        
    }

    two_pointer (s) {
        const sanitize_s = [...s].filter(x => (x.charCodeAt() >= 65 && x.charCodeAt() <= 90) ||  (x.charCodeAt() >= 97 && x.charCodeAt() <= 122) || (x.charCodeAt() >= 48 && x.charCodeAt() <= 57));
        let l = 0;
        let r = sanitize_s.length -1;

        while(l<r) {
            if (sanitize_s[l].toLowerCase() !== sanitize_s[r].toLowerCase()) {
                return false
            }
            l++;
            r--;
        }

        return true
    }

    reserve_str (s) {
        let sanitize_s = [...s].filter(x => (x.charCodeAt() >= 65 && x.charCodeAt() <= 90) ||  (x.charCodeAt() >= 97 && x.charCodeAt() <= 122) || (x.charCodeAt() >= 48 && x.charCodeAt() <= 57));
        return sanitize_s.join("").toLowerCase() === sanitize_s.reverse().join("").toLowerCase()
    }
}
