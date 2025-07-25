/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let i = 1;
  for (j = 1; j < nums.length; j++) {
    if (nums[i - 1] !== nums[j]) {
      nums[i] = nums[j];
      i++;
    }
  }
  return i;
};
