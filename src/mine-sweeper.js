const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
 function minesweeper(matrix) {
 
  const getXY = (x,y) => {
    //берем строку
    const row = matrix[y];
   //строка есть?
    if (row === undefined) return 0;
    //строка есть, берем х элемент из нее
   const value = row[x];
    //такого элемента нет => 0
    if (value === undefined) return 0;
    //попали в поле, мина есть, мины нет
    return value ? 1 : 0; 
  }
  
  const getMines = (x, y) => {
    // считаем мины 
    let mines = getXY(x-1, y-1)+
        getXY(x, y-1)+
        getXY(x+1, y-1)+
        getXY(x+1, y)+
        getXY(x+1, y+1)+
        getXY(x, y+1)+
        getXY(x-1, y+1)+
        getXY(x-1, y);
      
    return mines;
  }
  
const newMatrix = matrix.map((row,y) => row.map((col,x) => getMines(x, y)));

  return newMatrix;
}

module.exports = {
  minesweeper
};
