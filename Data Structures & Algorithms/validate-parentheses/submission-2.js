class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = [];

        if (!s) {
            return true;
        }

        let matcher = {
            "}": "{",
            ")": "(",
            "]": "[",
        }

        for (let i = 0; i < s.length; i++) {
            if (Object.hasOwn(matcher, s[i]) && stack.at(-1) === matcher[s[i]]) {
                stack.pop();
            } else {
                stack.push(s[i])
            }
        }

        return stack.length === 0
    }
}
