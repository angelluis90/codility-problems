// PROBLEM: MaxCounters
// DESCRIPTION: Calculate the values of counters after applying all alternating operations: increase counter by 1; set value of all counters to current maximum.
// URL: https://app.codility.com/programmers/lessons/4-counting_elements/max_counters/

function solution(N, A = []) {
    if (N < 1 || A.length === 0) return [];

    let temp = 0;
    let maxValue = 0;
    let counter = new Array(N).fill(maxValue);
    let counterLength = counter.length;

    for (let i = 0; i < A.length; i++) {
        const j = A[i];
        if (j > N) {
            temp = maxValue;
        } else {
            if (counter[j - 1] < temp) counter[j - 1] = temp + 1;
            else counter[j - 1]++;
            maxValue = counter[j - 1] > maxValue ? counter[j - 1] : maxValue;
        }
    }

    for (let i = 0; i < counterLength; i++) {
        if (counter[i] < temp) counter[i] = temp;
    }

    return counter;
}

console.log(solution(5, [6, 6, 5, 6, 5, 6, 6]));
console.log(solution(5, [3, 4, 4, 6, 1, 4, 4]));
console.log(solution(5, [6]));
console.log(solution(1, [1]));
