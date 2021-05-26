// Desafio 10
function techList(arrayTech, name) {
  if (arrayTech.length <= 0) {
    return "Vazio!";
  } else {
    let arrayDeObjetos = [];
    for (let i in arrayTech.sort()) {
      arrayDeObjetos.push({
        tech: arrayTech[i],
        name: name,
      })
    }
    return arrayDeObjetos;
  }
}

// Desafio 11
// Caso algum dos números da array seja menor que 0, maior que 9 ou se repita 3 vezes ou mais, generatePhoneNumber deverá retornar a string "não é possível gerar um número de telefone com esses valores".
function generatePhoneNumber(arrayDeNumero) {

  function tem11Numeros (arrayDeNumero) {
    let verdadeiro = true
    if(arrayDeNumero.length != 11){
      verdadeiro = false
    }
    return verdadeiro
  }

  function existeNumeroMaiorQue9OuMenorQue0(arrayDeNumero) {
    let existe = false
    for (let i in arrayDeNumero){
      if (arrayDeNumero[i] > 9 || arrayDeNumero[i] < 0){
        existe = true
      }
    }
    return existe
  }

  function existeNumeroRepetido3VezesOuMais (arrayDeNumero) {
    let existe = false
    let letraTeste = ""
      for (let i in arrayDeNumero) {
        letraTeste = arrayDeNumero[i]
        let contador = 0
        for (let j in arrayDeNumero) {
          
          if (letraTeste === arrayDeNumero[j]) {
            contador += 1
          }
        }
        if (contador >= 3) {
          existe = true
        }
      }
   return existe
  }
  
  retorno = ""

  if (tem11Numeros(arrayDeNumero) === true && existeNumeroMaiorQue9OuMenorQue0(arrayDeNumero) === false && existeNumeroRepetido3VezesOuMais (arrayDeNumero) === false ){
    retorno = `(${arrayDeNumero[0]}${arrayDeNumero[1]}) ${arrayDeNumero[2]}${arrayDeNumero[3]}${arrayDeNumero[4]}${arrayDeNumero[5]}${arrayDeNumero[6]}-${arrayDeNumero[7]}${arrayDeNumero[8]}${arrayDeNumero[9]}${arrayDeNumero[10]}`
  } else if (tem11Numeros(arrayDeNumero) === true && existeNumeroMaiorQue9OuMenorQue0(arrayDeNumero) === true || existeNumeroRepetido3VezesOuMais (arrayDeNumero) === true ){
    retorno = 'não é possível gerar um número de telefone com esses valores'
  } else {
    retorno = "Array com tamanho incorreto."
  }
  
  return retorno
}


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
