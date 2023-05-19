// PROBLEM: FrogJmp
// DESCRIPTION: Count minimal number of jumps from position X to Y
// URL: https://app.codility.com/programmers/lessons/3-time_complexity/frog_jmp/

function solution(X, Y, D) {
  return Math.ceil((Y - X) / D);
}

console.log(solution(10, 80, 30));