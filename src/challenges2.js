// Desafio 10
function techList(array, name) {
  if ( array.length == 0){
    return 'Vazio!'
  }
  let objt = {};
  let list = [];
  array = array.sort();
  for (let i = 0; i < array.length; i += 1){
    objt['name'] = name;
    objt['tech'] = array[i];
    list.push(objt)
    objt = {};
  };
  
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
