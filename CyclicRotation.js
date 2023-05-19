// PROBLEM: CyclicRotation
// DESCRIPTION: Rotate an array to the right by a given number of steps.
// URL: https://app.codility.com/programmers/lessons/2-arrays/cyclic_rotation/

function solution(A, K) {
  if (A.length === 0) return A;

  let i = 1;
  let finalArray = [A.slice(-1)[0], ...A.slice(0, A.length - 1)];

  while (i < K) {
    finalArray = [
      finalArray.slice(-1)[0],
      ...finalArray.slice(0, finalArray.length - 1),
    ];
    i++;
  }

  return finalArray;
}

console.log(solution([2, 4, 6, 8, 0], 3));
