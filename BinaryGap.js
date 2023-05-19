// PROBLEM: BinaryGap
// DESCRIPTION: Find longest sequence of zeros in binary representation of an integer.
// URL: https://app.codility.com/programmers/lessons/1-iterations/binary_gap/

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N) {
  let maxGap = 0;
  let zerosChain = "";
  const binary = Number(N).toString(2);

  for (let i = 0; i < binary.length; i++) {
    const char = binary[i];
    if (char === "1") {
      maxGap = zerosChain.length > maxGap ? zerosChain.length : maxGap;
      zerosChain = "";
    } else {
      zerosChain += char;
    }
  }
  return maxGap;
}

console.log(solution(132));