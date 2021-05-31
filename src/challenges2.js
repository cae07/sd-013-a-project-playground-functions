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
function triangleCheck(lineA, lineB, lineC) {
  if (checkParam(lineA, lineB, lineC) === true && checkParam(lineB, lineA, lineC) === true && checkParam(lineC, lineA, lineB) === true) {
    return true;
  } else {
    return false;
  }
}
function checkParam (param1, param2, param3) {
  if (param1 < (param2 + param3) && param1 > Math.abs((param2 - param3))) {
    return true;
  } else {
    return false;
  }
}
console.log(triangleCheck(10, 14, 8));

// Desafio 13
function hydrate(string) {
  let int = string.match(/[0-9]+/g);
  let sum = 0;
  for (let index = 0; index < int.length; index += 1) {
    sum += parseInt(int[index]);
  }
  if (sum === 1) {
    return `${sum} copo de água`;
  } else {
    return `${sum} copos de água`;
  }
}


module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
