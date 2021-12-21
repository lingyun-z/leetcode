/**
 * @param {string} date
 * @return {number}
 */
var dayOfYear = function (date) {
  let res = 0;
  // const [year, month, day] = date.split("-").map((i) => Number(i));
  const year = Number(date.slice(0, 4));
  const month = Number(date.slice(5, 7));
  const day = Number(date.slice(8, 10));

  const isLeapYear = (year) => {
    return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
  };
  const dayOfMonth = [
    0,
    31,
    isLeapYear(year) ? 29 : 28,
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31,
  ];
  for (let i = 1; i < month; i++) {
    res += dayOfMonth[i];
  }
  return res + day;
};
console.log(dayOfYear("2004-03-01"));
