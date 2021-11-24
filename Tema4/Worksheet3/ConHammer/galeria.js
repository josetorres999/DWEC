var imagen;
var numero = 1;

function anterior(e){
    numero-=1;
    imagen.src = numero+".jpg";
    if(numero == 1){
        btPrev.disabled = true;
    }else{
        btSig.disabled = false;
        
    }
}

function siguiente(e){
    numero+=1;
    document.getElementById("imagen").src = numero+".jpg";
    if(numero == 3){
        btSig.disabled = true;
    }else{
        btPrev.disabled = false;
    }
}

function iniciar(){
    btPrev = document.getElementById("botonPrevio");
    btSig = document.getElementById("botonSiguiente");
    imagen = document.getElementById("imagen");

    btPrev.addEventListener("click",anterior);
    btSig.addEventListener("click",siguiente);

    btPrev.disabled = true;

    var mc = new Hammer(imagen);
    mc.on("panleft",siguiente);
    mc.on("panright",anterior);
}

window.addEventListener("load",iniciar);

