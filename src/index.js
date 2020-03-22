const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
  result = [];
  
  let charStart = 0;
  let charStep = 10;
  let char = "";
  
    while (charStart <= expr.length) {
      let codeStart = 0;
      let codeStep = 2;
      let code = '';
      char = expr.substr(charStart, charStep);
      let charCode = [];
        while (codeStart <= char.length) {
         let code = char.substr(codeStart, codeStep);
            if (code === "10") {
              charCode.push(...".");
            }
            if (code === "11") {
              charCode.push(..."-");
            }
            if (code === "**") {
              charCode.push(..." ");
            }
          codeStart += codeStep;
        }
      charCode = charCode.join("");
      if ( charCode === "     " ) {
        result.push(" ");
      } else {
        result.push(MORSE_TABLE[charCode]);
      }
      charStart += charStep;
    }
  return result.join("");
}


module.exports = {
    decode
}