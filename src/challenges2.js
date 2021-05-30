// Desafio 10
function techList() {
  // seu código aqui
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
function hydrate(array) {
  let regex = /\d+/g;
  let numString = array.match(regex);  
  let conta = 0;

  let numInteg = numString.map(function (result){
    let resultado = parseInt(result);
    return resultado
  })

  for (let index = 0; index < numInteg.length; index++) {
    conta += numInteg[index]
  }

  if (conta > 1){
    return `${conta} copos de água`;
  } 
  return `${conta} copo de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
