// PRODUCTOS
const productos = [
    // electronica
    {
        id: "electronica-01",
        titulo: "Cargador Morty",
        imagen: "./recursos/imagenes/productos/electronica/cargador-morty.jpg",
        categoria: {
            nombre: "Cargador Morty",
            id: "electronica"
        },
        precio: 1000
    },
    // funkos
    {
        id: "funko-01",
        titulo: "Funko Pikle Rick",
        imagen: "./recursos/imagenes/productos/funkos/funko-pikle-rick.webp",
        categoria: {
            nombre: "Funkos",
            id: "funkos"
        },
        precio: 1000
    },
    {
        id: "funko-02",
        titulo: "Funko JERRY",
        imagen: "./recursos/imagenes/productos/funkos/funko-pop-jerry-smith-rick-and-morty.jpg",
        categoria: {
            nombre: "Funkos",
            id: "funkos"
        },
        precio: 1000
    },
    {
        id: "funko-03",
        titulo: "Funko SUMMER",
        imagen: "./recursos/imagenes/productos/funkos/funko-pop-summer-rick-y-morty.jpg",
        categoria: {
            nombre: "Funkos",
            id: "funkos"
        },
        precio: 1000
    },
    {
        id: "funko-04",
        titulo: "Funko UNITY",
        imagen: "./recursos/imagenes/productos/funkos/funko-unidad.jpg",
        categoria: {
            nombre: "Funkos",
            id: "funkos"
        },
        precio: 1000
    },

    // INDUMENTARIA
    {
        id: "medias-01",
        titulo: "Medias Rick",
        imagen: "./recursos/imagenes/productos/indumentaria/medias-rick.jfif",
        categoria: {
            nombre: "Indumentaria",
            id: "indumentaria"
        },
        precio: 1000
    },
    {
        id: "medias-02",
        titulo: "Medias RyM",
        imagen: "./recursos/imagenes/productos/indumentaria/medias-rym.jpg",
        categoria: {
            nombre: "Indumentaria",
            id: "indumentaria"
        },
        precio: 1000
    },
    {
        id: "mochila-01",
        titulo: "Mochila",
        imagen: "./recursos/imagenes/productos/indumentaria/mochilas-rick-y-mortyy.webp",
        categoria: {
            nombre: "Indumentaria",
            id: "indumentaria"
        },
        precio: 1000
    },
    {
        id: "pantuflas-01",
        titulo: "Pantuflas",
        imagen: "./recursos/imagenes/productos/indumentaria/pantunflas-rick-morty.jpg",
        categoria: {
            nombre: "Indumentaria",
            id: "indumentaria"
        },
        precio: 1000
    },
    
];
// LLAVEROS
// POSTERS
// TAZAS
// PROXIMAMENTE


// capturas
const contenedorProductos = document.querySelector("#contenedorProductos")
const botonesCategorias = document.querySelectorAll(".btn-categoria")

// funciones
function cargarProductos(productosElegidos){

    contenedorProductos.innerHTML =""
    productosElegidos.forEach (producto=>{
        const div = document.createElement("div")
        div.classList.add("producto")
        div.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="producto-detalles">
                <h3 class="producto-titulo" >${producto.titulo}</h3>
                <p class="producto-precio">$ ${producto.precio}</p>
                <button class="producto-agregar" id= ${producto.id}>AGREGAR</button>
            </div>
        `;
        contenedorProductos.append(div)
    })
}

cargarProductos(productos)

botonesCategorias.forEach(boton =>{
    boton.addEventListener("click", (e)=>{
        botonesCategorias.forEach(boton => boton.classList.remove("active"))
        e.currentTarget.classList.add("active")

        if(e.currentTarget.id != "todos"){
            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id) 
        cargarProductos(productosBoton)
        }else{
            cargarProductos(productos)
        }
        
    } )
})