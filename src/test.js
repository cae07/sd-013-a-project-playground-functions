/* eslint-disable no-var */
/* eslint-disable comma-spacing */
/* eslint-disable editorconfig/editorconfig */

var list = [0, 0, 2, 3, 1]; 
 
 




console.log(getMaxOfArray([1,2,3]));

function getMaxOfArray(numArray) {
    return Math.max.apply(null, numArray);
}
  // my babe <3;
abc = false;
// eslint-disable-next-line no-undef
num = 3.0;
if (num % 3.0 === 0 && Number.isInteger(num)) {
  abc = true;
}
console.log(abc);

// teste
function substituir(elemento, substituto, variavel) {
  variavel.replace(elemento, substituto);  
  return variavel;
}
  
function teste(techArray, nome) {
  let itens = []; 
  for (i in techArray) {
    if (techArray[i]) {
      tech = {name: nome, 
      tech: techArray[i]}
      itens.push(tech)
    }
  }
  return itens;
}
console.log(teste(['javascript', 'python', 'penis'], 'breno'));

function abc(num1, num2) {
  // eslint-disable-next-line no-multi-assign
  let testando = this.num1 = num1; this.num2 = num2;
  return testando.num2;
}
console.log(abc(1, 2));

// eslint-disable-next-line vars-on-top
var pao = {};
pao = nome: 'breno'