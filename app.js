// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
let listaHtml = document.getElementById('listaAmigos');

function limpiarTexto(){
    document.getElementById('amigo').value = '';
    while(listaHtml.firstChild)
    {
        listaHtml.removeChild(listaHtml.firstChild);
    }
}

function listarAmigos(){
    
    for(var i = 0; i <=(amigos.length)-1;i++){
        const li = document.createElement("li");
        li.innerHTML = amigos[i];
        listaHtml.appendChild(li);
    }
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
        listarAmigos();
        return;
    }

}