// Desafio 10
function techList(array, name) {
  // seu código aqui
  let lista = [];
  array.sort();
  if(array.length > 0){
    for(let i=0; i < array.length; i+=1){
      let objeto = {
        tech: array[i],
        name: name
      };
      lista.push(objeto);
    } return lista;
  } else return "Vazio!";
}

// Desafio 11
function generatePhoneNumber(array) {
  // seu código aqui
  let formato = "";
  formato = '(' + array[0] + array [1] + ')' + " " + array[2]+ array[3]+ array[4]+ array[5]+ array[6] + '-' + array[7]+ array[8]+ array[9]+ array[10];
  if(array.length !== 11){
    return "Array com tamanho incorreto.";
  } else{
    for(let i=0; i < array.length; i+=1){
      let contador = 0;
      if(array[i] < 0 || array[i] > 9){
        return "não é possível gerar um número de telefone com esses valores";
      }   
      for(let i2=0; i2 < array.length; i2+=1){
        if(array[i] === array[i2]){
          contador +=1; 
          if(contador >= 3){
            return "não é possível gerar um número de telefone com esses valores";
          }
        }      
      } 
    } 
  } return formato;  
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui]
 let AbsLineA = Math.abs(lineA);
 let AbsLineB = Math.abs(lineB);
 let AbsLineC = Math.abs(lineC);
 let diferencaAbs = AbsLineA - AbsLineB - AbsLineC;
 if(AbsLineA + AbsLineB > AbsLineC && AbsLineA + AbsLineC > AbsLineB && AbsLineB + AbsLineC > AbsLineA){
    if (AbsLineA > diferencaAbs && AbsLineB > diferencaAbs && AbsLineC > diferencaAbs){
  return true;
  } else return false;  
 } return false;
}

// Desafio 13
function hydrate(string) {
  // seu código aqui
  let numbersOfString = /d+?/g;
  let match = numbersOfString.exec(string);
  let sum;
  for(let i=0; i < string.length; i+=1){
    

    

    
  } return match;
}  console.log(hydrate("1 cachaça, 5 cervejas e 1 copo de vinho"));

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
