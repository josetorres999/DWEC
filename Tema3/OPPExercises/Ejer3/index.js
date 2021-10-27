/*
    Write a Lambdasian class.
    Its constructor takes a single argument - an object with the following keys:
        name
        age
        location
    Its constructor should initialize name, age and location properties on the instance.
    Instances of Lambdasian should be able to .speak():
        Speaking should return a phrase Hello my name is {name}, I am from {location}.
        {name} and {location} of course come from the instance's own properties.

 */


class Lambdasian{
    constructor(object){
        this.name = object.name;
        this.age = object.age;
        this.location = object.location;
    }

    speak(){
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
}


a = {
    name : "Juan",
    age : 23,
    location : "Granada"
}

b = new Lambdasian(a);

