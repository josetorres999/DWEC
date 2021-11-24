var numero = 1;
var btPrev,btSig;
function siguiente(){
    numero+=1;
    document.getElementById("imagen").src = numero+".jpg";
    if(numero == 3){
        btSig.disabled = true;
    }else{
        btPrev.disabled = false;
    }
}

function anterior(){
    numero-=1;
    document.getElementById("imagen").src = numero+".jpg";
    if(numero == 1){
        btPrev.disabled = true;
    }else{
        btSig.disabled = false;
        
    }
}


function iniciar(){
    btPrev = document.getElementById("botonPrevio");
    btSig = document.getElementById("botonSiguiente");
    

    btPrev.addEventListener("click",anterior);
    btSig.addEventListener("click",siguiente);
}



window.addEventListener("load",iniciar);