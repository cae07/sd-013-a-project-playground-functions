// Desafio 1
function compareTrue(par1, par2) {
  if (par1 == true && par2 == true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
return (base*height)/2;
}

// Desafio 3
function splitSentence(sentence) {
  return sentence.split(" ");
}

// Desafio 4
function concatName(array) {
  return `${array[array.length -1]}, ${array[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins*3) + (ties);
}

// Desafio 6
function highestCount(numbers) {
  highestnum = numbers[0];
  for (let indexhigh = 1; indexhigh < numbers.length; indexhigh += 1) {
    if (highestnum < numbers[indexhigh]) {
      highestnum = numbers[indexhigh];
    }
  }
  let countRepetition = 0;
  for (let indexrepetition = 0; indexrepetition < numbers.length; indexrepetition += 1) {
    if (highestnum == numbers[indexrepetition]) {
      countRepetition += 1;
    }
  }
  return countRepetition;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(cat1 - mouse) === Math.abs(cat2 - mouse)) {
    return "os gatos trombam e o rato foge";
  } else if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) {
    return "cat1";
  } else {
    return "cat2";
  }
}

// Desafio 8
function fizzBuzz(array) {
  let answer = [];
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] % 3 == 0 && array[index] % 5 == 0) {
      answer.push("fizzBuzz");
    } else if (array[index] % 3 == 0) {
      answer.push("fizz");
    } else if (array[index] % 5 == 0) {
      answer.push("buzz");
    } else {
      answer.push("bug!");
    }
  }
  return answer;
}

// Desafio 9
function encode(string) {
  for (let index = 0; index < string.length; index += 1) {
    if (string[index] == "a") {
      string[index] = 1;
    } else if (string[index] == "e") {
      string[index] = 2;
    } else if (string[index] == "i") {
      string[index] = 3;
    } else if (string[index] == "o") {
      string[index] = 4;
    }else if (string[index] == "u") {
      string[index] = 5;
    }
  }
  return string
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
