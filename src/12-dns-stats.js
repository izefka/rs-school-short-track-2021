/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const dom = [];

  const res = {};

  for (let i = 0; i < domains.length; i++) {
    dom.push(domains[i].split('.'));
  }

  dom.forEach((item) => {
    let key = '';
    for (let i = item.length - 1; i >= 0; i--) {
      key += `.${item[i]}`;
      res[key] = res[key] ? (res[key] += 1) : 1;
    }
  });
  return res;
}

module.exports = getDNSStats;
