const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */

 let chain = [];
 const chainMaker = {
  getLength() {
    return chain.length;
  },
  addLink(value) {
    chain.push(`( ${value} )`)
    return chainMaker;
  },
  removeLink(position) {

      if (position > 0 && Number.isInteger(position) && position <= this.getLength()) {
        chain.splice(position - 1, 1);
        return chainMaker;
      }
      chain = [];
      throw new Error ('You can\'t remove incorrect link!');
  },
  reverseChain() {
    chain.reverse();
    return chainMaker;
  },
  finishChain() {
    const resChain = chain.join('~~');
    chain = [];
    return resChain;
  }
};

module.exports = {
  chainMaker
};
