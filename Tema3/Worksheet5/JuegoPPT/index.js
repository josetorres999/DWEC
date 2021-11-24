class Juego{
    constructor(j1,j2){
        this.j1 = j1;
        this.j2 = j2;
        this.acabado = false;
    }

    jugar(){
        this.acabado = false;
        while(!this.acabado){
            let esTontoJ1 = true;
            let esTontoJ2 = true;

            while(esTontoJ1){
                var eleccionJ1 = prompt("Elige piedra, papel o tijera");
                switch(eleccionJ1.toUpperCase()){
                    case "PIEDRA":
                    case "PAPEL":
                    case "TIJERA":
                        esTontoJ1 = false;
                        break;
                    default:
                        console.log("Elige piedra, papel o tijera, no es tan complicado");
                }
            }

            while(esTontoJ2){
                var eleccionJ2 = prompt("Elige piedra, papel o tijera");
                switch(eleccionJ2.toUpperCase()){
                    case "PIEDRA":
                    case "PAPEL":
                    case "TIJERA":
                        esTontoJ2 = false;
                        break;
                    default:
                        console.log("Elige piedra, papel o tijera no es tan complicado");
                }
            }

            this.comprobarAcabado(eleccionJ1,eleccionJ2);
        }
    }

    comprobarAcabado(manoJ1, manoJ2){
        if(manoJ1 == manoJ2){
            console.log("Empate, seguimos jugando");
        }else if((manoJ1 == "piedra" && manoJ2 == "tijera") ||
                (manoJ1 == "tijera" && manoJ2 == "papel") ||
                (manoJ1 == "papel" && manoJ2 == "piedra")){
                    console.log(`${this.j1} ha usado ${manoJ1}`);
                    console.log(`${this.j2} ha usado ${manoJ2}`);
                    console.log(`Gana ${this.j1}`);
                    this.acabado = true;
        }else if((manoJ2 == "piedra" && manoJ1 == "tijera") ||
            (manoJ2 == "tijera" && manoJ1 == "papel") ||
            (manoJ2 == "papel" && manoJ1 == "piedra")){
                console.log(`${this.j1} ha usado ${manoJ1}`);
                console.log(`${this.j2} ha usado ${manoJ2}`);
                console.log(`Gana ${this.j2}`);
                this.acabado = true;
        }
    }
}

let juego = new Juego("Jose","Mikel");
