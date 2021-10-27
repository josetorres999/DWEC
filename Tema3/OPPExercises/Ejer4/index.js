/**
    Write an Instructor class extending Lambdasian.
    Its constructor takes a single argument - an object with the following keys:
        All the keys used to initialize instances of Lambdasian.
        specialty: what the instance of Instructor is good at, i.e. 'redux'
        favLanguage: i.e. 'JavaScript, Python, Elm etc.'
        catchPhrase: i.e. Don't forget the homies.
    The constructor calls the parent constructor passing it what it needs.
    The constructor should also initialize specialty, favLanguage and catchPhrase properties on the instance.
    Instructor instances have the following methods:
        demo receives a subject string as an argument and returns the phrase 'Today we are learning about {subject}' where subject is the param passed in.
        grade receives a student object and a subject string as arguments and returns '{student.name} receives a perfect score on {subject}'

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



class Instructor extends Lambdasian{
    constructor(object, specialty, favLanguage, catchPhrase){
        super(object);
        this.specialty = specialty;
        this.favLanguage = favLanguage;
        this.catchPhrase = catchPhrase;
    }

    demo(subject){
        return `Today we are learning about ${subject}`;
    }

    grade(student, subject){
        return `${student.name} receives a perfect score on ${subject}`;
    }
}

a = {
    name : "Juan",
    age : 35,
    location : "Granada"
}

b = new Instructor(a,"Redux", "Java", "Suck it Idiot");

c = {
    name : "Student",
    age : 12
}