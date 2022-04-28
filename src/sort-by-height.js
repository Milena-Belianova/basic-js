const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let indArr = [];

  arr.forEach((num, ind, array) => {
    if (num === -1) indArr.push(ind);
  });

  let sortedArr = arr.filter((num) => num !== -1).sort((a, b) => a - b);

  indArr.forEach((ind) => sortedArr.splice(ind, 0, -1));
  return sortedArr;
}

module.exports = {
  sortByHeight
};
