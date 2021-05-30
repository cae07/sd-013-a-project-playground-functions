// Desafio 10
function techList() {
  // seu código aqui
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck(a, b, c) {
  if ( a < b+c && a > Math.abs(b-c)) {
    return true;
  }
   else if ( b < c+a && b > Math.abs(c-a)){
    return true;
  }
   else if ( c < b+a && c > Math.abs(b-a))
  {
    return true;
  }
   else {
    return false
  }
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
