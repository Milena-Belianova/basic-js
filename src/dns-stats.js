const { NotImplementedError } = require('../extensions/index.js');

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

  const domStr = domains.join(" ");

  const findDomains = (url) => {
    const parts = url.split(".").reverse();
    const resArr = [];
    for (let i = 0; i < parts.length; i++) {
      let curDom = "";
      for (let j = 0; j <= i; j++) {
        curDom += "." + parts[j];
      }
      resArr.push(curDom);
    }
    return resArr;
  };
  
  Array.prototype.log = function(m) {console.log(m, this.toString()); return this};

  return domains
    .map(findDomains)
    .flat()
    .reduce((acc, cur)=> {
      acc[cur] = acc[cur] ? acc[cur] + 1 : 1;
      return acc;
    }, {});
}

module.exports = {
  getDNSStats
};
