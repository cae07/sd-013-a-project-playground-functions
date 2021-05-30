// Desafio 10
function techList() {
  // seu código aqui
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA > (lineB + lineC) || lineA < Math.abs(lineB - lineC)) {
    return false;
  }
  if (lineB > (lineA + lineC) || lineB < Math.abs(lineA - lineC)) {
    return false;
  }
  if (lineC > (lineA + lineB) || lineC < Math.abs(lineA - lineB)) {
    return false;
  }
  return true;
}

// Desafio 13
function hydrate(array) {
  let regex = /\d+/g;
  let numString = array.match(regex);
  let conta = 0;

  let numInteg = numString.map(function (result) {
    let resultado = parseInt(result, 10);
    return resultado;
  });

  for (let index = 0; index < numInteg.length; index += 1) {
    conta += numInteg[index];
  }

  if (conta > 1) {
    return `${conta} copos de água`;
  }
  return `${conta} copo de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
