const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
 function deleteDigit(n) {
  
  const str = String(n);
  let arrMax = [];
 
  for (let i=0; i < str.length; i++) {
    //console.log(arrMax)
    arrMax.push(+(str.substring(0, i)+str.substring(i+1, str.length)));
  }

  return Math.max(...arrMax);
}

module.exports = {
  deleteDigit
};
