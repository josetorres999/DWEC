var div;
function main(){
    if(window.DeviceMotionEvent){
        div = document.getElementById("div");

        window.addEventListener("deviceorientation",rotar);
    }else{
        document.write("Error");
    }
    
}

function rotar(e){
    //div.style.transform = "rotate("+e.alpha+"deg)";
    div.style.transform =`rotateZ(${-e.alpha}deg) rotateX(${-e.beta}deg) rotateY(${e.gamma}deg)`;
}

window.addEventListener("load",main);