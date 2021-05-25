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
function isDivisibleByThreeOnly(n) {
    return ( !(n % 3) && n % 5);
}

function isDivisibleByFiveOnly(n) {
    return ( !(n % 5) && n % 3);
}

function isDivisibleByThreeAndFive(n) {
    return ( !(n % 3) && !(n % 5));
}

function fizzBuzz(numbersArray) {
    for (let i = 0; i < numbersArray.length; i++) {
        if (isDivisibleByThreeAndFive(numbersArray[i])) {
            numbersArray[i] = 'fizzBuzz';
        } else if (isDivisibleByThreeOnly(numbersArray[i])) {
            numbersArray[i] = 'fizz';
        } else if (isDivisibleByFiveOnly(numbersArray[i])) {
            numbersArray[i] = 'buzz';
        } else {
            numbersArray[i] = 'bug!';
        }
    }

    return numbersArray;
}

// Desafio 9
var cipher = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5
}

function swap(obj) {
    let result = {};

    for (let key in obj) {
        result[obj[key]] = key;
    }

    return result;
}

function encode(str) {
    let stringArray = str.split('');

    for (let i = 0; i < stringArray.length; i++) {
        stringArray[i] = cipher[stringArray[i]] || stringArray[i];
    }

    return stringArray.join('');
}

function decode(str) {
    // `chipher` foi declarada com `var`, portanto
    // é possível acessá-la de dentro da função.
    let reversedCipher = swap(cipher);
    console.log(reversedCipher);
    let stringArray = str.split('');

    // Para cada letra da string:
    for (let i = 0; i < stringArray.length; i++) {
        // Se o elemento da esquerda for avaliado como `false`
        // (letra não consta em `cipher`, por exemplo) o elemento
        // da direita do operador `||` é retornado.
        stringArray[i] = reversedCipher[stringArray[i]] || stringArray[i];
    }

    return stringArray.join('');
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
