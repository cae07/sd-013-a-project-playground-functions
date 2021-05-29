// Desafio 10
function techList(list, name) {
  var arrayobj = []
  var listOr = list.sort()
  for (var i = 0; i < list.length; i++) {
    arrayobj.push({
      tech: listOr[i],
      name: name
    })
  }
  if (arrayobj.length < 1) {
    return 'Vazio!'
  }
  return arrayobj
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
