/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  let first = 0;
  let last = array.length - 1;
  while (first <= last) {
    const middle = Math.floor((first + last) / 2);
    const guess = array[middle];
    if (guess === value) {
      return middle;
    }
    if (guess > value) {
      last = middle - 1;
    } else {
      first = middle + 1;
    }
  }
  return 0;
  /* for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return i;
    }
  }
  return 0; */
}

module.exports = findIndex;
