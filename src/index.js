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
    let arr = [];
    let newArr = [];
    let kek = [];
    let start = 0;
    let end = 0;
    for (let i = 1; i <= expr.length / 10; i++) {
        start = (i - 1) * 10
        end = i * 10
        arr.push(expr.slice(start, end))
    }

    arr.forEach((elem) => {
        for (let j = 0; j < elem.length - 1; j += 2) {
            newArr.push((elem[j] + elem[j + 1]).replace('10', '.').replace('11', '-').replace('00', ' '))
        }
    })
    for (let k = 0; k < newArr.length - 4; k += 5) {
        kek.push(newArr[k] + newArr[k + 1] + newArr[k + 2] + newArr[k + 3] + newArr[k + 4])
        if (newArr[k + 1] == "*") { }
    }
    let result = [];
    kek.forEach((elem) => {
        for ([key, value] of Object.entries(MORSE_TABLE)) {
            if (elem.split(' ').join('') == key) {
                result.push(elem.replace(elem, value))
            }
        }
        if (elem.split(' ').join('') == '**********') {
            result.push(' ')
        }
    })
    return result.join('')
}

module.exports = {
    decode
}