class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let str = ``
        for (let word of strs) {
            str += `${word.length}#`+ word;   
        }
        return str
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let strs = []
        let length = '';
        let word = '';
        let loop = 'num';

        for (let i = 0; i < str.length; i++) {
            if (loop === 'num') {
                if (str[i] === '#') {
                    if (Number(length) === 0) {
                        strs.push("")
                    } else  loop = 'word' 
                }
                else    length += str[i];
            } else {
                word += str[i]
                length = Number(length) - 1
                
                if (Number(length) == 0) {
                    strs.push(word)
                    word = ''
                    length = ''
                    loop = 'num'
                }
            }  
        }

        return strs
    }
}
