// Desafio 10
function techList(t, name) {
  // seu código aqui

  var lista = [];
  t = t.sort();
  
  if(t.length === 0){
    return 'Vazio!';
  }

  for(var i = 0; i < t.length; i++){
    lista.push({
      tech: t[i],
       name: name
      });
  }

  return lista;
}
  // Desafio 11
function generatePhoneNumber(f) {
  // seu código aqui

    var rep = 0;

    if(f.length !== 11){
      return "Array com tamanho incorreto.";
    }

    for (let i = 0; i < f.length; i++) {
      for (let j = i+1; j < f.length; j++) {
      if(f[i] < 0 | f[i] > 9 ){
        return "não é possível gerar um número de telefone com esses valores";
      }else if(f[i] == f[j]){
        rep++;
      }    
      
    }
      }// fim for
      if(rep > 3){
        return "não é possível gerar um número de telefone com esses valores";
      }else{
       return "("+f[0]+f[1]+")"+" "+f[2]+f[3]+f[4]+f[5]+f[6]+"-"+f[7]+f[8]+f[9]+f[10];
      }
    }


// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  let la = false;
  let lb = false;
  let lc = false;

  if(lineA < (lineB + lineC) && (lineA > Math.abs(lineB - lineC))){
    la = true;
  }
  
  if (lineB < (lineA + lineC) && (lineB > Math.abs(lineA - lineC))) {
   lb = true; 
  }

  if(lineC < (lineA + lineB)&& lineC > Math.abs(lineA - lineB)){
    lc = true;
  }

  return la && lb && lc;


}

// Desafio 13
function hydrate(frase) {
  // seu código aqui
  let reg = /\d+/g;
  let numero = frase.match(reg);
  var soma = 0;

  
  if(numero.length > 1){
    for (let index = 0; index < numero.length; index++) {
      soma = soma + parseInt(numero[index]);      
    }
  }
  
  if(soma != 0){
    return soma + " copos de água";
  }else if(numero > 1){
    return numero + " copos de água";
  }else{
    return numero + " copo de água";
  }

}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
}
