var lista;
window.onload=()=>{
    lista = document.getElementById("lista");
    document.getElementById("crearLI").addEventListener("click",agregarElemento);
}

function agregarElemento(){
    var elemento = document.createElement("li");
    elemento.innerHTML = "Nuevo elemento";
    lista.appendChild(elemento);
}