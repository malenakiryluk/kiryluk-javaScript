/*let numero1 = prompt("ingrese un numero:")
let numero2 = prompt("ingrese otro numero:")
let operacion = prompt("que desea hacer con estos numeros? (sumarlos, restarlos, multiplicarlos")

 if (operacion == "sumarlos") {
     console.log(numero1 + numero2)
 }else if (operacion == "restarlos") {
     console.log(numero1 - numero2)
 }else if (operacion == "multiplicacion") {
     console.log(numero1 * numero2)
 }else{
     console.log("la operacion no es valida :)")
 }
*/

/*
ejercicio numero dos

let secretNum = 8
let numero = prompt ("Ingrese un numero:")

while (secretNum != numero) {
    
    if (numero < secretNum ) {
        console.log("prueba con un numero mayor")
    }else {
        console.log("prueba con un numero menor")
    }

    numero = prompt("ingresa otro numero: ")

}

console.log("Adivinaste el numero :)")
*/

//ejercicio 1: 

let acumulador = 0

for (let i = 2; i <=50; i++) {
    
    if (i % 2 == 0) {
        acumulador = acumulador + i;
    }
    
}

console.log(acumulador)