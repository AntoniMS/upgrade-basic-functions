//#4: Calcular el promedio

const numbers = [12, 21, 38, 5, 45, 37, 6];

function average(numArray) {
  let plus = 0;
  for (let i = 0; i < numArray.length; i++) {
    plus = plus + numArray[i];
  }
  return plus / numArray.length;
}

console.log(average(numbers));
