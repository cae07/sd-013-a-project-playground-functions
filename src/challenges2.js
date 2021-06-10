// Desafio 10
function techList(techlist, name) {
  let newArr = [];
  if (techlist.length === 0) {
    return 'Vazio!';
  }
    techlist.sort();
  
  for (let index = 0; index < techlist.length; index += 1) {
    let newObject = {};
    newObject.tech = techlist[index];
    newObject.name = name;
    newArr.push(newObject);
  }
  
  return newArr;
}

// Desafio 11
function generatePhoneNumber(numbers) {
  let newTelephone = ['(']
  
  if (numbers.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let i of numbers) {
    let repetido = 0;
    for (let j of numbers) {
      if (i === j) {
        repetido += 1;
      }
    }
    if (repetido >= 3 || i < 0 || i > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  for (let index = 0; index < numbers.length; index += 1) {
    
    if (index === 1) {
      numbers[index] += ') ';
    } else if (index === 6) {
      numbers[index] = numbers[index] + '-';
    }
        newTelephone.push(numbers[index]);
  }
    return newTelephone.join('');
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let diferencaAB = Math.abs(lineA - lineB);
  let diferencaBC = Math.abs(lineB - lineC);
  let diferencaAC = Math.abs(lineA - lineC);
  if (lineA > (lineB + lineC)) {
    return false;
  } else if (lineB > (lineA + lineC)) {
    return false;
  } else if (lineC > (lineA + lineB)) {
    return false;
  }
  if (lineA < (lineB + lineC) && lineA > (diferencaBC)) {
    return true;
  } else if (lineB < (lineA + lineC) && lineB > (diferencaAC)) {
    return true;
  } else if (lineC < (lineA + lineB) && lineC > (diferencaAB)) {
    return true;
  }
}

// Desafio 13
function hydrate(string) {
  let regexPattern = /\d+/g;
  let getNumbers = string.match(regexPattern);
  let count = 0;

  for (let index in getNumbers) {
    count += Number(getNumbers[index]);
  }

  if (count === 1) {
    return `${count} copo de água`;
  } else {
    return `${count} copos de água`;
  }
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
