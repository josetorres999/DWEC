function lanzarDado(){
    return (Math.floor(Math.random() * 6) + 1);
}

num = lanzarDado();

document.write(num);