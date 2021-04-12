/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {{}}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const arr = str.split('');
  const arrLength = arr.length;
  let result = '';
  for (let i = 0; i < arrLength; i++) {
    if (arr[i] !== arr[i - 1] && arr[i] === arr[i + 1]) {
      let counter = arr.lastIndexOf(arr[i]) - i + 1;
      result += counter + arr[i];
      counter = 0;
    }
    if (arr[i] !== arr[i + 1] && arr[i] !== arr[i - 1]) result += arr[i];
  }
  return result;
}

module.exports = encodeLine;
