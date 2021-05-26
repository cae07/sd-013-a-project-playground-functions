// Desafio 10
function techList(techs, name) {
  let array = [];
  techs = techs.sort();
  
  for(item of techs) {
    let objeto = {
      tech: item,
      name: name
    };
    array.push(objeto);
  }

  if(array.length > 0) {
    return array;
  } else {
    return "Vazio!";
  } 
  
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
