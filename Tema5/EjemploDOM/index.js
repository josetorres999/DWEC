window.onload=()=>{
    document.getElementById("crearLI").addEventListener("click",crearLI);
    document.getElementById("crearImagen").addEventListener("click",crearImagen);


    document.getElementById("lista").children[0].addEventListener("click",borrarLI);
    document.getElementById("lista").children[1].addEventListener("click",borrarLI);
}

var cont = 5;

function crearImagen(){
    let imagenNueva = document.createElement("img");
    imagenNueva.src = 'http://placekitten.com/400/300';
    imagenNueva.style.border = "1px";
    imagenNueva.addEventListener("click",borrarImagen);
    document.body.appendChild(imagenNueva);
}

function crearLI(){
    let nuevaEntrada = document.createElement("li");
    let texto = document.getElementById("textoLI").value;
    nuevaEntrada.id = "nuevaEntrada"+cont;
    cont++;
    nuevaEntrada.innerHTML = texto;
    document.getElementById("textoLI").value="";
    
    nuevaEntrada.addEventListener("click",borrarLI);
    document.getElementById("lista").appendChild(nuevaEntrada);
}



function borrarImagen(e){
    document.body.removeChild(e.target);
}

function borrarLI(e){
    document.getElementById("lista").removeChild(e.target);
}