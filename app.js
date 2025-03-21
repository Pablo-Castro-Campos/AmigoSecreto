// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
let listaHtml = document.getElementById('listaAmigos');
let numeroGenerado = 0;

function limpiarTexto() {
    document.getElementById('amigo').value = '';
    while (listaHtml.firstChild) {
        listaHtml.removeChild(listaHtml.firstChild);
    }
}

function listarAmigos() {

    for (var i = 0; i <= (amigos.length) - 1; i++) {
        const li = document.createElement("li");
        li.innerHTML = amigos[i];
        listaHtml.appendChild(li);
    }
}

function generarNumeroAleatorio()
{
    numeroGenerado =  Math.floor(Math.random()*amigos.length);
    
}

function mostrarSorteado(){
    document.getElementById('resultado').innerHTML='El amigo sorteado es : '+amigos.at(numeroGenerado);
    limpiarTexto();
    amigos = [];

}

function agregarAmigo() {
    let nombreAmigo = document.getElementById('amigo').value;
    document.getElementById('resultado').innerHTML='';
    console.log(nombreAmigo);
    if (!nombreAmigo) {
        alert("El campo esta vacio!");
    }
    else {
        amigos.push(nombreAmigo);
        console.log(amigos);
        limpiarTexto();
        listarAmigos();
        
        return;
    }

}

function sortearAmigo() {
    
    if(amigos.length-1<0)
    {
        alert("No hay amigos agregados");
    }
    else {  
        console.log(amigos);
        console.log(amigos.length);
        generarNumeroAleatorio();
        console.log(numeroGenerado);
        mostrarSorteado();
    }

}