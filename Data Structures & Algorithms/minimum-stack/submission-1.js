class MinStack {
    stack = [];
    constructor() {
        this.stack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        if (this.stack.length === 0) {
            this.stack.push({
                value: val,
                min: val,
            });
        } else {
            const lastElem = this.stack[this.stack.length - 1];
            this.stack.push({
                value: val,
                min: Math.min(lastElem.min, val),
            })
        }
    }

    /**
     * @return {void}
     */
    pop() {
        this.stack.pop();
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length - 1].value;
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.stack[this.stack.length - 1].min;
    }
}
