// Desafio 1
function compareTrue(a, b) {
    if (a && b) {
        return true;
    }

    return false;
}

// Desafio 2
function calcArea(base, height) {
    return (base * height) / 2;
}

// Desafio 3
function splitSentence(str) {
    return str.split(' ');
}

// Desafio 4
function concatName(strArray) {
    return `${strArray[strArray.length - 1]}, ${strArray[0]}`
}

// Desafio 5
function footballPoints(wins, ties) {
    return (wins * 3) + ties;
}

// Desafio 6
function highestCount(numbersArray) {
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
    let highestNumber = Math.max(...numbersArray);

    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions#the_arrow_function_expression_%3E
    return numbersArray.filter(element => element === highestNumber).length;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/abs
    let cat1Distance = Math.abs(cat1 - mouse);
    let cat2Distance = Math.abs(cat2 - mouse);

    if (cat1Distance < cat2Distance) {
        return 'cat1';
    } else if (cat2Distance < cat1Distance) {
        return 'cat2';
    } else {
        return 'os gatos trombam e o rato foge';
    }
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
