// Desafio 10
function techList(techNames, name) {
  let techObject = {};
  let techArray = [];
  if (techNames[0] === undefined) {
    return 'Vazio!';
  }
  for (let index of techNames) {
    techObject['tech'] = index;
    techObject['name'] = name;
    techArray.push(techObject);
    techObject = {};
  }
  return techArray.sort(function (a, b) {
    if (a.tech.toLowerCase() < b.tech.toLowerCase()
    ) return -1;
    if (a.tech.toLowerCase() > b.tech.toLowerCase()
    ) return 1;
    return 0;
  });
}

// Desafio 11
function generatePhoneNumber(arrayNumber) {
  let check = arrayCheck(arrayNumber);
  let number = [];
  if (check != undefined) {
    return check;
  }
  for (let index = 0; index < 2; index += 1) {
    if (index == 0) {
      let parenthesesR = '(';
      number.push(parenthesesR + arrayNumber[index]);
    } else if (index == 1) {
      let parenthesesL = ')';
      number.push(arrayNumber[index] + parenthesesL);
    }
  }
  for (let index = 2; index < arrayNumber.length; index += 1) {
    if (index == 2) {
      let space = ' ';
      number.push(space + arrayNumber[index]);
    } else if (index == 7) {
      let dash = '-';
      number.push(dash + arrayNumber[index]);
    } else {
      number.push(arrayNumber[index]);
    }
  }
  return number.join('');
}
function arrayCheck (arrayCheck) {
  let count = 0;
  if (arrayCheck.length != 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let index = 0; index < arrayCheck.length; index += 1) {
    if (arrayCheck[index] < 0 || arrayCheck[index] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    for (let index2 = 0; index2 < arrayCheck.length; index2 += 1) {
      if (arrayCheck[index] == arrayCheck[index2]) {
        count += 1;
      }
      if (count >= 3) {
        return 'não é possível gerar um número de telefone com esses valores';
      }
    }
    count = 0;
  }
}
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1],));
// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
