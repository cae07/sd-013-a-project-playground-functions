const { compareTrue } = require('./challenges');

// Desafio 10
function techList(techArray, name) {
  let result = [];
  if (techArray.length <= 0) {
    result = 'Vazio!';
  } else {
    techArray = techArray.sort();
    for (let index = 0; index < techArray.length; index += 1) {
      let techObject = {
        tech: techArray[index],
        name: name
      }
      result.push(techObject);
    }
  }
  return result;
}

// Desafio 11
function generatePhoneNumber(telephoneNumber) {
  let result;
  if (telephoneNumber.length !== 11) {
    result = 'Array com tamanho incorreto.';
  } else {
    for (let index1 = 0; index1 < telephoneNumber.length; index1 += 1) {
      if (telephoneNumber[index1] < 0 || telephoneNumber[index1] > 9) {
        result = 'não é possível gerar um número de telefone com esses valores';
        break;
      } else {
        let amount = 0;
        for (let index2 = 0; index2 < 12; index2 += 1) {
          if (index1 === telephoneNumber[index2]) {
            amount += 1;
          }
          if (amount >= 3) {
            result = 'não é possível gerar um número de telefone com esses valores';
            break;
          }
        }
      }
      if (result === 'não é possível gerar um número de telefone com esses valores') {
        break;
      }
    }
    if (result === undefined) {
      result = [];
      for (let index = 0; index < telephoneNumber.length; index += 1) {
        result.push(telephoneNumber[index]);
      }
      result.splice(0, 0, '(');
      result.splice(3, 0, ')');
      result.splice(4, 0, ' ');
      result.splice(10, 0, '-');
      result = result.join('');
    }
  }
  return result;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA > Math.abs(lineB - lineC) && lineA < lineB + lineC) {
    if (lineB > Math.abs(lineA - lineC) && lineB < lineA + lineC) {
      if (lineC > Math.abs(lineA - lineB) && lineC < lineB + lineA) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  } else {
    return false;
  }
}

// Desafio 13
function hydrate(drinks) {
  let howManyDrinks = 0;
  let result;
  for (let index = 0; index < drinks.length; index += 1) {
    if (drinks[index] > 0 && drinks[index] < 10) {
      howManyDrinks += parseInt(drinks[index], 10);
    }
  }
  if (howManyDrinks === 0 || howManyDrinks === 1) {
    result = `${howManyDrinks} copo de água`;
  } else {
    result = `${howManyDrinks} copos de água`;
  }
  return result;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
