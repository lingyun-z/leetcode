/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function (n, trust) {
  let inDegree = new Array(n + 1).fill(0);
  let outDegree = new Array(n + 1).fill(0);

  trust.forEach(([self, trust]) => {
    outDegree[self]++;
    inDegree[trust]++;
  });

  for (let i = 1; i < n + 1; i++) {
    if (inDegree[i] === n - 1 && outDegree[i] === 0) return i;
  }

  return -1;
};

console.log(
  findJudge(3, [
    [1, 3],
    [2, 3],
    [3, 1],
  ])
);
