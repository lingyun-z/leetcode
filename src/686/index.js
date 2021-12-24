/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
var repeatedStringMatch = function (a, b) {
  if (b === "") return 0;
  return kmp(a, b);
};

function kmp(s, p) {
  const next = getNext(p);
  let i = 0;
  let j = 0;
  let x = 1;
  const limit = Math.floor(p.length / s.length) + 2;
  while (x <= limit) {
    if (s[i] === p[j]) {
      i++;
      j++;
    } else if (j > 0) {
      j = next[j - 1];
    } else {
      i++;
    }

    if (j === p.length) {
      return x;
    }

    if (i === s.length) {
      x++;
      i = 0;
    }
  }

  return -1;
}

function getNext(p) {
  const next = new Array(p.length).fill(0);
  let now = 0;
  let i = 1;
  while (i < p.length) {
    if (p[i] === p[now]) {
      now++;
      next[i] = now;
      i++;
    } else if (now > 0) {
      now = next[now - 1];
    } else {
      now = 0;
      next[i] = now;
      i++;
    }
  }
  return next;
}

console.log(repeatedStringMatch("aabaa", "aaab"));
// aabaaaabaa;
//     aaab;
