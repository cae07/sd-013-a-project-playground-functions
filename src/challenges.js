// Desafio 1
function compareTrue(x, y) {
  same = false;
  
  if (x && y) {
    same = true;
  }

  return same;
}

// Desafio 2
function calcArea(base, height) {
  return 0.5 * base * height
}

// Desafio 3
function splitSentence(string) {
  child = "";
  splitArray = [];
  for (let c of string) {
    if (c != " ") {
      child += c;
      string = string.substring(1)
    } if ((string.indexOf(c) == string.length - 1) || (c == " ")) {
      splitArray.push(child);
      child = "";
    }
  }
  return splitArray
}

// Desafio 4
function concatName(fullName) {
  lastName = fullName[fullName.length -1];
  firstName = fullName[0];
  return lastName + ", " + firstName;
}

// Desafio 5
function footballPoints(wins, ties) {
  return 3 * wins + ties;
}

// Desafio 6
function highestCount(array) {
  highestValue = array[0];
  count = 0;
  for (let i of array) {
    if (i > highestValue) {
      highestValue = i;
    }
  }
  for (let i of array) {
    if (i == highestValue) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(mouse - cat1) == Math.abs(mouse - cat2)) {
    return "os gatos trombam e o rato foge"
  } else if ((Math.abs(mouse - cat1) < Math.abs(mouse - cat2))) {
    return 'cat1';
  } else {
    return 'cat2';
  }
}

// Desafio 8
function fizzBuzz(array) {
  let result = [];
  for (let i of array) {
    if (i % 3 == 0 && i % 5 == 0) {
      result.push("fizzBuzz")
    } else if (i % 3 != 0 && i % 5 != 0) {
      result.push("bug!")
    } else if (i % 3 == 0) {
      result.push("fizz")
    } else if (i % 5 == 0) {
      result.push("buzz")
    }
  }
  return result;
}

// Desafio 9
function encode(string) {
  child = ""
  for (let i of string) {
    if (i == 'a') {
      child += 1;
    } else if (i == 'e') {
      child += 2;
    } else if (i == 'i') {
      child += 3;
    } else if (i == 'o') {
      child += 4;
    } else if (i == 'u') {
      child += 5;
    } else {
      child += i;
    }
  }
  return child;
}

function decode(string) {
  child = ""
  for (let i of string) {
    if (i == 1) {
      child += 'a';
    } else if (i == 2) {
      child += 'e';
    } else if (i == 3) {
      child += 'i';
    } else if (i == 4) {
      child += 'o';
    } else if (i == 5) {
      child += 'u';
    } else {
      child += i;
    }
  }
  return child;
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
