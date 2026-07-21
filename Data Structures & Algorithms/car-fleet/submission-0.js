class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const sortedPair = Array.from({ length: position.length }, (elem, i) => {
            return [
                position[i],
                speed[i],
            ]
        }).sort((a,b) => b[0]-a[0]);

        const stack = [];
        
        sortedPair.forEach((item, ind) => {
            const calcTimeToDestination = (target - item[0])/item[1];
            const lastCarTime = stack.length > 0 ? stack[stack.length - 1] : 0;

            if (calcTimeToDestination > lastCarTime) {
                stack.push(calcTimeToDestination);
            }
        })

        return stack.length;
    }
}
