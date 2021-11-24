var lista, aux;
window.onload=()=>{
    document.getElementById("ant").onclick = anterior;
    document.getElementById("sig").onclick = siguiente;

    lista = ["Captura.PNG","ClaseAbstracta.PNG","ClaseAbstracta2.PNG"];
    aux = 0;
}

function siguiente(){
    if(aux<(lista.length-1)){
        aux++;
        
    }
    
}

function anterior(){

}