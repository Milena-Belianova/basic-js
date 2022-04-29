const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
 class DepthCalculator {
  count = 1;
  depth = [];
  calculateDepth(arr, resetDepth = true) {
    if (resetDepth) {this.depth = []}
    arr.forEach((el) => {
      if (Array.isArray(el)) {
        this.count += 1;
        this.calculateDepth(el, false);
      }
    });

    this.depth.push(this.count);
    this.count = 1;
    return  Math.max(...this.depth);;
  }
}

module.exports = {
  DepthCalculator
};
