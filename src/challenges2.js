// Desafio 10

// função comparar para ordenar array
function comparar(a, b) {
  if(a.tech < b.tech) {
    return -1;
  } else {
    return true;
}
}

function techList(array, name) {
  let objectList = [];

    for (let index = 0; index < array.length; index++) {
      objectList.push({
      tech: array[index],
      name: name,
      }) 
    }
    // return objectList.sort(comparar);} //ordena os itens do array
  
    if(objectList.length !== 0){
    return objectList.sort(comparar);
    } else if (objectList.length === 0){
    return 'Vazio!'}
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
