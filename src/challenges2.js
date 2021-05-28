// Desafio 10
function techList(listaTech, name) {
  let listaDeObjetos = [];
  listaTech.sort();

  if (listaTech.length <= 0) {
    return 'Vazio!';
  }
  for (let index = 0; index < listaTech.length; index += 1) {
    let nomes = {
      tech: listaTech[index],
      name,
    };

    listaDeObjetos.push(nomes);
  }

  return listaDeObjetos;
}
let lista = techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Gustavo');

console.log(lista);

// Desafio 11
function generatePhoneNumber(numbers) {
  let phoneNumber = []
  let contador = 0 ;
  
 for(let count = 0; count < numbers.length; count +=1){
  
  if(numbers.length != 11){
    return "Array com tamanho incorreto."
   } else if ((count < 0) || (count > 9)){
    return "não é possível gerar um número de telefone com esses valores"
   } else{
     return 

   
}
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]))

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if ((lineA < (lineB + lineC)) && (lineA > Math.abs(lineB - lineC))) {
    return true;
  } else if ((lineB < (lineA + lineC)) && (lineB > Math.abs(lineA - lineC))){
    return true;
  } else if ((lineC < (lineB + lineA)) && (lineC > Math.abs(lineA - lineB))){
    return true;
  } else {
    return false
  }
}

console.log(triangleCheck(10, 14, 8));

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
}