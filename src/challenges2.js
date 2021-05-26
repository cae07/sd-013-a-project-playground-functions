// Desafio 10
function techList(arrayTech , name) {
    let arrayObj = []
      for(let i = 0; i < arrayTech.length; i += 1) {
        let obj = {
          tech : "",
          name : name
        };
        obj.tech = arrayTech.sort()[i];
        arrayObj.push(obj);
    }
     if(arrayObj.length === 0) {
      return "Vazio!";
    } else {
        return arrayObj;
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
