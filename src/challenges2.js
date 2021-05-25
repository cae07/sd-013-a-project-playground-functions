// Desafio 10
function techList(arrayTec, name) {
  // seu código aqui
  let arrayresultado = [];
  let obj = {
    tech:  "",
    name: ""
  }
  arrayTec.sort();
  for (let i = 0; i < arrayTec.length; i += 1) {
    arrayresultado.push( obj.tech = arrayTec[i],obj.name = name);
  }
  return arrayresultado;
}

// let arrayteste = ["React", "Jest", "HTML", "CSS", "JavaScript"];
// console.log(techList(arrayteste, "Lucas"))

// Desafio 11
function generatePhoneNumber(arrayTelefone) {
  // seu código aqui
  let resultado ='';
  let contador = 0
  let numeroAtual = 0;
  if (arrayTelefone.length < 11 || arrayTelefone.length > 11) {
    resultado = 'Array com tamanho incorreto.';
    return resultado
  }
  for (let i = 0; i < arrayTelefone.length; i += 1) {
    numeroAtual = arrayTelefone[i];
    if (i === 0) {
      resultado += '(';
    }
    if (i === 2) {
      resultado += ') ';
    }
    if (i === 7) {
      resultado += '-';
    }
    if(arrayTelefone[i] < 0 || arrayTelefone[i] > 9) {
      resultado = 'não é possível gerar um número de telefone com esses valores';
      break;
    } 
    for (let j = 0; j < arrayTelefone.length; j += 1) {
      if(numeroAtual === arrayTelefone[j]) {
        contador += 1;
      }
      if (contador >= 3) {
        resultado = 'não é possível gerar um número de telefone com esses valores';
        return resultado;
        break;
      }
    }
    resultado += arrayTelefone[i]
    contador = 0; 
  }
  return resultado
}

let arrayTeste = [5, 2, 8, 1, 5, 3, 7, 2, 8, 9, 0] ;
console.log(generatePhoneNumber(arrayTeste));
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
