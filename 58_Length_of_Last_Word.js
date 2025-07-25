/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  const sTest = s.split(" ");
  console.log(sTest);
  if (sTest[sTest.length - 1].length === 0) {
    return sTest[sTest.length - 2].length;
  } else {
    return sTest[sTest.length - 1].length;
  }
};
