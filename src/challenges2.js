// Desafio 10
// Referência: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
// Referência: https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Objects/Basics
function techList(array, name) {
  array.sort();
  let arrayB = [];
  let result = arrayB;

  if (array.length > 0) {
    for (let index of array) {
      let objeto = {
        tech: index,
        name: name
      };
      arrayB.push(objeto);
    };
  } else {
    result = 'Vazio!';
  }
  return result;
};

// Desafio 11
function generatePhoneNumber(array) {

}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
    let check = false;
  
    if (lineA < (lineB + lineC) && lineA > Math.abs(lineB - lineC) &&
    lineB < (lineA + lineC) && lineB > Math.abs(lineA - lineC) && 
    lineC < (lineB + lineA) && lineC > Math.abs(lineB - lineA)) {
      check = true;
    }
    return check;
  };

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
