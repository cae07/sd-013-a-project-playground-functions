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
      if (lineC < (lineB + lineA) && (lineC > Math.abs(lineB - lineA))) {
        return true;
      }
    } 
  }
  else {
    return false;
  }
}

// Desafio 13
function hydrate(str) {
  // seu código aqui
  let soma = 0;
  let msg = '';
  var numbers = str.match(/\d+/g).map(Number);
  for(let index = 0; index < numbers.length; index +=1) {
    soma += numbers[index];
  }
  if (soma > 1) {
    msg = `${soma} copos de água`;
  } else {
    msg = `${soma} copo de água`;
  }
  return msg;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
