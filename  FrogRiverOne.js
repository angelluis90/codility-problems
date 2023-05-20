// PROBLEM: FrogRiverOne
// DESCRIPTION: Find the earliest time when a frog can jump to the other side of a river.
// URL: https://app.codility.com/programmers/lessons/4-counting_elements/frog_river_one/

function solution(X, A = []) {
  if (A.length === 0 || X === 0) return -1;
  if (A.length === 1 && A[0] !== 1) return -1

  let holdValues = new Set();
  for (i = 0; i < A.length; i++) {
    if (A[i] <= X) holdValues.add(A[i]);
    if (holdValues.size == X) return i;
  }

  return -1;
}

console.log(solution(5, [5]));
console.log(solution(5, [1, 3, 1, 4, 2, 3, 5, 4]));
console.log(solution(5, [1, 3, 1, 4, 4, 3, 5, 4]));
console.log(solution(5, [1, 3, 1, 4, 4, 3, 6, 4]));
console.log(solution(2, [2, 2, 2, 2, 2]));
console.log(solution(3, [1, 3, 1, 3, 2, 1, 3]));
