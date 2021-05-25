// Desafio 10
// Fonte: https://ourcodeworld.com/articles/read/764/how-to-sort-alphabetically-an-array-of-objects-by-key-in-javascript
function techList(input, name){
  if(input.length === 0) {
    return 'Vazio!';
  }
  let conjunto = [];
  for(let index = 0; index < input.length; index += 1) {
    conjunto[index] = {
      tech: input[index],
      name: name, 
    }
  }
  conjunto.sort(function(a, b){
    let techA=a.tech, techB=b.tech;
    if (techA < techB)
        return -1
    if (techA > techB)
        return 1
    return 0
  })
    return conjunto;
}
console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], "Lucas"));

// Desafio 11
function generatePhoneNumber(input) {
  if (input.length != 11){
    return "Array com tamanho incorreto.";
  }
  for (let index in input){
    if (input[index] < 0 || input[index] > 9){
      return "não é possível gerar um número de telefone com esses valores";
    }
  }
  for (let posicao in input){
    let contador = 0;
    for (let index2 in input){
      if (input[posicao] === input[index2]){
        contador += 1;
      if (contador >= 3){
        return "não é possível gerar um número de telefone com esses valores";
      }
      }
    }
  }
  return number = "("+input[0]+input[1]+")"+" "+input[2]+input[3]+input[4]+input[5]+input[6]+'-'+input[7]+input[8]+input[9]+input[10];
}
console.log(generatePhoneNumber([1, 0, 4, 4, 2, 3, 7, 8, 9, 3, 1]));

  
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
