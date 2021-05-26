// Desafio 1
function compareTrue(value1, value2) {
  if (value1 && value2) {
    return true;
  } else {
    return false;
  }
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
  let eachWin = 3;
  let eachTie = 1;
  return wins * eachWin + ties * eachTie;
}

// Desafio 6
function highestCount(arr) {
  let count = 0;
  let highestNumber = arr[0];

  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] > highestNumber) {
      highestNumber = arr[i];
    }
  }

  for (let j = 0; j < arr.length; j += 1) {
    if (arr[j] === highestNumber) {
      count += 1;
    }
  }

  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (cat2 < cat1 && cat2 >= mouse) {
    return 'cat2';
  } else if (cat1 < cat2 && cat1 >= mouse) {
    return 'cat1';
  } else {
    return 'os gatos trombam e o rato foge';
  }
}
console.log(catAndMouse(4, 4, 4));

// Desafio 8
function fizzBuzz(arr) {
  let newArr = [];

  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] % 3 === 0 && arr[i] % 5 === 0) {
      newArr.push('fizzBuzz');
    } else if (arr[i] % 3 === 0) {
      newArr.push('fizz');
    } else if (arr[i] % 5 === 0) {
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
