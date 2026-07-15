class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = [];

        for (let i = 0; i < s.length; i++) {
            const current = s[i];
            switch (current) {
                case '(':
                case '{':
                case '[':
                    stack.push(current);
                    break;
                case ')':
                    if (stack[stack.length - 1] === '(') {
                        stack.pop();
                    } else {
                        return false;
                    }
                    break;
                case '}':
                    if (stack[stack.length - 1] === '{') {
                        stack.pop();
                    }  else {
                        return false;
                    }
                    break;
                case ']':
                    if (stack[stack.length - 1] === '[') {
                        stack.pop();
                    } else {
                        return false;
                    }
                    break;
            }
        }

        return stack.length === 0;
    }
}
