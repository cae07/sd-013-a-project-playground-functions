// Desafio 10
function techList(tech, name) {
  let list = [];

  for (let index in tech) {
    let order = tech.sort();
    let object = {
      tech: order[index],
      name: name
    }
    list.push(object);
  }
  if (list.length === 0) {
    return 'Vazio!'
  } else {
    return list;
  };
}

// Desafio 11
function generatePhoneNumber(input) {
  if (input.length != 11) {
    return "Array com tamanho incorreto.";
  }
  for (let index in input) {
    if (input[index] < 0 || input[index] > 9) {
      return "não é possível gerar um número de telefone com esses valores";
    }
  }
  for (let posicao in input) {
    let contador = 0;
    for (let index2 in input) {
      if (input[posicao] === input[index2]) {
        contador += 1;
        if (contador >= 3) {
          return "não é possível gerar um número de telefone com esses valores";
        }
      }
    }
  }
  return number = "(" + input[0] + input[1] + ")" + " " + input[2] + input[3] + input[4] + input[5] + input[6] + '-' + input[7] + input[8] + input[9] + input[10];
}



// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA < (lineB + lineC) && lineA > Math.abs(lineB - lineC)) {
    return true;
  } else if (lineB < (lineC + lineA) && lineB > Math.abs(lineA - lineC)) {
    return true;
  } else if (lineC < (lineB + lineA) && lineC > Math.abs(lineA - lineB)) {
    return true;
  } else {
    return false;
  }
}

// Desafio 13
function hydrate(string) {
  let drinks = string.match(/\d/g);
  let water = 0;

  for (let index = 0; index < drinks.length; index += 1) {
    water += +drinks[index];
  }
  if (water === 1) {
    return `${water} copo de água`;
  }
  return `${water} copos de água`;
}


module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
