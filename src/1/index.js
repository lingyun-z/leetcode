/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const targetNums = new Map();
  nums.forEach((num, index) => {
    targetNums.set(num, index);
  });

  for (let i = 0; i < nums.length; i++) {
    if (targetNums.has(target - nums[i])) {
      const indexB = targetNums.get(target - nums[i]);
      if (indexB !== i) {
        return [i, indexB];
      }
    }
  }
};
