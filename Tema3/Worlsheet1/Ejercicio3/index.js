function lanzarDado(){
    return (Math.floor(Math.random() * 6) + 1);
}

function rellenarArray(arrayNumeros){
    for(let i = 0 ; i < arrayNumeros.length ; i++){
        arrayNumeros[i]=0;
    }
}

function monstrarArray(arrayNumeros){
    document.write("Unos: "+arrayTiradas[0]+"<br>");
    document.write("Dos: "+arrayTiradas[1]+"<br>");
    document.write("Tres: "+arrayTiradas[2]+"<br>");
    document.write("Cuatros: "+arrayTiradas[3]+"<br>");
    document.write("Cincos: "+arrayTiradas[4]+"<br>");
    document.write("Seis: "+arrayTiradas[5]+"<br>");
}

function realizarTiradas(){
    arrayTiradas = new Array(6);

    rellenarArray(arrayTiradas);

    for(let i = 0;i<6000;i++){
        let numero = lanzarDado();
        arrayTiradas[numero-1]+=1;
    }

    monstrarArray(arrayTiradas);
    
}

realizarTiradas();