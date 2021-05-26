// Desafio 10
function techList(arrayTech, name) {
  arrayTech.sort()
  let list = [];
  let techObject = {
    tech: '',
    nome: name,
  }

  for (let index = 0; arrayTech.length > index; index += 1) {
    if (arrayTech[index] !== '') {
      techObject['tech'] = arrayTech[index];
      console.log (techObject)

      
      list.push (techObject)
    }else {
      list.push('Vazio!')
      break
    }
  }

  console.log (list)
}
techList (['CSS','HTML'],'Felipe')

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
