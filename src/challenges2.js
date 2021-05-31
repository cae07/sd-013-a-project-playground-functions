// Desafio 10
function techList(arr, name) {
  // seu código aqui
  let arrOrdered = arr.sort();
  let arrObject = [];
  if(arr.length > 0) {
    for(let index = 0; index < arr.length; index += 1){
      arrObject.push({
        'tech': arrOrdered[index],
        'name': name,
      });
    }return arrObject;
  }else {
    return 'Vazio!';
  }
}techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas')

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
