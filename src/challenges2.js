// Desafio 10
function techList(techlist, name) {
  let newArr = [];

  if (techlist.length === 0) {
    return 'Vazio!';
  }

  // ordenar o array recebido
  techlist.sort()
  
  for (let index = 0; index < techlist.length; index += 1) {
    let newObject = {};
    newObject.tech = techlist[index];
    newObject.name = name;
    newArr.push(newObject);
  }
  
  return newArr;
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
