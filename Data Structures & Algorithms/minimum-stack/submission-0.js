class MinStack {

    constructor() {
        this.stack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        let stackMin = this.stack.length === 0 ? val : this.stack.at(-1).min;
        let min = val < stackMin ? val : stackMin;
        this.stack.push({
            value: val,
            min,
        })
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
        return this.stack.at(-1)?.value;
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.stack.at(-1)?.min;
    }
}
