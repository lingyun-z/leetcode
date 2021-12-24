function getNext(p) {
  const next = new Array(p.length).fill(0);
  let i = 1;
  let now = 0;
  while (i < p.length) {
    if (p[now] === p[i]) {
      now += 1;
      next[i] = now;
      i++;
    } else if (now > 0) {
      now = next[now - 1];
    } else {
      next[i] = 0;
      now = 0;
      i++;
    }
  }

  return next;
}

function kmp(s, p) {
  const next = getNext(p);
  let i = 0;
  let j = 0;

  while (i < s.length) {
    if (s[i] === p[j]) {
      j++;
      i++;
    } else if (j > 0) {
      j = next[j - 1];
    } else {
      i++;
    }

    if (j === p.length) {
      return i - j;
    }
  }

  return -1;
}

console.log(kmp("aaaaacaaaaaaa", "aaaaaa"));
