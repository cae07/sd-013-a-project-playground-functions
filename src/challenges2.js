// Desafio 10
function techList(myArray, nome) {
  msg = "Vazio!"

  if (myArray.length == 0) {
    return msg;    
  } else {

    let ordem = myArray.sort();
    let newArray = [];
    let obj;
  
    for (let i = 0; i < ordem.length; i += 1) {
      obj = {
      tech: ordem[i],
      name: nome
      };
      newArray.push(obj)
     };
    return newArray;
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