// PROBLEM: TapeEquilibrium
// DESCRIPTION: Minimize the value |(A[0] + ... + A[P-1]) - (A[P] + ... + A[N-1])|.
// URL: https://app.codility.com/programmers/lessons/3-time_complexity/tape_equilibrium/

function solution(A = []) {
  if (A.length == 0) return 0;
  let totalSum = 0;
  for (let i = 0; i < A.length; i++) totalSum += A[i];

  let minSum = Number.MAX_SAFE_INTEGER;
  let currentSum = 0;
  let rest = 0;
  let aux = 0;

  for (let i = 0; i < A.length - 1; i++) {
    currentSum += A[i];
    rest = totalSum - currentSum;
    aux = Math.abs(currentSum - rest);
    minSum = aux < minSum ? aux : minSum;
  }

  return minSum;
}

let A = [];

for (let i = 1; i < 50; i++) {
  const el = Math.floor(Math.random() * i);
  A.push(el);
}

console.log(solution(A));
