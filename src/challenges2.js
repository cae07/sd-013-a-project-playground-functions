// Desafio 10
// Referência: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
function techList(arrayTech, name) {
  arrayTech.sort();
  let nome = name;
  let arrayEmp = [];

  if (arrayTech.length > 0) {
    for (let index of arrayTech) {
      let object = {
        tech: index,
        name: nome,
      }
      arrayEmp.push(object);
    }
  } else {
    arrayEmp = 'Vazio!';
  }
  return arrayEmp;
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
// Referência: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/abs
function triangleCheck(lineA, lineB,lineC) {  
  if (lineA < lineB + lineC && lineA > Math.abs(lineB - lineC)) {
    return true;
  }
  if (lineB < lineA + lineC && lineB > Math.abs(lineA - lineC)) {
    return true;
  }
  if (lineC < lineA + lineB && lineC > Math.abs(lineA - lineB)) {
    return true;
  } else {
    return false;
  }
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
