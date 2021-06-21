// Desafio 10
function techList(techList, nome){
  let techListName = [];
  for(let listTechnology of techList.sort()){
    techListName.push(
      {
      tech: listTechnology,
      name: nome
      });
  }
   if(techList.length > 0){
    return techListName;
  } else return 'Vazio!';
};

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
