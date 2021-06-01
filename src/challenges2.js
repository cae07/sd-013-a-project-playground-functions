// Desafio 10
function techList(tech, nome) {
  let objectList = []
  tech = tech.sort();
  if (tech.length === 0) {
    return 'Vazio!';
  }
  for (let index = 0; index < tech.length; index += 1) {
    objectList.push({ tech: tech[index], name: nome });
  }
  return objectList;
}

// Desafio 11
function generatePhoneNumber(phoneNumber) {
  let numbers = '';
    if (phoneNumber.length !== 11) {
        return 'Array com tamanho incorreto.';
    }
    for (let index1 = 0; index1 < phoneNumber.length; index1 += 1) {
        let cont = 0;
        if (phoneNumber[index1] < 0 || phoneNumber[index1] > 9) {
            return 'não é possível gerar um número de telefone com esses valores';
        }
        for (let index2 = 0; index2 < phoneNumber.length; index2 += 1) {
            if (phoneNumber[index1] === phoneNumber[index2]) {
                cont += 1;
            }
            if (cont >= 3) {
                return 'não é possível gerar um número de telefone com esses valores';
            }
        }
    }
    for (let index2 = 0; index2 < phoneNumber.length; index2 += 1) {
        if (index2 === 0) {
            numbers += '(' + phoneNumber[index2];
        } else if (index2 === 1) {
            numbers += phoneNumber[index2] + ') ';
        } else if (index2 === 6) {
            numbers += phoneNumber[index2] + '-';
        } else
            numbers += phoneNumber[index2];
    }
    return numbers;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let checkLineA = lineA < lineB + lineC && (lineA > Math.abs(lineB - lineC));
    let checkLineB = lineB < lineA + lineC && (lineB > Math.abs(lineA - lineC));
    let checkLineC = lineC < lineB + lineA && (lineC > Math.abs(lineA - lineB)); 
     return checkLineA && checkLineB && checkLineC;
}


// Desafio 13
function hydrate(wish) {
  let number = [1,2,3,4,5,6,7,8,9];
  let soma = 0;
  for (let index1 = 0; index1 < wish.length; index1 += 1) {
    for (let index2 = 0; index2 < number.length; index2 += 1) {
      if (wish[index1] == number[index2]) {
        soma += number[index2];
      }
    }
  }
  if (soma == 1) {
    return `${soma} copo de água`;
  } else {
    return `${soma} copos de água`;
  }
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
}