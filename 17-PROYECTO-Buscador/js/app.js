const marca = document.querySelector('#marca')
const year = document.querySelector('#year')
const minimo= document.querySelector('#minimo')
const maximo= document.querySelector('#maximo')
const puerta= document.querySelector('#puertas')
const transmision= document.querySelector('#transmision')
const color= document.querySelector('#color')

const resultado = document.querySelector('#resultado')

const max = new Date().getFullYear();
const min = max -10;


const datosBusqueda={
    marca:'',
    year:'',
    minimo:'',
    maximo:'',
    puertas:'',
    transmision:'',
    color:'',


}

//Eventos

document.addEventListener('DOMContentLoaded',()=>{
    mostrarAutos();

    //llena las opciones de años
    llenarSelect();

    llenarSelectMarca();


    llenarSelectMin();

    llenarSelectMax();

    llenarSelectTransmision()

    llenarSelectColor()

    llenarSelectPuerta()
})


//eventos para los select de busqueda
marca.addEventListener('change',e=>{
datosBusqueda.marca = e.target.value;
 console.log(datosBusqueda)
})


year.addEventListener('change',(e)=>{
    datosBusqueda.year = e.target.value;
    console.log(datosBusqueda)
})

minimo.addEventListener('change',(e)=>{
    datosBusqueda.minimo = e.target.value;
    console.log(datosBusqueda)
})



maximo.addEventListener('change',(e)=>{
    datosBusqueda.maximo = e.target.value;
    console.log(datosBusqueda)
})


puerta.addEventListener('change',(e)=>{
    datosBusqueda.puerta = e.target.value;
    console.log(datosBusqueda)
})



transmision.addEventListener('change',(e)=>{
    datosBusqueda.transmision = e.target.value;
    console.log(datosBusqueda)
})



color.addEventListener('change',(e)=>{
    datosBusqueda.color = e.target.value;
    console.log(datosBusqueda)
})


//funciones



function mostrarAutos(){
    autos.forEach(auto =>{
        const autoHTML =document.createElement('p')
        const  {marca,modelo,year,precio,puertas,color,transmision} = auto
        autoHTML.textContent=`
        marca: ${marca}- modelo: ${modelo}-año :${year}-precio : ${precio}-puertas : ${puertas}-color :${color}- transmision :${transmision}
        
        `
        resultado.appendChild(autoHTML)
    })

} 
//genera los años del select 
function llenarSelect(){

   for( let i = min; i <= max; i++){
       const opcion = document.createElement('option');
       opcion.value=i;
       opcion.textContent=i;
       year.appendChild(opcion)
     }

}


function llenarSelectMarca(){
    for( let i = 0 ; i <= marcas.length; i++){
        const opcion = document.createElement('option');
        opcion.value=marcas[i];
        opcion.textContent=marcas[i];
        marca.appendChild(opcion)
      }
}

function llenarSelectMin(){
    for( let i = 0 ; i <= precioMin.length; i++){
        const opcion = document.createElement('option');
        opcion.value=precioMin[i];
        opcion.textContent=precioMin[i];
        minimo.appendChild(opcion)
      }

}

function llenarSelectMax(){
    for( let i = 0 ; i <= precioMax.length; i++){
        const opcion = document.createElement('option');
        opcion.value=precioMax[i];
        opcion.textContent=precioMax[i];
        maximo.appendChild(opcion)
      }
   
}

function llenarSelectPuerta(){
    for( let i = 0 ; i <= puertas.length; i++){
        const opcion = document.createElement('option');
        opcion.value=puertas[i];
        opcion.textContent=puertas[i];
        puerta.appendChild(opcion)
      }
}

function llenarSelectTransmision(){
    for( let i = 0 ; i <= transmisiones.length; i++){
        const opcion = document.createElement('option');
        opcion.value=transmisiones[i];
        opcion.textContent=transmisiones[i];
        transmision.appendChild(opcion)
      }
   

}

function llenarSelectColor(){
    for( let i = 0 ; i <= colores.length; i++){
        const opcion = document.createElement('option');
        opcion.value=colores[i];
        opcion.textContent=colores[i];
        color.appendChild(opcion)
      }
}
//video17.5