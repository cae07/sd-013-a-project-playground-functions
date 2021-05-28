// Desafio 10
function techList() {
  
  for (let key in listaTcnologia) {
    return listaTcnologia; 
 } 
 if (listaTcnologia === 0) {
   return 'Vazio!';
 }
}


// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {

   let lado1 = lineA;
   let lado2 = lineB;
   let lado3 = lineC;

   if (lado1 < (lado2 + lado3) && lado2 < (lado1 + lado3) && lado3 < (lado1 + lado2)) {
      return true;

   } 

   if (lado1 > (lado2 + lado3) || lado2 > (lado1 + lado3) || lado3 > (lado1 + lado2)) {
     return false;
   }
   
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
