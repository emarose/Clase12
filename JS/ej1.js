/* Ejercicio Nº1
Escribe una función que sume que calcule la suma de dígitos de un número entero es decir la suma de todos sus dígitos.
Ejemplo: suma de dígitos (192) debería devolver 12 (1+9+2)
*/

function sumarDigitos(){ 
  let value = 15,
    sum = value
        .toString() //pasar numero a texto
        .split('') //separar los digitos
        .map(Number) //iterarlos
        .reduce(function (a, b) {
            return a + b; //sumarlos
        }, 0);

  console.log(sum);
}

sumarDigitos();