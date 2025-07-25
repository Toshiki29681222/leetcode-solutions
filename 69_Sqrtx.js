/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  let left = 1;
  let right = x;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (mid ** 2 === x) return mid;

    if (mid ** 2 > x) {
      right = mid - 1;
      continue;
    }

    if (mid ** 2 < x) {
      left = mid + 1;
      continue;
    }
  }
  return right;
};
