/**
 * @param {number[]} houses
 * @param {number[]} heaters
 * @return {number}
 */
var findRadius = function (houses, heaters) {
  let res = 0;
  for (let house of houses) {
    let minD = 10e9;
    for (let heater of heaters) {
      const distance = Math.abs(house - heater);
      minD = Math.min(distance, minD);
    }
    res = Math.max(res, minD);
  }
  return res;
};

/**
 * @param {number[]} houses
 * @param {number[]} heaters
 * @return {number}
 */
var findRadius_1 = function (houses, heaters) {
  houses.sort((a, b) => a - b);
  heaters.sort((a, b) => a - b);

  let i = 0;
  let j = 0;
  let res = 0;
  while (i < houses.length && j < heaters.length) {
    let r = 0;
    if (houses[i] <= heaters[j]) {
      r = heaters[j] - houses[i];
      i++;
    } else if (j + 1 < heaters.length) {
      r = Math.min(houses[i] - heaters[j], heaters[j + 1] - houses[i]);
      houses[i] >= heaters[j + 1] ? j++ : i++;
    } else {
      r = houses[i] - heaters[j];
      i++;
    }
    res = Math.max(res, r);
  }
  return res;
};

console.log(findRadius_1([1, 2, 3, 4], [1, 4]));
