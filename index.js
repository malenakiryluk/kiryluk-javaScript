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

/*let acumulador = 0

for (let i = 2; i <=50; i++) {
    
    if (i % 2 == 0) {
        acumulador = acumulador + i;
    }
    
}

console.log(acumulador)*/





//Pre entrega 1.  Calculador de promedios de alumnos.


/*function calcularPromedios(nombre, notaUno, notaDos, notaTres) {
    
    let notaFinal = (notaUno + notaDos + notaTres) / 3

    if (notaFinal >= 7) {

        console.log(`El/la alumno/a ${nombre} aprobo con un promedio de ${parseInt(notaFinal)}`)
        
    } else {

        console.log(`El/la alumno/a ${nombre} no apruba ya que tiene un promedio de ${parseInt(notaFinal)}`)
        
    }

}

let nombreAlumno = prompt("ingrese el nombre del alumno")
let notaUno = parseInt(prompt("ingrese la primer nota:"))
let notaDos = parseInt(prompt("ingrese la segunda nota:"))
let notaTres = parseInt(prompt("ingrese la tercer nota:"))

calcularPromedios(nombreAlumno, notaUno, notaDos, notaTres)
*/


/*2- dado el siguiente array
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

Crea una funciÃ³n que filtre y retorne un nuevo array con solo los nÃºmeros pares.
*/

/*const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const nuemrosPares = []

function arrayPares(arrayNumeros, arrayNumerosPares){
    for (let i = 0; i < arrayNumeros.length; i++) {

        if (arrayNumeros[i] % 2 === 0) {
            arrayNumerosPares.push(arrayNumeros[i])
        }
        
    }

    return arrayNumerosPares
}

console.log(arrayPares(numeros,nuemrosPares));

*/

class Producto{


    constructor(id,nombre,precio,categoria,descripcion,img){

        this.id = id
        this.nombre = nombre
        this.precio = precio
        this.categoria = categoria
        this.descripcion = descripcion
        this.img = img

    }
}


const arraypProductos = [

    new Producto ("1","zapatilla lebron", 200000,"basquet","Lebrone 17", "url"),
    new Producto ("2","zapatilla curry", 150000,"basquet","curry 9", "url"),
    new Producto ("3","zapatilla zoom", 100000,"running","nike zoom fly 5", "url"),
    new Producto ("4","zapatilla softride", 110000,"running", "softride sophia 5", "url"),
    new Producto ("5","zapatilla ligra", 98000,"tenis","adidas ligra 7", "url")

]

categoria = prompt("¿Que categoria de zapatillas quiere ver? (basquet, running, tenis)")

const filtrarCategoria = function filtrarCategoria(productos){
    productos.forEach(producto => {
        if (categoria === producto.categoria) {
            console.log( `Nombre: ${producto.nombre}, precio: ${producto.precio}` )
        }else{
            console.log("por favor ingrese un acategoria valida: basquet, running, tenis")
        }

    });
}

filtrarCategoria(arraypProductos);


