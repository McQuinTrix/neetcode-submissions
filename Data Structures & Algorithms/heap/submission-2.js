class MinHeap {
    nums = [null];
    constructor() {}

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.nums.push(val);
        let i = this.nums.length - 1;
        let parent = Math.floor(i / 2);

        while (i > 1 && this.nums[i] < this.nums[parent]) {
            let temp = this.nums[parent];
            this.nums[parent] = this.nums[i];
            this.nums[i] = temp;
            i = parent;
            parent = Math.floor(i / 2);
        }
    }

    /**
     * @return {number}
     */
    pop() {
        if (this.nums.length === 1) {
            return -1;
        }
        if (this.nums.length === 2) {
            return this.nums.pop();
        }

        let i = 1;
        let poppedItem = this.nums[i];
        this.nums[i] = this.nums[this.nums.length - 1];
        this.nums.pop();

        while(i * 2 < this.nums.length) {
            let leftChildIndex = i * 2;
            let rightChildIndex = (i * 2) + 1;

            if (rightChildIndex < this.nums.length 
                && this.nums[rightChildIndex] < this.nums[i] 
                && this.nums[rightChildIndex] < this.nums[leftChildIndex]) {

                let temp = this.nums[rightChildIndex];
                this.nums[rightChildIndex] = this.nums[i];
                this.nums[i] = temp;
                i = (i * 2) + 1;

            } else if (this.nums[leftChildIndex] < this.nums[i]) {
                let temp = this.nums[leftChildIndex];
                this.nums[leftChildIndex] = this.nums[i];
                this.nums[i] = temp;
                i = i * 2;
            } else {
                break;
            }

        }

        return poppedItem;
    }

    /**
     * @return {number}
     */
    top() {
        if (this.nums.length < 2) {
            return -1;
        }
        return this.nums[1];
    }

    /**
     * @param {number[]} nums
     * @return {void}
     */
    heapify(input) {
        this.nums = [null]
        input.forEach(i => this.push(i));
    }
}
