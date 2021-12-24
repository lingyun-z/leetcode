function selectSort(nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] > nums[j]) {
        const tmp = nums[i];
        nums[i] = nums[j];
        nums[j] = tmp;
      }
    }
  }
  return nums;
}

function bubbleSort(nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    let flag = true;
    for (let j = 0; j < nums.length - 1 - i; j++) {
      if (nums[j] > nums[j + 1]) {
        tmp = nums[j];
        nums[j] = nums[j + 1];
        nums[j + 1] = tmp;
        flag = false;
      }
    }
    if (flag) {
      break;
    }
  }
  return nums;
}

function quickSort(nums) {
  if (nums.length < 2) return nums;
  const middle = nums[0];
  const left = [];
  const right = [];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < middle) {
      left.push(nums[i]);
    } else {
      right.push(nums[i]);
    }
  }

  return [...quickSort(left), middle, ...quickSort(right)];
}

function quickSort(nums) {
  if (nums.length < 2) return nums;
  const middle = nums[0];
  const left = [];
  const right = [];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < middle) {
      left.push(nums[i]);
    } else {
      right.push(nums[i]);
    }
  }

  return [...quickSort(left), middle, ...quickSort(right)];
}

function quickSort_1(nums) {
  let i = 1;
  let j = nums.length - 1;
  let x = 0;
  while (i < j) {
    while (i < j && nums[j] > nums[x]) j--;
    while (i < j && nums[i] < nums[x]) i++;
    const tmp = nums[i];
    nums[i] = nums[j];
    nums[j] = tmp;
  }
  const tmp = nums[x];
  nums[x] = nums[i];
  nums[i] = tmp;
}

console.log(quickSort([3, 6, 2, 1, 4, 5, 9, 8, 7]));
