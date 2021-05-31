// Desafio 10
function techList(tecno, nome) {
  // seu código aqui
  
  let result = tecno.sort();
  let array = [];

  
  for(let i = 0; i < result.length; i++){
    array.push({
      tech:result[i],
      name:nome
    })
  }
  if (array.length > 0){
    return array
  }else{
    return "Vazio!"
  }
}
    
    console.log(techList([], "Luan"))

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
