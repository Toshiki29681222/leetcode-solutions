/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let result = [];
  const patern = { ")": "(", "}": "{", "]": "[" };
  // 先入れ先出し
  for (const char of s) {
    if (char === "(" || char === "{" || char === "[") {
      result.push(char);
    } else if (char in patern) {
      if (result.length === 0 || result[result.length - 1] !== patern[char]) {
        return false;
      }
      result.pop(char);
    } else {
      return false;
    }
  }
  // 最後にスタックが空ならOK
  return result.length === 0;
};
