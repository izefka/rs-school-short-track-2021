/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const firstWord = s1.split('');
  const secondWord = s2.split('');
  let common = 0;
  for (let i = 0; i < firstWord.length; i++) {
    for (let j = 0; j < secondWord.length; j++) {
      if (firstWord[i] === secondWord[j]) {
        common++;
        secondWord.splice(j, 1);
        break;
      }
    }
  }
  return common;
}

module.exports = getCommonCharacterCount;
