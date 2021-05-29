// Desafio 10
function techList(nomesTech, nome) {
  let nomeTech = nomesTech.sort();
  let tech = [];
    if (nomesTech.length === 0){
      return 'Vazio!';
    } else {
    for (let i in nomeTech){
      tech.push({tech: nomeTech[i], name: nome });
    }};
    return tech;
};

// Desafio 11
function generatePhoneNumber(telefone) {
  if (telefone.length !== 11){
    return "Array com tamanho incorreto.";
  };
  for (let numero of telefone) {
    let repetido = 0;
    for (let numeroRepetido of telefone) {
      if (numero === numeroRepetido) {
        repetido += 1;
      };
    };
    if (numero < 0 || numero > 9 || repetido >= 3) {
      return "não é possível gerar um número de telefone com esses valores";
    };
  };
  return "("+telefone[0]+telefone[1]+")"+" "+telefone[2]+telefone[3]+telefone[4]+telefone[5]+telefone[6]+"-"+telefone[7]+telefone[8]+telefone[9]+telefone[10];
};

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA > Math.abs(lineB-lineC) && lineB > Math.abs(lineA-lineC) && lineC > Math.abs(lineA-lineB)) {
    return true;
  };
  return false;
};

// Desafio 13
function hydrate(valor) {
  let listaNumero = valor.match(/[0-9]/g);
  let soma = 0;
    for(let numero of listaNumero){
      soma += Number(numero);
    };
    if(soma > 1){
      return soma + " copos de água";
    };
  return soma + " copo de água";
};

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
