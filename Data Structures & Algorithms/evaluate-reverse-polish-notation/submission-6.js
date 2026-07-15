class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = [];

        for (let i = 0; i < tokens.length; i++) {
            console.log(stack);

            switch(tokens[i]) {
                case '+':
                    let poppedVal1 = stack.pop();
                    let poppedVal2 = stack.pop();
                    stack.push(+poppedVal2 + +poppedVal1);
                    break;
                case '-':
                    let poppedVal11 = stack.pop();
                    let poppedVal21 = stack.pop();
                    stack.push(+poppedVal21 - +poppedVal11);
                    break;
                case '*':
                    let poppedVal111 = stack.pop();
                    let poppedVal211 = stack.pop();
                    stack.push(+poppedVal211 * +poppedVal111);
                    break;
                case '/':
                    let poppedVal1111 = stack.pop();
                    let poppedVal2111 = stack.pop();
                    stack.push(Math.trunc(+poppedVal2111 / +poppedVal1111));
                    break;
                default:
                    stack.push(+tokens[i]);
                    break;
            }
        }
        return stack[0];
    }
}
