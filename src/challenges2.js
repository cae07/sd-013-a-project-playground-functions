// Desafio 10
function techList(array, name) {
  let array0rdenado = array.sort();
  let array0bjetos = [];
  if (array.length === 0) {
    return 'vazio';
  } else {
    for(let index in array0rdenado){
      array0bjetos.push({
        tech: array0rdenado[index],
        name: name
      } );
    }
    return array0bjetos;
  }
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
