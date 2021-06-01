// Desafio 1
let a = true;
let b = true;
function compareTrue(a, b) {
if (a === true && b === true){
return  true;
} else {
return  false;  
}
}

// Desafio 2
let base = 10;
let height = 50;
function calcArea(base, height) {
return (base*height)/2; 
}

// Desafio 3
function splitSentence(sentence) {
let splits = sentence.split(' ');
return splits;  
}

// Desafio 4
function concatName(sentence) {
  let concat = sentence[sentence.length -1] + ", " + sentence[0];
  return concat;
}

// Desafio 5
function footballPoints(wins, ties) {
return (3*wins) + (1*ties);
}

// Desafio 6
function highestCount(numbers) {
  let major = Math.max(...numbers);
  let count = 0;
  for(let index = 0; index < numbers.length; index += 1) {
    if(major === numbers[index]) { 
    count++;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
let distance1 = Math.abs((cat1 > mouse) ? (cat1 - mouse):(mouse - cat1));
let distance2 = Math.abs((cat2 > mouse) ? (cat2 - mouse):(mouse - cat2));
if (distance1 < distance2) {
    return 'cat1';
  } else if (distance2 < distance1) {
    return 'cat2';
  } else if (distance2 === distance1) {
    return 'os gatos trombam e o rato foge';
  }
}
  
// Desafio 8
function fizzBuzz(diviNumber) {
  let ifDivi = [];
  for (let index = 0; index < diviNumber.length; index += 1) {
    if (diviNumber[index] % 3 === 0 && diviNumber[index] % 5 === 0) {
      ifDivi.push('fizzBuzz');
    } else if (diviNumber[index] % 5 === 0) {
      ifDivi.push('buzz');
    } else if (diviNumber[index] % 3 === 0) {
      ifDivi.push('fizz');
    } else {
      ifDivi.push('bug!');
    }
    }
    return ifDivi;
    }
  
// Desafio 9
function encode(lyricNumber) {
  let numberLyric = [];
  let param = { a : '1', e : '2', i : '3', o : '4', u : '5' }
    for (let index of lyricNumber) {
      numberLyric.push(index);
  }
    for (let [lyric, number] of Object.entries(param)) {
      for (let index2 = 0; index2 < numberLyric.length; index2 += 1) {
        if (lyric == numberLyric[index2]) {
         numberLyric[index2] = number;
      }
    }
  }
return numberLyric.join('');
    }
 

function decode(lyricNumber) {
  let numberLyric = [];
  let param = { a : '1', e : '2', i : '3', o : '4', u : '5' }
    for (let index of lyricNumber) {
      numberLyric.push(index);
  }
    for (let [lyric, number] of Object.entries(param)) {
      for (let index2 = 0; index2 < numberLyric.length; index2 += 1) {
        if (number == numberLyric[index2]) {
         numberLyric[index2] = lyric;
      }
    }
  }
return numberLyric.join('');
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
//teste