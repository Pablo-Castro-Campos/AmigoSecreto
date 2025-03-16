// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function limpiarTexto(){
    document.getElementById('amigo').value = '';

}

function agregarAmigo() {
    let nombreAmigo = document.getElementById('amigo').value;
    console.log(nombreAmigo);
    if (!nombreAmigo) {
        alert("El campo esta vacio!");
    }
    else {
        amigos.push(nombreAmigo);
        console.log(amigos);
        limpiarTexto();
        return;
    }

}