// PROBLEM: PermCheck
// DESCRIPTION: Check whether array A is a permutation.
// URL: https://app.codility.com/programmers/lessons/4-counting_elements/perm_check/

// RESULT: 83%

function solution(A = []) {
  A.sort((a, b) => a - b);

  if (A.length === 0) return 0;
  if (A[0] !== 1) return 0;

  for (let i = 0; i < A.length - 1; i++) {
    if (A[i] + 1 !== A[i + 1]) return 0;
  }
  return 1;
}

console.log(solution([1, 1]));
console.log(solution([...Array(9)].map((e, k) => k + 1)));
console.log(solution([9, 5, 7, 3, 2, 7, 3, 1, 10, 8])); // FAIL
