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
function removeDuplicates(elements) {
  let unique = [];
  for (let i = 0; i < elements.length; i++) {
    if (unique.includes(elements[i])) {
      unique.join(elements[i]);
    } else {
      unique.push(elements[i]);
    }
  }
  return unique;
}
console.log(removeDuplicates(duplicates));
