

/*class Producto{


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
*/

//se traen los productos de la appi

const url = 'https://free-to-play-games-database.p.rapidapi.com/api/filter?tag=3d.mmorpg.fantasy.pvp&platform=pc';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'ac6ee7ca52msh82205c481b53ef7p15c67ajsn3b2b2c87693a',
		'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
	}
};



async function traerJuegos() {
    try {
        const respuesta = await fetch(url, options);
        const datos = await respuesta.json();
        const diezJuegos = datos.slice(0,10)
        return diezJuegos
    } catch (error) {
        console.error(error);
    }
    
}

function obtenerElementosLS(){
    const elementosGuardados = localStorage.getItem('elementosCarrito');
    return elementosGuardados ? JSON.parse(elementosGuardados) : [];
}

function guardarEnLS(){
    localStorage.setItem('elementosCarrito', JSON.stringify(elementosCarrito));
}


const contenedorProductos = document.getElementById("productos")

async function crearCards(){
    const datosJuegos = await traerJuegos();
    datosJuegos.forEach(juego =>{
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
        <h2>${juego.title}</h2>
        <img class = "img" src="${juego.thumbnail}" alt="foto">
        <p>${juego.short_description}</p>
        <p>${precio}</p>
                 
        `
        const btnCompra = document.createElement('button');
        btnCompra.textContent = 'comprar';
        btnCompra.addEventListener('click', () => agregarAlCarrito(juego));
        //<button class = "botonAgregar" data-id = ${juego.id}>agregar al carrito</button>
        contenedorProductos.appendChild(card)
        contenedorProductos.appendChild(btnCompra);
    })
}


const carrito = document.getElementById("carrito");
const productosCarrito = document.getElementById("productosCarrito");
const totalCompra = document.getElementById("totalCompra");
const confirmarCompra = document.getElementById('confirmarCompra');
const btnOscuro = document.getElementById('modoOscuro');
const body = document.querySelector('body');
let precioTotal = 0;
let precio = 40000;


const elementosCarrito = obtenerElementosLS();

//agregar productos al carrito

async function agregarAlCarrito(juego){
    elementosCarrito.push(juego);
    if (juego.id) {
        precioTotal += parseFloat(precio);
    }
    guardarEnLS();
   /* const itemExistente = elementosCarrito.find( item => item.id === idProducto);
    const datosJuegos = await traerJuegos();
    if (itemExistente) {
        itemExistente.cantidad++
        
    }else {
        const producto = datosJuegos.find(p => p.id === idProducto)
        if (producto) {
            elementosCarrito.push({...producto, cantidad: 1})
            const itemsCarrito = JSON.parse(localStorage.getItem('carrito')) || [];
            itemsCarrito.push({...producto, cantidad: 1});
            localStorage.setItem('carrito', JSON.stringify(itemsCarrito));
            renderizarCarrito();
        }
        
    };*/
    renderizarCarrito();
    
}



//eliminar del carrito:

function eliminarCarrito(idProducto){
   const indice = elementosCarrito.findIndex(item => item.id === idProducto)
   // const itemsCarrito = JSON.parse(localStorage.getItem('carrito')) || [];

    if (indice != -1) {
        elementosCarrito.splice(indice, 1);
        //itemsCarrito.splice(indice, 1);
        precioTotal = precio * elementosCarrito.length; ;
        totalCompra.textContent = precioTotal;
    }
    //localStorage.setItem('elementosCarrito', JSON.stringify(elementosCarrito));
    guardarEnLS();
    renderizarCarrito();
}

//mostrar en el carrito:

function renderizarCarrito(){
    
    productosCarrito.innerHTML = '';

    elementosCarrito.forEach(item =>{
        const li = document.createElement('li');
        li.classList.add('cardsCarrito');
        li.innerHTML = `

        <h2>${item.title}</h2>
        <img src="${item.thumbnail}" alt="">
        <p>${item.short_description}</p>
        <p>${precio}</p>

        `;
        //<p>${item.precio} x ${item.cantidad} - ${item.precio * item.cantidad}</p>

        const btnEliminar = document.createElement('button');
        btnEliminar.textContent = 'eliminar';
        btnEliminar.addEventListener('click', () => eliminarCarrito(item.id));
        li.appendChild(btnEliminar)
        productosCarrito.appendChild(li);
        precioTotal = precio * elementosCarrito.length;

    })

    totalCompra.textContent = precioTotal;
};

function comprar(){
    alert(`compra finalizada con exiti. Total: ${totalCompra.textContent}`);
    elementosCarrito.length = 0;
    precioTotal = 0;
    localStorage.clear('elementosCarrito');
    renderizarCarrito();
}

confirmarCompra.addEventListener('click', comprar);

/*contenedorProductos.addEventListener('click', function(evento){

    if (evento.target.classList.contains('botonAgregar')) {

        const idProducto = evento.target.getAttribute('data-id')
        agregarAlCarrito(juego);
        
    }
})*/

//renderizar productos del local storage.
window.addEventListener('load', () => {
    renderizarCarrito();
});



crearCards()

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