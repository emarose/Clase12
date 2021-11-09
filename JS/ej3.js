/* Ejercicio Nº3
Escribir una función que genere un numero random y pregunte por prompt "Adivina un numero del 1 al 10"
hasta que acierte y muestre "Adivinaste el numero"*/
const log = console.log;
const randomNum = Math.floor(Math.random() * 10 + 1);


var input = parseInt(prompt("Adivine el numero de 1 a 10"));

log("random num: "+randomNum);
log("user op: "+input);
 
switch (input) {
  case (input < 1):
    log("El numero debe ser mayor a 1");
    var input = prompt("Adivine el numero de 1 a 10");
    break;

  case (input > 10):
    log("El numero debe ser menor a 10");
    var input = prompt("Adivine el numero de 1 a 10");
    break;

  case (input == randomNum):
    log(input+" S= "+randomNum)
    log("Adivinaste!");
    break;
}