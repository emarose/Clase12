/* Ejercicio Nº2
Escriba una función que tome un string con una suma y devuelva su resultado como un número.
Deben sumarse dos números naturales(numeros enteros). La tarea de suma es una cadena de la forma '102 + 17'.
*/

const primerString = "200";
const segundoString = "50";

function sumarStrings(n1,n2){
  
  const sum = (+n1) + (+n2); // +(variable) str a num
    return console.log(sum)
}

sumarStrings(primerString,segundoString);