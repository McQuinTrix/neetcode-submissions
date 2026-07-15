class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
        const newR = intervals.sort((a,b) => a[0] - b[0]);

        return newR.reduce((prev, curr) => {
            console.log(prev, curr);
            if (!prev[0]) {
                return [curr];
            }

            const lastArray = prev[prev.length - 1];
            if (curr[0] >= lastArray[0] && curr[0] <= lastArray[1]) {
                console.log(prev[prev.length - 2], "<- prev - 2");
                const prevValues = prev.length > 1 ? [...prev.slice(0, -1)] : []
                
                return [
                    ...prevValues,
                    [
                        lastArray[0], 
                        Math.max(curr[1], lastArray[1])
                    ],
                ]
            } else {
                return [
                    ...prev,
                    curr
                ]
            }
        },[])
    }
}
