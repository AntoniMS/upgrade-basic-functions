/*#2: Buscar la palabra más larga 
Completa la función que tomando un array de strings como argumento devuelva el más largo, 
en caso de que dos strings tenga la misma longitud deberá devolver el primero. */

const avengers = [
  "Hulk",
  "Thor",
  "IronMan",
  "Captain A.",
  "Spiderman",
  "Captain M.",
];

function findLongestWord(word) {
  let longest = [''];
  for (let i = 0; i < word.length; i++) {
    if (word[i].length > longest.length) {
      longest = word[i];
    }
  }
  return longest;
}
console.log(findLongestWord(avengers));
