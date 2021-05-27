// Desafio 1
function compareTrue(n1, n2) {

  if (n1 === true && n2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2);
}

// Desafio 3
function splitSentence(strIngs) {
  let arrAy = [];
  arrAy = strIngs.split(' ')
  return arrAy;
}

// Desafio 4
function concatName(palavra) {
  return palavra[palavra.length -1] + ", " + palavra[0]
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontuacao = 0;
	if (wins){
  	pontuacao += 3 * wins;
  }
  if (ties){
  	pontuacao += 1 * ties;
  }
  return pontuacao
}

// Desafio 6
function highestCount(vetor) {
  let cont=0;
  let num=0;
  let numMax = Math.max.apply(null, vetor)

  for(let j=0; j<vetor.length; j++){
	  if (numMax <= vetor[j]) {
  	  cont+=1;
		  num = numMax;
 	  }
  }
  return cont
}
// Desafio 7
function catAndMouse(mouse, cat1, cat2) {

}
// Desafio 8
function fizzBuzz(numes) {
  let palavras = [];
  
  for(let c = 0; c < numes.length; c += 1) {
    if(numes[c] % 3 == 0 && numes[c] % 5 == 0) {
      palavras.push('fizzBuzz')
      
    } else if(numes[c] % 5 == 0) {
      palavras.push('buzz');
      
    } else if ( (numes[c] % 3 == 0) ) {
      palavras.push('fizz');
      
    } else {
      palavras.push('bug!');
    }
  }
  return palavras;
}

// Desafio 9
function encode(palavra) {

}
function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
