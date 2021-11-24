export class Juego{
    constructor(){
    }

    jugar(manoJ1,manoJ2){
        manoJ1 = manoJ1.toLowerCase();
        manoJ2 = manoJ2.toLowerCase();
        if(manoJ1 == manoJ2){
            return 0;
        }else if((manoJ1 == "piedra" && manoJ2 == "tijera") ||
                (manoJ1 == "tijera" && manoJ2 == "papel") ||
                (manoJ1 == "papel" && manoJ2 == "piedra")){
            return 1;
        }else if((manoJ2 == "piedra" && manoJ1 == "tijera") ||
            (manoJ2 == "tijera" && manoJ1 == "papel") ||
            (manoJ2 == "papel" && manoJ1 == "piedra")){
            return 2;
        }
    }
}