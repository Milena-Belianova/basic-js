const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
 function transform(arr) {
  if (!Array.isArray(arr))
    throw new Error("'arr' parameter must be an instance of the Array!");

  let transArr = [].concat(arr);
  let discardInd;

  transArr.forEach((el, ind, array) => {
    switch (el) {
      case "--discard-next":
        if(ind + 1 < array.length) {
          transArr.splice(ind+1, 1, 'heh')
          transArr.splice(ind, 1);
        } else {
          transArr.splice(ind, 1);
        }
       discardInd = ind;
        break;
      case "--discard-prev":
(ind-1 > 0 && ind-1 !== discardInd) ? transArr.splice(ind - 1, 2) : transArr.splice(ind, 1);
        break;
      case "--double-next":
        ind + 1 < array.length
          ? transArr.splice(ind, 1, array[ind + 1])
          : transArr.splice(ind, 1);
        break;
      case "--double-prev":
(ind-1 > 0 && ind-1 !== discardInd)
          ? transArr.splice(ind, 1, array[ind - 1])
          : transArr.splice(ind, 1);
        break;
      default:
        break;
    }
  });

  return transArr.filter(el => !["heh"].includes(el));
}

module.exports = {
  transform
};
