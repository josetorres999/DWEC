import {Juego} from "./JuegoModulo.js";

var juego;
var manoJ1, manoJ2;

window.onload=()=>{
    juego = new Juego();
    cargarVista();
    manoJ1 = "";
    manoJ2 = "";
}

function elegirJ1(e){
    manoJ1 = e.target.innerHTML;
    
    manoJ1 = manoJ1.split(">")[1];
    manoJ1 = manoJ1.split("<")[0];
}

function elegirJ2(e){
    manoJ2 = e.target.innerHTML;
    
    manoJ2 = manoJ2.split(">")[1];
    manoJ2 = manoJ2.split("<")[0];
}

function empezar(){
    if(manoJ1=="" || manoJ2==""){
        alert("Debes de seleccionar piedra, papel o tijeras")
    }else{
        let res = juego.jugar(manoJ1,manoJ2);
        if(res == 0){
            alert("empate");
        }else if(res == 1){
            alert("Gana Jugador 1");
        }else{
            alert("Gana Jugador 2");
        }
        manoJ1="";
        manoJ2="";
    }
}

function cargarVista(){
    let j1 = document.getElementById("jug1").children;
    let j2 = document.getElementById("jug2").children;
    for (let i = 1; i < j1.length; i++) {
        j1[i].addEventListener("click",elegirJ1);
        j2[i].addEventListener("click",elegirJ2);
    }
    document.getElementById("btJugar").addEventListener("click",empezar);
}
