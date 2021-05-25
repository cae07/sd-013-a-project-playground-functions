// Desafio 10
function techList(techs, name) {
  let list = [];

  const sortedList = techs.sort();

  if (techs.length === 0) {
    list = 'Vazio!';
  } else {
    for (let index = 0; index < techs.length; index += 1) {
      list.push({
        tech: sortedList[index],
        name
      });
    }
  }

  return list;
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
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
