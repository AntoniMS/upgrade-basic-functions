/*#5: Calcular promedio de strings. Crea una función que reciba por parámetro un array y cuando 
es un valor number lo sume y de lo contrario cuente la longitud del string y lo sume. */
const mixedElements = [6, 1, "Rayo", 1, "vallecano", "10", "upgrade", 8, "hub"];

function averageWord(mixedArray) {
  let plus = 0;
  for (let i = 0; i < mixedArray.length; i++) {
    if (typeof mixedArray[i] === "number") {
      plus += mixedArray[i];
    } else {
      plus += mixedArray[i].length;
    }
  }
  return plus / mixedElements.length;
}

console.log(averageWord(mixedElements));
