const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
};

function decode(expr) {
  let script = {
    '10': '.',
    '11': '-',
    '*': ' ',
  };
  let mesArr = [];
  for (let i = 0; i < expr.length; i += 10) {
    mesArr.push(expr.slice(i, i + 10));
  }
  let mesArrTrimed = mesArr.map(function(el) {
    if (el.includes('*')) {
      el = '*';
    } else if (el.includes('0')) {
      el = el.replace(/^0+/, '');
    }
    return el;
  });
  let letters = [];
  for (let k = 0; k < mesArrTrimed.length; k++) {
    let letter = '';
    for (let j = 0; j < mesArrTrimed[k].length; j += 2) {
      let part = mesArrTrimed[k].slice(j, j + 2);
      letter += script[part];
    }
    letters.push(letter);
  }
  let decoded = '';
  for (let s = 0; s < letters.length; s++) {
    if (letters[s] === ' ') {
      decoded += letters[s];
    } else {
      decoded += MORSE_TABLE[letters[s]];
    }
  }
  console.log(decoded);
  return decoded;
}

module.exports = {
  decode,
};
