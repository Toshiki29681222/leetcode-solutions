/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let i = 0;
  let numsLength = nums.length;

  while (i < numsLength) {
    if (nums[i] === val) {
      nums[i] = nums[numsLength - 1];
      numsLength--;
    } else {
      i++;
    }
  }

  return numsLength;
};
