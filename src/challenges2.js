// Desafio 10
function techList(techs, name) {
  if (techs.length === 0) {
    return 'Vazio!';
  }
  let techsSorted = techs.sort();
  let objects = [];
  for (let index = 0; index < techsSorted.length; index += 1) {
    objects.push({
      tech: techsSorted[index],
      name,
    });
  }
  return objects;
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate(string) {
  let array = string.match(/\d+/g);
  let qtdAgua = 0;
  for (let index = 0; index < array.length; index += 1) {
    let number = parseInt(array[index], 10);
    qtdAgua += number;
  }
  if (qtdAgua === 1) {
    return '1 copo de água';
  }
  return `${qtdAgua} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
