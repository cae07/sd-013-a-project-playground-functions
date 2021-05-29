// Desafio 10
function techList(array, name) {
  // seu código aqui
  let lista = [];
  array.sort();
  if(array.length > 0){
    for(let i=0; i < array.length; i+=1){
      let objeto = {
        tech: array[i],
        name: name
      };
      lista.push(objeto);
    } return lista;
  } else return "Vazio!";
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
