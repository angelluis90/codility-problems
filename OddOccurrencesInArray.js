// PROBLEM: OddOccurrencesInArray
// DESCRIPTION: Find value that occurs in odd number of elements.
// URL: https://app.codility.com/programmers/lessons/2-arrays/odd_occurrences_in_array/

function solution(A) {
  if (A.length === 1) return A[0];

  A.sort();
  for (let i = 0; i < A.length; i += 2) {
    if (A[i] != A[i + 1]) {
      return A[i];
    }
  }
  return A[0];
}

console.log(solution([9, 3, 9, 3, 9, 7, 9]));
