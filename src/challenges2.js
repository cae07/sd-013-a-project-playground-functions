// Desafio 10
function techList(arrayTec, nome ) {
  let arrayObj = []
  let arrayOrdenado = arrayTec.sort()
  if (arrayTec.length === 0) {
  return ("Vazio!")
  }else {
    for (let i = 0; i < arrayOrdenado.length; i++) {
      arrayObj.push({
        name: nome,
        tech: arrayOrdenado[i]
      })
      }
  }
 
  return arrayObj
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
