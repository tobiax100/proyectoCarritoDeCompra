
//variables
const carrito = document.querySelector('#carrito')
const contenedorCarrito = document.querySelector('#lista-carrito tbody')
const vaciarCarrito = document.querySelector('#vaciar-carrito')
const listaCursos = document.querySelector('#lista-cursos')

let articulosCarrito = [];

//funcion donde voy a cargar todos los eventos del proyecto

cargarEvenlisteners();
function cargarEvenlisteners(){
    //cuando un curso es clickeado se agrega al carrito
    listaCursos.addEventListener('click',agregarCurso);

    carrito.addEventListener('click',eliminarCurso)
}

//funciones

function agregarCurso(e){
    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito')){
        cursoSeleccionado = e.target.parentElement.parentElement;
        leerDatosCurso(cursoSeleccionado)
    }

}

function eliminarCurso(e) {
  if (e.target.classList.contains('borrar-curso')) {
      const cursoId = e.target.getAttribute('data-id');

      articulosCarrito = articulosCarrito.filter(curso => cursoId !== curso.id )
      carritoHTML()
  }
}

function leerDatosCurso(curso){


    infoCurso={
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id : curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1 
    }
    console.log(infoCurso)

//revisa si un elemento ya existe en el
   const existe = articulosCarrito.some(curso => curso.id === infoCurso.id)
   if(existe){
    //actualizamos la cantidad
    const cursos = articulosCarrito.map(curso =>{
    if(curso.id === infoCurso.id){
      curso.cantidad++;
      return curso; //retorna el objeto acttualizado
    }else{
      return curso;// retorna los objetos q no son duplicados
    }

    });
    articulosCarrito = [...cursos]
    console.log(articulosCarrito)

   }else{
   //Agrega elementos al carrito
   articulosCarrito =[...articulosCarrito,infoCurso]

   }
console.log(existe)
    carritoHTML()
    // console.log(articulosCarrito)
}


function carritoHTML(){
  //limpiar el html
limpiarHTML()
 
 
  //recorre el carrito y genera html
articulosCarrito.forEach(curso =>{
    const{imagen,titulo,precio,cantidad,id} = curso
    const row = document.createElement('tr');
    row.innerHTML= `
    <td>
    <img src="${imagen}" width="100">
    </td>
    <td>
      ${titulo}
    </td>
    <td>
      ${precio}
    </td>
    <td>
      ${cantidad}
    </td>
    <td>
    <a href="#" class="borrar-curso" data-id="${id}"> X <a/>
    </td>
    `

    //agrega el html del carrito en el tbody
    contenedorCarrito.appendChild(row)
})
}


function limpiarHTML(){
  // contenedorCarrito.innerHTML='';

 while(contenedorCarrito.firstChild){
  contenedorCarrito.removeChild(contenedorCarrito.firstChild)
 }

}

vaciarCarrito.addEventListener('click',()=>{
  articulosCarrito = [];
  limpiarHTML();
})



