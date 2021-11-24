var btIzq,btDer;
var img;
var arrayImagenes;
var pos = 0;
var p;
function main(){
    btDer = document.getElementById("der");
    btIzq = document.getElementById("izq");
    img = document.getElementById("img");
    p = document.getElementById("cont");
    arrayImagenes = ["1.jpg","2.jpg","3.jpg"];


    p.innerHTML = (pos+1)+"/"+arrayImagenes.length;
    btDer.addEventListener("click",pulsar);
    btIzq.addEventListener("click",pulsar);
    
}

function pulsar(e){
    if(e.target.id == "der"){
        pos++;
        if(pos==arrayImagenes.length){
            pos=0;
        }
    }else{
        pos--;
        if(pos<0){
            pos=arrayImagenes.length-1;
        }
    }
    img.src = arrayImagenes[pos];
    p.innerHTML = (pos+1)+"/"+arrayImagenes.length;
}

window.addEventListener("load",main);