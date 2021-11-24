window.onload=()=>{
    document.getElementById("anadir").addEventListener("click",anadirInput);
    document.getElementById("enviar").addEventListener("click",enviarImg);
}

function anadirInput(){
    let nuevoInput = document.createElement("input");
    nuevoInput.type = "file";
    nuevoInput.style.margin = "2px"
    document.getElementById("miDiv").appendChild(nuevoInput);
    document.getElementById("miDiv").appendChild(document.createElement("br"));
}

function enviarImg(){
    var files = document.getElementsByTagName("input");
    for(let i = 0; i<files.length; i++){
        let img = document.createElement("img");
        img.src = files[i].value;
        document.body.appendChild(img);
    }
}