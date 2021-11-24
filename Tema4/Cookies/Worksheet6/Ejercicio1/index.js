var p;
function main(){
    p = document.getElementsByTagName("p");
    document.getElementById("borrar").onclick=borrarCookie;


    if(!document.cookie){
        let nUsuario = prompt("Dime tu nombre de usuario");
        crearCookie(nUsuario);
    }
    alert("Bienvenido "+getCookie("usuario"));
}

function crearCookie(nUsuario){
    document.cookie=`usuario=${nUsuario}; max-age=300`;
}

function borrarCookie(){
    let nUsuario = getCookie("usuario");
    document.cookie=`usuario=${nUsuario}; max-age=0`;
    alert("Sesion cerrada");
}

function getCookie(cName) {
    const name = cName + "=";
    const cDecoded = decodeURIComponent(document.cookie); //to be careful
    const cArr = cDecoded.split('; ');
    let res;
    cArr.forEach(val => {
      if (val.indexOf(name) === 0) res = val.substring(name.length);
    })
    return res
  }

function cambiarColorFondo(e){

}

window.onload=main;