// Desafio 1
function compareTrue(valor1, valor2){
  if(valor1 == true && valor2 == true){
    return true;
    }else{
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let calcArea = (base * height)/2;
  return calcArea; 
}
console.log(calcArea(10,50));

// Desafio 3
function splitSentence(splitSentence){
  let separador = splitSentence.split(' ');
  return separador;
}

// Desafio 4
function concatName(array){
  for (let index = 0; index < array.length; index +=1) {
    concatName = array[array.length-1]+", "+array[0];    
  }
  return concatName;
}

// Desafio 5
function footballPoints(wins, ties){
  let totalPontos = (wins * 3) + (ties * 1);
  return totalPontos;
}


// Desafio 6
function highestCount(array){
  let maiorNumero = array[0];
  let numeroRepetido = 0;
  for (let index = 0; index < array.length; index +=1) {
    if(array[index] > maiorNumero){
      maiorNumero = array[index];
      numeroRepetido =1;
    }else if(array[index] == maiorNumero){
      numeroRepetido += 1;
    }
    
  }
    return(numeroRepetido);
  }

// Desafio 7
function catAndMouse(mouse, cat1, cat2){
  let distanciaCat1 = Math.abs(cat1-mouse);
  let distanciaCat2 = Math.abs(cat2-mouse);

  if (distanciaCat1 == distanciaCat2) {
    return ('os gatos trombam e o rato foge');
  } else if (distanciaCat1 > distanciaCat2) {
      return ('cat2');
    } else {
        return('cat1');
      }

 
}

// Desafio 8
function fizzBuzz(arrayfizzBuzz){
  let retorno = [];
  for(numero of arrayfizzBuzz){
    if(numero % 3 == 0 && numero % 5 == 0){
      retorno.push("fizzBuzz");
    }else if(numero % 3 ==0){
      retorno.push("fizz");
    }else if(numero % 5 == 0){
      retorno.push("buzz")
    }else{
      retorno.push("bug!");
    }
  }
  return retorno;
}


// Desafio 9
function encode(encodeString){
  let string = '';
  for(let index = 0;index < encodeString.length; index +=1){
    if(encodeString[index] == 'a'){
      string = string + '1';
      }else if(encodeString[index] == 'e'){
        string = string + '2'
        }else if(encodeString[index] == 'i'){
          string = string + '3';
          }else if(encodeString[index] == 'o'){
            string = string + '4'
            }else if(encodeString[index] == 'u'){
              string = string + '5'
              }else{
                 string = string + encodeString[index];
      }
  }  
  return (string)
}
function decode(encodeString){
  let string = '';
  for (let index =0;index < encodeString.length; index +=1){
    if(encodeString[index] == '1'){
      string = string +'a';
      }else if(encodeString[index] == '2'){
        string = string +'e';
        }else if(encodeString[index] == '3'){
          string = string +'i';
          }else if(encodeString[index] == '4'){
            string = string +'o';
            }else if(encodeString[index] == '5'){
              string = string +'u'
              }else{
                string = string + encodeString[index];
              }
  }
  return (string);
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
