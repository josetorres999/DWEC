let n1 = prompt("Introduce un numero");
let n2 = prompt("Introduce otro numero");
let n3 = prompt("Introduce otro numero");
let n4 = prompt("Introduce otro numero");

let nMayor = buscarMayor(n1,n2,n3,n4);
alert(`El mayor es ${nMayor}`);

function buscarMayor(...numeros) {
    let mayor = numeros[0];
    for(numero of numeros){
        if(numero > mayor){
            mayor = numero;
        }
    }
    return mayor;
}