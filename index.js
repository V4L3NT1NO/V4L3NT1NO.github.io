function click_ion(){
    location.href = "./pcp_pagina_video.html";
}
function click_revolucion(){
    location.href = "./fracia_pcp_video.html";
}
function click_independencia(){
    location.href = "./revolucion_pcp_video.html";
}
function click_yaxar(){
    location.href = "./yaxar_pcp_video.html";
}

function click_inicio(){
    location.href = "./index.html";
}

var busqueda = document.getElementById("busqueda");


var poster_ion = document.getElementById("img_ion");
var poster_francia = document.getElementById("img_francia");
var poster_independencia = document.getElementById("img_independencia");
var poster_yaxar = document.getElementById("img_yaxar");

var lista_contenedores = [];

var container_ion = document.getElementById("container_ion");
var container_independencia = document.getElementById("container_independencia");
var container_yaxar = document.getElementById("container_yaxar");
var container_francia = document.getElementById("container_revolucion");

lista_contenedores.push(container_ion);
lista_contenedores.push(container_independencia);
lista_contenedores.push(container_francia);
lista_contenedores.push(container_yaxar);




var lista_posters = [];

lista_posters.push(poster_ion);
lista_posters.push(poster_francia);
lista_posters.push(poster_independencia);
lista_posters.push(poster_yaxar);




busqueda.addEventListener("keydown", texto_available);



function texto_available(){
    var busqueda_terminada = busqueda.value;
    ocultar_todo();
    if (busqueda_terminada == "Ion Electrón"){
        mostrar_ion();
    }
    else if (busqueda_terminada == "Revolución Francesa"){
        mostrar_francia();
    }
    else if (busqueda_terminada == "Independence"){
        mostrar_independencia();
    }
    else if (busqueda_terminada == "Yaxar's Multiverse"){
        mostrar_yaxar();
    }
}



function ocultar_todo(){
    lista_posters.forEach (item => {
        
        
        item.style.display = "none";
    });
}

function ordenar(poster){
    var contador = 2;
    
    

    lista_contenedores.forEach(contenedor =>{
        
        
        if( contenedor != poster){
            contenedor.style.width = "30%";
            contenedor.style.order = contador;
            contador++;


        }


    });
    contador = 2;


}

function mostrar_ion(){

    container_ion.style.order =  1;
    container_ion.style.width = "100%"
    ordenar(container_ion);

    poster_ion.style.display = "block";
    

}
function mostrar_independencia(){

    container_independencia.style.order =  1;
    ordenar(container_independencia);
    poster_independencia.style.display = "block";
    

}
function mostrar_yaxar(){
    container_yaxar.style.order =  1;
    ordenar(container_yaxar);

    poster_yaxar.style.display = "block";
}
function mostrar_francia(){
    container_francia.style.order =  1;
    ordenar(container_francia);
    poster_francia.style.display = "block";
}
