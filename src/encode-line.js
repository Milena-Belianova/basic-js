const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {

  if (str === '') return '';
  const arr = str.split('');
  const newArr = [];
  let count = 0;
  
  const save = (c, count) => 
    newArr.push(`${count > 1 ? count : ''}${c}`)
  
  arr.forEach((c, ind) => {
    const prevChar = arr[ind-1];
    
    if (c !== prevChar && ind > 0) {
      save(prevChar, count);
      count = 0;
    }
    count +=1;
  });
  
  const lastChar = arr[arr.length - 1];
  save(lastChar, count);
   
  return newArr.join("");

}

module.exports = {
  encodeLine
};
