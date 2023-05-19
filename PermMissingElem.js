// PROBLEM: PermMissingElem
// DESCRIPTION: Find the missing element in a given permutation.
// URL: https://app.codility.com/programmers/lessons/3-time_complexity/perm_missing_elem/

function solution(A = []) {
  A.sort((a, b) => a - b);

  if (A.length === 0) return 1;

  if (A[0] != 1) return 1;

  for (let i = 0; i < A.length - 1; i++) {
    if (A[i] + 1 != A[i + 1]) return A[i] + 1;
  }
  return A[A.length - 1] + 1;
}

console.log(solution([]));
console.log(solution([1]));
console.log(solution([1, 2, 3]));
console.log(solution([2, 3, 1, 5]));
