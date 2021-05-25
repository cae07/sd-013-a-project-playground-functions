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
let condicao = false;
function triangleCheck(l1, l2, l3) {
  if (l1 < (l2 + l3) && l1 > Math.abs(l2 - l3) && l2 < (l1 + l3) && l2 > Math.abs(l1 - l3) && l3 < (l1 + l2) && l3 > Math.abs(l1 - l2)){
  condicao = true;
}
  else {
  condicao = false;
  }
  return condicao;
}
console.log(triangleCheck(1, 14, 8));


// Desafio 13
// Fonte: https://stackoverflow.com/questions/1862130/strip-all-non-numeric-characters-from-string-in-javascript
function hydrate(input) {
input = input.replace(/\D/g, ''); 
  // Onde o '/D' acha todos os "nao numeros", o '/g' percorre TODA a string e o '.replace' substitui por espaços vazios
let inputSeparada = input.split("").map(Number);
// Fontehttps://stackoverflow.com/questions/15677869/how-to-convert-a-string-of-numbers-to-an-array-of-numbers
let sum = 0;
for (let index in inputSeparada){
  sum +=  inputSeparada[index];
}
let frase = "";
if (sum === 1){
  frase = sum + " copo de água";
}
else {
  frase = sum + " copos de água";
}
return frase;
}
console.log(hydrate("1 cerveja"));



module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};







