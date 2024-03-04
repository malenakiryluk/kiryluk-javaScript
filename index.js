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

/*categoria = "basquet"

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


const arrayProductos = [

    new Producto ("1","zapatilla lebron", 200000,"basquet","Lebrone 17", "./imagenes/lebron17.jpg"),
    new Producto ("2","zapatilla curry", 150000,"basquet","curry 9", "./imagenes/curry9.jpeg"),
    new Producto ("3","zapatilla zoom", 100000,"running","nike zoom fly 5", "./imagenes/fly5.jpg"),
    new Producto ("4","zapatilla softride", 110000,"running", "softride sophia 5", "./imagenes/sophia5.webp"),
    new Producto ("5","zapatilla ligra", 98000,"tenis","adidas ligra 7", "./imagenes/ligra7.jpeg")

]



const contenedorProductos = document.getElementById("productos")

function crearCards(producto){
    producto.forEach(producto =>{
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
        <h2>${producto.nombre}</h2>
        <img class = "img" src="${producto.img}" alt="foto">
        <p>${producto.descripcion}</p>
        <p>${producto.precio}</p>
        <button class = "botonAgregar" data-id = ${producto.id}>agregar al carrito</button>

                            
        `

        contenedorProductos.appendChild(card)
    })
}

const carrito = document.getElementById("carrito");
const productosCarrito = document.getElementById("productosCarrito");
const totalCompra = document.getElementById("totalCompra");
const confirmarCompra = document.getElementById('confirmarCompra');
const btnOscuro = document.getElementById('modoOscuro');
const body = document.querySelector('body')

const elementosCarrito = [];

//agregar productos al carrito

function agregarAlCarrito(idProducto){
    const itemExistente = elementosCarrito.find( item => item.id === idProducto)
    if (itemExistente) {
        itemExistente.cantidad++
    }else {
        const producto = arrayProductos.find(p => p.id === idProducto)
        if (producto) {
            elementosCarrito.push({...producto, cantidad: 1})
            const itemsCarrito = JSON.parse(localStorage.getItem('carrito')) || [];
            itemsCarrito.push({...producto, cantidad: 1});
            localStorage.setItem('carrito', JSON.stringify(itemsCarrito));
            renderizarCarrito();
        }
        
    };
    renderizarCarrito();
}


//eliminar del carrito:

function eliminarCarrito(idProducto){
    const indice = elementosCarrito.findIndex(item => item.id === idProducto)
    localStorage.removeItem('carrito',JSON.stringify(idProducto));
    if (indice != -1) {
        elementosCarrito.splice(indice, 1)
    }
    renderizarCarrito()
}

//mostrar en el carrito:

function renderizarCarrito(){
    const elementosCarrito = JSON.parse(localStorage.getItem('carrito')) || [];
    productosCarrito.innerHTML = '';

    let precioTotal = 0;

    elementosCarrito.forEach(item =>{
        const li = document.createElement('li');
        li.classList.add('cardsCarrito');
        li.innerHTML = `

        <h2>${item.nombre}</h2>
        <img class = "img" src="${item.img}" alt="foto">
        <p>${item.descripcion}</p>
        <p>${item.precio} x ${item.cantidad} - ${item.precio * item.cantidad}</p>
        
        `;

        const btnEliminar = document.createElement('button');
        btnEliminar.textContent = 'eliminar';
        btnEliminar.addEventListener('click', () => eliminarCarrito(item.id));
        li.appendChild(btnEliminar)
        productosCarrito.appendChild(li);
        precioTotal+= item.precio * item.cantidad;
        console.log(`${item.precio}`);
    })

    totalCompra.textContent = precioTotal;
};

function comprar(){
    alert(`compra finalizada con exiti. Total: ${totalCompra.textContent}`);
    elementosCarrito.length = 0;
    renderizarCarrito();
}

confirmarCompra.addEventListener('click', comprar);

contenedorProductos.addEventListener('click', function(evento){

    if (evento.target.classList.contains('botonAgregar')) {

        const idProducto = evento.target.getAttribute('data-id')
        agregarAlCarrito(idProducto);
        
    }
})

//renderizar productos del local storage.
window.addEventListener('load', () => {
    renderizarCarrito();
});



crearCards(arrayProductos)

//modo oscuro

let oscuro
 
modoOscuro.addEventListener("click", (oscuro) =>{


    body.classList.toggle("oscuro") 

    if(body.classList.contains("oscuro")){
        modoOscuro.textContent = "Modo claro"
        oscuro = true;
        const modoOscuroJason = JSON.stringify(oscuro)
        localStorage.setItem("modoOscuro", modoOscuroJason);
    
    }
    else{
        modoOscuro.textContent = "Modo oscuro"
        oscuro = false;
        const modoOscuroJason = JSON.stringify(oscuro)
        localStorage.setItem("modoOscuro", modoOscuroJason);
    }
    
})



const getModoOscuro = localStorage.getItem("modoOscuro")
const modoOscuroParseado = JSON.parse(getModoOscuro)

if(modoOscuroParseado === true){
    body.classList.toggle("oscuro")
}