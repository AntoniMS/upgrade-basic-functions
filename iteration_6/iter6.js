/* Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados, 
en caso que existan los elimina para retornar un array sin los elementos duplicados.*/

const duplicates = [
  "sushi",
  "pizza",
  "burger",
  "potatoe",
  "pasta",
  "ice-cream",
  "pizza",
  "chicken",
  "onion rings",
  "pasta",
  "soda",
];
function removeDuplicates(duplicateElements) {
  let removed = [];
  for (let i = 0; i < duplicateElements.length; i++) {
    if (removed.includes(duplicateElements[i])) {
      removed.join(duplicateElements[i]);
    } else {
      removed.push(duplicateElements[i]);
    }
  }
  return removed;
}
console.log(removeDuplicates(duplicates));
