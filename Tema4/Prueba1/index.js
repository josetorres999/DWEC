const btn = document.querySelector('button');
const div = document.querySelector("div");
const img = document.querySelector("img");
const p = document.querySelector("p");


function random(number) {
  return Math.floor(Math.random() * (number+1));
}

function cambiarColor(e){
    const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    document.body.style.backgroundColor = rndCol;
}
document.onkeydown = cambiarColor;

btn.addEventListener("click",cambiarColor);
btn.addEventListener("focus",cambiarColor);

div.addEventListener("click",cambiarColor);

img.addEventListener("click",cambiarColor);

p.addEventListener("click",cambiarColor);

//btn.onfocus = cambiarColor; //Tiene que ser si paréntesis sino FALLO no se por que xd

//Hacer lo mismo sobre un p,div,img,h2


