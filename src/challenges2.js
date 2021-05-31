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
  let count = 0;
  if(numbers.length != 11) {
    return "Array com tamanho incorreto.";
  } else {
    for(let i = 0; i < numbers.length; i += 1) {
      if(numbers[i] < 0) {
        return msg;
      } else if(numbers[i] > 9) {
        return msg;
      } else  {
        
        for(let k = 0; k < numbers.length; k += 1) {
            if(numbers[i] == numbers[k]) {
                count += 1;
            } else if(count >= 3) {
                return msg;
            }
        
      } 
    }
    }
  }
  return contato;
}
console.log(generatePhoneNumber([0, 2, 3, 4, 4, 2, 7, 8, 9, 9, 4]));

function lados(a,b,c) {
  if ((((a > (b + c)) || (b > (a + c)) || c > (a + b))) || (((a < Math.abs((b - c))) || (b < Math.abs((a - c))) || Math.abs((c < (b - a)))))) {
    return false;
  } else if (((a < (b + c)) && a > Math.abs((b - c)))  || ((b < (a + c)) && (b > Math.abs((a - c)))) || (c < (a + b)) && (c < Math.abs((b - a)))) {
    return true;
  }
}
// Desafio 12
function triangleCheck(lineA,lineB,lineC) {
 return lados(lineA,lineB,lineC); 
}
console.log((triangleCheck(10, 14, 8)));

// Desafio 13
function hydrate(pedido) {
  let number = [1,2,3,4,5,6,7,8,9];
  let soma = 0;
  for(let i = 0; i < pedido.length; i += 1) {    
    for(let j = 0; j < number.length; j += 1) {
      if(pedido[i] == number[j]) {
        soma += number[j];
      }
    } 
  }
  if(soma == 1) {
    return `${soma} copo de água`
  } else {
    return `${soma} copos de água`
  }
}
console.log(hydrate("5 cerveja"));

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
