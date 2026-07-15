class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        const strEncodedArr = [];
        for (let i = 0; i < strs.length; i++) {
            let s;
            if (!strs[i]) {
                s = 'empty';
            } else {
                s = strs[i].split('').map((item) => item.charCodeAt(0)).join(',');
            }
            strEncodedArr.push(s);
        }

        return strEncodedArr.length > 0 ? strEncodedArr.join('-') : '';
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        if (!str) {
            return [];
        }
        const strDecodedArr = str.split('-');
        const decodedArr = [];
        for (let i = 0; i < strDecodedArr.length; i++) {
            let s = '';
            if (strDecodedArr[i] !== 'empty') {
                s = strDecodedArr[i].split(',').map((item) => String.fromCodePoint(item)).join('');
            }
            decodedArr.push(s);
        }

        return decodedArr;
    }
}
