var table;
function inicia(){
    document.write("<table id = \"tabla\" border=0>");
    for(let i = 0;i<100;i++){
        document.write("<tr width=\"5px\">");
        for(let j = 0;j<100; j++){
            document.write("<td width=\"7px\" height=\"7px\"> </td>");
        }
        document.write("</tr>");
    }
    document.write("</table>");

    table = document.querySelector("table");
    

    const tds = document.querySelectorAll('td');
    tds.forEach(function(td){
    td.addEventListener('mousemove',pintarRojo);
    td.addEventListener('mousemove',pintarAzul);
    td.addEventListener('mousemove',borrar);

    
    });
    window.onkeydown = borrarTodo;
}

window.addEventListener("load",inicia);

function pintarRojo(e){
    if(e.ctrlKey){
        e.target.style.backgroundColor = 'rgb(255,0,0)';
    }
}

function pintarAzul(e){
    if(e.shiftKey){
        e.target.style.backgroundColor = 'rgb(0,0,255)';
    }
}

function borrar(e){
    if(e.altKey){
        e.target.style.backgroundColor = 'rgb(255,255,255)';
    }
}

function borrarTodo(e){
        document.getElementById("tabla").style.backgroundColor = 'rgb(0,0,0)';
    
}

