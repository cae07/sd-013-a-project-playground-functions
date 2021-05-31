// Desafio 10
function techList(tech, name) {
  // seu código aqui
  let msg = '';
  let arrayObj = [];
  let ordena = [];
  if (tech.length < 1) {
    msg = 'Vazio!';
  } else {
    ordena = tech.sort();
    for (let index = 0; index < ordena.length; index += 1) {
      let objeto = {
        tech: ordena[index],
        name: name,
      };
      arrayObj.push(objeto);     
    }
    msg = arrayObj;
  }
  return msg;
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  if (lineA < (lineB + lineC) && (lineA > Math.abs(lineB - lineC))) {
    if (lineB < (lineA + lineC) && (lineB > Math.abs(lineA - lineC))) {
      if(lineC < (lineB + lineA) && (lineC > Math.abs(lineB - lineA))) {
        return true;
      }
      else {
        return false
      }
    } else {
      return false
    }
  }
  else {
    return false;
  }
}
console.log(triangleCheck(10,14,50))

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
