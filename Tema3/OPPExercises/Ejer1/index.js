/*
    Write a Person class whose constructor initializes name and age from arguments.
    All instances of Person should also initialize with an empty stomach array.
    Give instances of Person the ability to .eat("someFood"):
        When eating an edible, it should be pushed into the stomach.
        The eat method should have no effect if there are 10 items in the stomach.
    Give instances of Person the ability to .poop():
        When an instance poops, its stomach should empty.
    Give instances of Person a method .toString():
        It should return a string with name and age. Example: "Mary, 50"
 */
class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
        this.stomach = new Array();
    }

    eat(someFood){
        if(this.stomach.length<10){
            this.stomach.push(someFood);
        }else{
            console.log("Ya estas lleno");
        }
    }

    poop(){
        this.stomach = [];
    }

    toString(){
        return `Nombre: ${this.name}, Edad: ${this.age}`;
    }
}


a = new Person("Juan",26);

a.eat("Pepino");
a.eat("Manzana");

a.toString();