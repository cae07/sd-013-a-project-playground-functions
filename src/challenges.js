// Desafio 1
function compareTrue(value1, value2) {
  if (value1 && value2) {
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
  return str.split(' ', 3);
}

// Desafio 4
function concatName(arr) {
  return `${arr[arr.length - 1]}, ${arr[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  const eachWin = 3;
  const eachTie = 1;

  return wins * eachWin + ties * eachTie;
}

// Desafio 6
function highestCount(arr) {
  let count = 0;
  const highestNumber = Math.max(...arr);

  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === highestNumber) {
      count += 1;
    }
  }

  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  const distanceCat1 = Math.abs(mouse - cat1);
  const distanceCat2 = Math.abs(mouse - cat2);

  if (distanceCat2 < distanceCat1) {
    return 'cat2';
  }

  if (distanceCat1 < distanceCat2) {
    return 'cat1';
  }

  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(arr) {
  const newArr = [];

  for (let i = 0; i < arr.length; i += 1) {
    const value = arr[i];
    const divisibleBy3 = value % 3 === 0;
    const divisibleBy5 = value % 5 === 0;

    if (divisibleBy3 && divisibleBy5) {
      newArr.push('fizzBuzz');
    } else if (divisibleBy3) {
      newArr.push('fizz');
    } else if (divisibleBy5) {
      newArr.push('buzz');
    } else {
      newArr.push('bug!');
    }
  }

  return newArr;
}

// Desafio 9
function encode(str) {
  let newStr = str;

  for (let i = 0; i < str.length; i += 1) {
    switch (str[i]) {
      case 'a':
        newStr = newStr.replace('a', '1');
        break;

      case 'e':
        newStr = newStr.replace('e', '2');
        break;

      case 'i':
        newStr = newStr.replace('i', '3');
        break;

      case 'o':
        newStr = newStr.replace('o', '4');
        break;

      case 'u':
        newStr = newStr.replace('u', '5');
        break;
    }
  }

  return newStr;
}

function decode(str) {
  let newStr = str;

  for (let i = 0; i < str.length; i += 1) {
    switch (str[i]) {
      case '1':
        newStr = newStr.replace('1', 'a');
        break;

      case '2':
        newStr = newStr.replace('2', 'e');
        break;

      case '3':
        newStr = newStr.replace('3', 'i');
        break;

      case '4':
        newStr = newStr.replace('4', 'o');
        break;

      case '5':
        newStr = newStr.replace('5', 'u');
        break;
    }
  }

  return newStr;
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
