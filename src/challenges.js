// Desafio 1
function compareTrue(a, b) {
  if (a === true && b === true) {
    return true
  } else {
    return false
  }
}

// Desafio 2
function calcArea(base, height) {
  let result = (base * height) / 2
  return result
}

// Desafio 3
function splitSentence(phrase) {
  phrase = phrase.split(" ")
  return phrase
}

// Desafio 4
function concatName(arrayStrings) {
  let first = arrayStrings[0]
  let last = arrayStrings[arrayStrings.length - 1]
  let result = `${last}, ${first}`
  return result
}

// Desafio 5
function footballPoints(wins, ties) {
  let result = (wins * 3) + ties
  return result
}

// Desafio 6
function highestCount(arrayNumber) {
  let highestTimes = 1
  let highestNumber = arrayNumber[0]
  for (let index = 1; index < arrayNumber.length; index += 1) {
    if (arrayNumber[index] > highestNumber) {
      highestTimes = 1
      highestNumber = arrayNumber[index]
    } else if (arrayNumber[index] == highestNumber) {
      highestTimes += 1
    }
  }
  return highestTimes
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let result;
  cat1 -= mouse
  if (cat1 < 0) {
    cat1 *= (-1)
  }
  cat2 -= mouse
  if (cat2 < 0) {
    cat2 *= (-1)
  }
  if (cat1 == cat2) {
    result = "os gatos trombam e o rato foge"
  } else if (cat1 > cat2) {
    result = "cat2"
  } else if (cat2 > cat1) {
    result = "cat1"
  }
  return result
}

// Desafio 8
function fizzBuzz(arrayNumber) {
  let result = []
  for (let index = 0; index < arrayNumber.length; index += 1) {
    if (arrayNumber[index] % 3 == 0 && arrayNumber[index] % 5 != 0) {
      result.push("fizz")
    } else if (arrayNumber[index] % 3 != 0 && arrayNumber[index] % 5 == 0) {
      result.push("buzz")
    } else if (arrayNumber[index] % 3 == 0 && arrayNumber[index] % 5 == 0) {
      result.push("fizzBuzz")
    } else {
      result.push("bug!")
    }
  }
  return result
}

console.log(fizzBuzz([2, 15, 7, 9, 45]));

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
