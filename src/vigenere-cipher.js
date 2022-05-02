const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
 const getCode = (c) => {
  return c.toUpperCase().charCodeAt(0) - 65; //код А
}

const getCharFromCode = (code) => {
  return String.fromCharCode(code + 65);
}

const checkParam = (p1, p2) => {
  if (p1 === undefined || p2 === undefined) {
    throw new Error('Incorrect arguments!');
  }
}

class VigenereCipheringMachine {
  constructor(value = true) {
    this.direct = value;
  }
  
  encrypt(m, k) {
    
    checkParam(m, k);
    
    let i = 0;
    
    let codedMess = m.split('').map(c => {      
      const mj = getCode(c);   //0-26
      
      if (mj > 26 || mj < 0) return c;
      const kj = getCode(k[i % k.length]); //код ключа
      const cj = (mj + kj) % 26;
      const res = getCharFromCode(cj);
      //console.log({mj, kj, cj, res});
      i++;
      return res;
    });
    
    return (this.direct === false) ? codedMess.reverse().join('') : codedMess.join('');
  }
  
  decrypt(coded, k) {
    checkParam(coded, k);
    
    let i = 0;
    
    let message = coded.split('').map(c => {      
      const cj = getCode(c);   
      
      if (cj > 26 || cj < 0) return c;
      const kj = getCode(k[i % k.length]); //код ключа
      const mj = ((cj - kj) + 26) % 26; //прибавили 26, чтобы избежать отриц. значений
      const res = getCharFromCode(mj);
      //console.log({mj, kj, cj, res});
      i++;
      return res;
    });
    
    return (this.direct === false) ? message.reverse().join('') : message.join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
