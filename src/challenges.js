// Desafio 1
function compareTrue(boolean1, boolean2) {
  if (boolean1 === true && boolean2 === true) {
    return true;
  }
  else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(string) {
  let array = string.split(" ");
  return array;
}

// Desafio 4
function concatName(array) {
  let result = array[array.length - 1] + ', ' + array[0];
  return result;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = (wins * 3) + (ties);
  return points;
}

// Desafio 6
function highestCount(numbers) {
  let highestNumber = Math.max(...numbers);
  let highestRepeat = 0;

  for (let number of numbers) {
    if (number == highestNumber) {
      highestRepeat += 1;
    }
  }
  return highestRepeat;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distCat1 = 0;
  let distCat2 = 0;
  if (mouse > cat1 && mouse > cat2) {
    distCat1 = mouse - cat1;
    distCat2 = mouse - cat2;
    if (distCat1 < distCat2) {
      return "cat1";
    }
    else if (distCat1 > distCat2) {
      return "cat2";
    }
    else if (distCat1 == distCat2) {
      return "os gatos trombam e o rato foge";
    }
  }
  else if (mouse < cat1 && mouse < cat2) {
    distCat1 = cat1 - mouse;
    distCat2 = cat2 - mouse;
    if (distCat1 < distCat2) {
      return "cat1";
    }
    else if (distCat1 > distCat2) {
      return "cat2";
    }
    else if (distCat1 == distCat2) {
      return "os gatos trombam e o rato foge";
    }
  }
  else if (mouse > cat1 && mouse < cat2) {
    distCat1 = mouse - cat1;
    distCat2 = cat2 - mouse;
    if (distCat1 < distCat2) {
      return "cat1";
    }
    else if (distCat1 > distCat2) {
      return "cat2";
    }
    else if (distCat1 == distCat2) {
      return "os gatos trombam e o rato foge";
    }
  }
  else if (mouse < cat1 && mouse > cat2) {
    distCat1 = cat1 - mouse;
    distCat2 = mouse - cat2;
    if (distCat1 < distCat2) {
      return "cat1";
    }
    else if (distCat1 > distCat2) {
      return "cat2";
    }
    else if (distCat1 == distCat2) {
      return "os gatos trombam e o rato foge";
    }
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
