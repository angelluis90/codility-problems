// PROBLEM: MissingInteger
// DESCRIPTION: Find the smallest positive integer that does not occur in a given sequence.
// URL: https://app.codility.com/programmers/lessons/4-counting_elements/missing_integer/

function solution(A = []) {
    if (A.length === 0) return 1;

    // Create a new array that's ordered and with the numbers greater than 0
    A = [...new Set(A)].sort((a, b) => a - b).filter((e) => e > 0);
    const aLength = A.length;

    if (A[0] !== 1) return 1;

    for (let i = 0; i < aLength - 1; i++) {
        if (A[i] + 1 !== A[i + 1]) return A[i] + 1;
    }
    return aLength + 1;
}

console.log(solution([1, 3, 6, 4, 1, 2]));
console.log(solution([-1, -3]));
console.log(solution([]));
console.log(solution([1, 2, 3]));
console.log(solution([1, 2, 3, 4, 5, 6]));
