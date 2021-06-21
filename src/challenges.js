// Desafio 1
function compareTrue(a, b) {
  // seu código aqui
    if(a && b === true){
      return true;
    }else{
      return false
    }
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let area = (base * height)/2;
   return area;  

}

// Desafio 3
function splitSentence(s) {
  // seu código aqui
  r = s.split(" ", 10);
  return r;
}

// Desafio 4
function concatName(n) {
  // seu código aqui
   f = n[0];
   l = n[n.length - 1]
   
   return l + ", " + f;
}
// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(h) {

    // seu código aqui
    let aux = 0;
    var high = h[0];
    // descobre maior valor
    for(let i = 0; i < h.length; i++){
      if(high < h[i]){
        high = h[i];
      }
    }
    //conta quantidade que maior valor aparece
    for(let j = 0;j < h.length; j++){
      if(h[j] === high){
        aux = aux +1;
      }
    }
    return aux;
  }
// Desafio 7
function catAndMouse(mouse, cat1 , cat2) {
  // seu código aqui
  var d1 = Math.abs(cat1 - mouse);
  var d2 = Math.abs(cat2 - mouse);
  if(d1 === d2){
    return 'os gatos trombam e o rato foge';
  }else if(d1 > d2){
    return 'cat2';
  }else if(d1 < d2){
    return 'cat1';
  }

}

// Desafio 8
function fizzBuzz(n) {
  // seu código aqui
  var r=[]; 
  for(var i = 0;i < n.length; i++){
    if(n[i] % 3 === 0 && n[i] % 5 === 0){
      r.push("fizzBuzz");
      
    }else if (n[i] % 3 === 0) {
      r.push("fizz");
      
    }else if (n[i] % 5 === 0) {
      r.push("buzz");
      
    }else{
      r.push("bug!");
     
    }
    
  }
  return r;

}

// Desafio 9
function encode(n) {
 
  // seu código aqui
  n = n.replace('a','1');
  n = n.replace('a','1');
  n = n.replace('a','1');
  n = n.replace('e','2');
  n = n.replace('e','2');
  n = n.replace('e','2');
  n = n.replace('i','3');
  n = n.replace('i','3');
  n = n.replace('i','3');
  n = n.replace('o','4');
  n = n.replace('o','4');
  n = n.replace('o','4');
  n = n.replace('u','5');
  n = n.replace('u','5');
  n = n.replace('u','5');
  n = n.replace('u','5');
  return n;

}
function decode(n) {
  // seu código aqui
 n = n.replace('1','a');
 n = n.replace('1','a');
 n = n.replace('1','a');
 n = n.replace('2','e');
 n = n.replace('2','e');
 n = n.replace('2','e');
 n = n.replace('3','i');
 n = n.replace('3','i');
 n = n.replace('3','i');
 n = n.replace('4','o');
 n = n.replace('4','o');
 n = n.replace('4','o');
 n = n.replace('5','u');
 n = n.replace('5','u');
 n = n.replace('5','u');
 n = n.replace('5','u');

  return n;
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
