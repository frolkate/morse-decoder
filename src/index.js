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
    // write your solution here
    let words = [];
    let pos = 0;
    let rezult = '';
    let re = /(.{10}|.)/g;
    let Letters = [];
    let curLetter = '';

    words = expr.split('**********');

    for(let i = 0; i < words.length; i ++){
        Letters = words[i].match(re);
        for(let j = 0; j < Letters.length; j ++){
            pos = Letters[j].indexOf('1');
            for(let k = pos; k < 9; k +=2){
            if(Letters[j][k] == 1 && Letters[j][k + 1] == 0)  
             curLetter += '.';
             if(Letters[j][k] == 1 && Letters[j][k + 1] == 1)  
             curLetter += '-';
            }
          rezult += MORSE_TABLE[curLetter];
          curLetter = '';
        }
        rezult+=' ';
    }
  return rezult;
}


module.exports = {
    decode
}