// Desafio 1
function compareTrue(n1, n2) {
  if (n1 === true && n2 === true) return true;
  return false;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(word) {
  let sentence = [];
  sentence = word.split(' ');
  return sentence;
}

// Desafio 4
function concatName(names) {
  let newName = `${names[(names.length) - 1]}, ${names[0]}`;
  return newName;
}

// Desafio 5
function footballPoints(wins, ties) {
  let total = (wins * 3) + (ties * 1);
  return total;
}

// Desafio 6
function highestCount(numbers) {
  let highest = Math.max(...numbers);
  let count = 0;
  for (const key in numbers) {
    if (highest === numbers[key]) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distCat1 = Math.abs(mouse - cat1);
  let distCat2 = Math.abs(mouse - cat2);
  if (distCat1 > distCat2) return 'cat2';
  else if (distCat2 > distCat1) return 'cat1';
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(numbers) {
  let phrase = [];
  for (const key in numbers) {
    if ((numbers[key] % 3) === 0 && (numbers[key] % 5) === 0) {
      phrase.push('fizzBuzz');
    } else if ((numbers[key] % 1) === 0 && (numbers[key] % 5) === 0) {
      phrase.push('buzz');
    } else if ((numbers[key] % 1) === 0 && (numbers[key] % 3) === 0) {
      phrase.push('fizz');
    } else { // ((numbers[key] / 3) != 0 || (numbers[key] / 5) != 0)
      phrase.push('bug!');
    }
  }
  return phrase;
}

// Desafio 9
function encode(vowel) {
  let sentence = [];
  for (const key in vowel) {
    sentence.push(vowel[key]);
    if (sentence[key] === 'a') {
      sentence[key] = 1;
    } else if (sentence[key] === 'e') {
      sentence[key] = 2;
    } else if (sentence[key] === 'i') {
      sentence[key] = 3;
    } else if (sentence[key] === 'o') {
      sentence[key] = 4;
    } else if (sentence[key] === 'u') {
      sentence[key] = 5;
    }
  }
  return sentence.join('');
}

function decode(vowel) {
  let sentence = [];
  for (const key in vowel) {
    sentence.push(vowel[key]);
    if (sentence[key] == 1) {
      sentence[key] = 'a';
    } else if (sentence[key] == 2) {
      sentence[key] = 'e';
    } else if (sentence[key] == 3) {
      sentence[key] = 'i';
    } else if (sentence[key] == 4) {
      sentence[key] = 'o';
    } else if (sentence[key] == 5) {
    sentence[key] = 'u';
    }
  }
  return sentence.join('');
}

// Desafio 10
function splitSentence(techList, name) {
  let orderedList = techList.sort();
  let obj = {tech: '', name: ''};
  let lista = [];
  for (const k in orderedList) {
    lista.push(obj.tech = orderedList[k],obj.name = name);
  } return lista;
}

// Desafio 11
function generatePhoneNumber (numbers) {
  function phoneNumbers (numbers) {
    let phoneNumber = [];
    if (numbers.length === 11) {
    phoneNumber[0] = '(';
    phoneNumber[1] = numbers[0];
    phoneNumber[2] = numbers[1];
    phoneNumber[3] = ')';
    phoneNumber[4] = ' ';
    phoneNumber[5] = numbers[2];
    phoneNumber[6] = numbers[3];
    phoneNumber[7] = numbers[4];
    phoneNumber[8] = numbers[5];
    phoneNumber[9] = numbers[6];
    phoneNumber[10] = '-';
    phoneNumber[11] = numbers[7];
    phoneNumber[12] = numbers[8];
    phoneNumber[13] = numbers[9];
    phoneNumber[14] = numbers[10];
   return `${phoneNumber.join('')}`;}
   else {
    return 'não é possível gerar um número de telefone com esses valores';
  }
}}
console.log(generatePhoneNumber([1,2,3,4,5,6,7,8,9,0,1]));

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
}
