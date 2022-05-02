const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
 function repeater(str, options) {
  const separator = options.separator || "+";
  const additionSeparator = options.additionSeparator || "|";
  const string = String(str);
  let addition = options.addition;
  const repeatTimes = options.repeatTimes;
  const additionRepeatTimes = options.additionRepeatTimes;

  let additionStr = "";
  let repeatedStr = string;

if (addition === undefined) addition = "";  
if (typeof addition !== 'string') addition = String(addition);

  console.log(addition);
  
  if (additionRepeatTimes) {
    additionStr =
      (addition + additionSeparator).repeat(additionRepeatTimes - 1) + addition;
  } else {
    additionStr = addition;
  }
  console.log(additionStr);
  

  if (repeatTimes) {
    repeatedStr =
      (string + additionStr + separator).repeat(repeatTimes - 1) +
      (string + additionStr);
  } else {
    repeatedStr = string + additionStr;
  }

  return repeatedStr;
}


module.exports = {
  repeater
};
