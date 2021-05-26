// Desafio 10
function techList(arrayTech, name) {
  if (arrayTech.length <= 0) {
    return "Vazio!";
  } else {
    let arrayDeObjetos = [];
    for (let i in arrayTech.sort()) {
      arrayDeObjetos.push({
        tech: arrayTech[i],
        name: name,
      })
    }
    return arrayDeObjetos;
  }
}

// Desafio 11
function generatePhoneNumber(arrayDeNumero) {
  retorno = ''
  if (arrayDeNumero.length != 11) {
    retorno += 'Array com tamanho incorreto.'
  } else {
    
  }
  return retorno
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
