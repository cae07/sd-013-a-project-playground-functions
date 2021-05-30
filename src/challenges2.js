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
  let contato = `(${numbers.slice(0,2).join('')}) ${numbers.slice(2,7).join('')}-${numbers.slice(7,11).join('')}`;
  
  if(numbers.length != 11) {
    return "Array com tamanho incorreto.";
  } else {
    for(let i = 0; i < numbers.length; i += 1) {
      let count = 0;
      if(numbers[i] < 0) {
        return msg;
      } else if(numbers[i] > 9) {
        return msg;
      } else if((numbers.indexOf(numbers[i]) != i))  {
        count ++;
      } else  if(count >= 3) {
        return msg;
      }
    }
  }
  return contato;
}
console.log(generatePhoneNumber([5, 2, 8, 1, 5, 3, 7, 2, 8, 9, 0]));

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

function test() {
  let test = [1,2,3,4,5,4,5,7,5]
  let aux = 0;
  for(let i = 0; i < test.length; i += 1) {
    
  }
}