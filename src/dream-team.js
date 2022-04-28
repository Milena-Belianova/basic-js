const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let resArr = [];
  if (!Array.isArray(members)) return false;
  
  const onlyMemNames = members.filter(name => typeof name === 'string');
  onlyMemNames.forEach(name => resArr.push(name.trim().toUpperCase().substr(0, 1)));
  return resArr.sort().join('');
}

module.exports = {
  createDreamTeam
};
