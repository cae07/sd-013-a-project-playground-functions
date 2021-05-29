// Desafio 10
function techList(listaTecnologia, nome) {
  let lista = [];
  
  listaTecnologia.sort();
  if (listaTecnologia.length !== 0){
    for (let index = 0; index < listaTecnologia.length; index += 1) {
      lista.push(
        {
          tech: listaTecnologia[index],
          name: nome 
        }
      );
    }
    return lista;
  }else {
    return 'Vazio!';
  }

}

// Desafio 11
function generatePhoneNumber(numero) {
  let armazenaNumero = numero;
  let contador = 0;
  let mascaraTelefone = ["(","","",")"," ","","","","","","-","","","",""];
  let numeroTelefone = "";

  if (numero.length !== 11) {
    return "Array com tamanho incorreto.";
  }
  for (let index = 0; index < numero.length; index += 1) {
    if (numero[index] < 0 || numero[index] > 9) {
      numeroTelefone = "não é possível gerar um número de telefone com esses valores"
    }
    for (let index2 = 0; index2 < armazenaNumero.length; index2 += 1) {
      if (armazenaNumero[index2] === numero[index]) {
        contador += 1;
      }
      if (contador >= 3) {
        numeroTelefone = "não é possível gerar um número de telefone com esses valores";
      }
    }
    contador = 0;
  }

  if (numeroTelefone === "") {
    for (let index = 0; index < numero.length; index += 1) {
      for (let index2 = 0; index2 < mascaraTelefone.length; index2 += 1) {
        if (mascaraTelefone[index2] === "") {
          numeroTelefone += numero[index];
          index += 1;
        }else {
          numeroTelefone += mascaraTelefone[index2];
        }
      }
      return numeroTelefone;
    }
  } else {
    return numeroTelefone;
  }

}
console.log(generatePhoneNumber([3, -2, 1, 9, -5, 0, 7, 4, 0, 6, 1]));
// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineC > (lineA + lineB) || lineA > (lineC + lineB) || lineB > (lineA + lineC)) {
    return false;
  } else {
    return true;
  }
}

// Desafio 13
function hydrate(frase) {
  let numerosString = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
  let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let contaAgua = 0;

  for (let index = 0; index < frase.length; index += 1) {
    for (let index2 = 0; index2 < frase.length; index2 += 1) {
      if (frase[index] === numerosString[index2]) {
        contaAgua += numeros[index2];
      }
    }
  }

  if (contaAgua > 1) {
    return contaAgua + " copos de água";
  } else {
    return contaAgua + " copo de água";
  }

}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
