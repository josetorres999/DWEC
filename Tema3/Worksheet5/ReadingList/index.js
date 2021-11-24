class Book{
    constructor(title, genre, author){
        this.title = title;
        this.genre = genre;
        this.author = author;
        this.read = false;
        this.date = new Date();
    }
}

class BookList{

    /*
    Number of books marked as read
    Number of books marked not read yet
    A reference to the next book to read (book object)
    A reference to the current book being read (book object)
    A reference to the last book read (book object)
    An array of all the Books
   */

    constructor(){
        this.nLeidos = 0;
        this.nNoLeidos = 0;
        this.siguienteLeer;
        this.currentLeyendo;
        this.ultimoLeido;
        this.todosLibros = [];
    }

    add(libro){
        this.todosLibros.push(libro);
        this.nNoLeidos++;
    }

    finishCurrentBook(){
        this.ultimoLeido = this.currentLeyendo;
        this.currentLeyendo = this.siguienteLeer;
        this.ultimoLeido.read = true;
        this.siguienteLeer = null;
        let i = 0;
        while(this.siguienteLeer == null && i<this.todosLibros.length){
            if(this.todosLibros[i].read == false && this.todosLibros[i] != this.currentLeyendo){
                this.siguienteLeer = this.todosLibros[i];
            }
            i++;
        }
        if(this.siguienteLeer == null){
            console.log("No tienes mas libros para leer frikii")
        }else{
            this.ultimoLeido.date = new Date(Date.now());
            console.log(`El proximo libro que vas a leer es ${this.siguienteLeer.title}`);
            this.nLeidos++;
            this.nNoLeidos--;
        }
    }
}

var misLibros;
window.onload=()=>{
    misLibros = new BookList();
    document.getElementById("btAnadir").addEventListener("click",anadirLibro);
}

function anadirLibro(e){
    e.preventDefault();
    let titulo = document.getElementById("titulo").value;
    let genero = document.getElementById("genero").value;
    let autor = document.getElementById("autor").value;

    document.getElementById("autor").value="";
    document.getElementById("genero").value="";
    document.getElementById("titulo").value="";

    let libro = new Book(titulo,genero,autor);
    misLibros.add(libro);
    
    let elementoNuevo = document.createElement("li");
    elementoNuevo.innerHTML = `${titulo} - ${genero} -${autor}`;
    document.getElementById("listaLibros").append(elementoNuevo);
}