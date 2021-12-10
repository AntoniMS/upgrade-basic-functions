/*Iteración #1: Buscar el máximo
Completa la función que tomando dos números como argumento devuelva el más alto. */

function highestNumber(numberOne, numberTwo) {
  if (numberOne > numberTwo) {
    console.log("Number one:",numberOne);
  } else if (numberOne < numberTwo) {
    console.log("Number two:",numberTwo);
  } else {
    console.log("Son iguales:",numberOne,numberTwo);
  }
}

highestNumber(24,8);
