class KthLargest {
    heap = [0];
    k = 1;
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k, nums) {
        this.k = k;
        nums.forEach((i) => this.pushToHeap(i));

    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val) {
        this.pushToHeap(val);
        return this.heap[1];
    }

    pushToHeap(val) {
        this.heap.push(val);
        let i = this.heap.length - 1;

        while(i > 1 && this.heap[Math.floor(i/2)] > this.heap[i]) {
            let mark = this.heap[i];
            this.heap[i] = this.heap[Math.floor(i/2)];
            this.heap[Math.floor(i/2)] = mark;
            i = Math.floor(i/2);
        }

        if (this.heap.length > this.k + 1) {
            this.removeMin();
        }
    }

    removeMin() {
        let i = 1;
        this.heap[i] = this.heap.pop();

        while (i * 2 < this.heap.length) {
            let left = i * 2;
            let smallest = left;
            let right = i * 2 + 1;

            if (right < this.heap.length && this.heap[right] < this.heap[left]) {
                smallest = right;
            }

            if (this.heap[i] <= this.heap[smallest]) {
                break;
            }

            let mark = this.heap[i];
            this.heap[i] = this.heap[smallest];
            this.heap[smallest] = mark;

            i = smallest;
        }
    }
}
