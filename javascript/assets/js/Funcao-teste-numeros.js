//Funçao de calculo
function returnEvenValues(array) {
  let evenNums = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      evenNums.push(array[i]);
    } else {
      console.log(`${array[i]} não é par!`)
    }
  }
  console.log('Os numeros pares sao:', evenNums)
}

let array = [1, 2, 4, 5, 7, 8];
returnEvenValues(array);

//Manipupar elementos no html
document.getElementsByTagName('h1')
var heading1 = document.getElementsByTagName('h1')[0]
heading1.style.color = 'red'