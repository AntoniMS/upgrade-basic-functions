/* #8: Contador de repeticiones Crea una función que nos devuelva el número de 
veces que se repite cada una de las palabras que lo conforma:*/

const counterWords = [
  "code",
  "repeat",
  "eat",
  "sleep",
  "code",
  "enjoy",
  "sleep",
  "code",
  "enjoy",
  "upgrade",
  "code",
];

function repeatCounter(words) {
  let counter = [];

  for (let i = 0; i < words.length; i++) {
    if (words[i] in counter) {
      counter[words[i]]++;
    } else {
      counter[words[i]] = 1;
    }
  }
  return counter;
}

console.log(repeatCounter(counterWords));
