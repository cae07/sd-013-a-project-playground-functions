// Desafio 10
function techList(technology,name) {
  let array = [];
  let aux = technology.sort()

  if(technology == "") {
    return "Vazio!";
  } else {

    for(let i = 0; i < aux.length; i += 1) { 
      array.push(
        obj = {
          tech : aux[i],
          name : name
        } 
      )    
    }
  }
  
  return array;
}
console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"],"Lucas"))
console.log(techList([],"Lucas"))

// Desafio 11
function generatePhoneNumber(numbers) {
  let msg = "não é possível gerar um número de telefone com esses valores";
  let count = 1;
  let contato = `(${numbers.slice(0,2).join('')}) ${numbers.slice(2,7).join('')}-${numbers.slice(7,11).join('')}`;
  if(numbers.length != 11) {
    return "Array com tamanho incorreto.";

  } else {

    for(let i = 0; i < numbers.length; i += 1) {
      if(numbers[i] < 0) {
        return msg;
      } else if(numbers[i] > 9) {
        return msg;
      } else if( numbers.indexOf(numbers.slice(1,11)[i]) != i ) {
        count ++;
      } else if(count >= 3) {
        return msg;
      }
    }
  }
  return contato;
}
console.log(generatePhoneNumber([0, 2, 3, 4, 4, 2, 7, 8, 9, 9, 4]));

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
