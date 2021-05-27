let array = [1, 2 ,3, 4, 9, 6, 7, 8, 9];
function highestCount(array) {
  let maiorValor = array[0];
  let vezesNumero = 0;

  for(let i = 0; i < array.length; i += 1) {
    if (maiorValor < array[i] ) {
      maiorValor = array[i]
    }
  }

  for(let i = 0; i < array.length; i += 1) {
    if (maiorValor === array[i] ) {
       vezesNumero += 1
    
  return vezesNumero;
  console.log(vezesNumero)
}
  highestCount(array)
