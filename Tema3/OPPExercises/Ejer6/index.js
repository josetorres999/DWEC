/*
Write a ProjectManager class extending Instructor.
Its constructor takes a single argument - an object with the following keys:
All the keys used to initialize instances of Instructor.
gradClassName: i.e. CS1
favInstructor: i.e. Sean
Its constructor calls the parent constructor passing to it what it needs.
The constructor should also initialize gradClassName and favInstructor properties on the instance.
ProjectManager instances have the following methods:
standUp a method that takes in a slack channel and returns {name} announces to {channel}, @channel standy times!
debugsCode a method that takes in a student object and a subject and returns {name} debugs {student.name}'s code on {subject}
*/
//import { Instructor } from "../clases";
//import { Student } from "../clases";

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

class Student extends Lambdasian{
    constructor(object){
        super(object);
        this.pB = object.pB;
        this.className = object.className;
        this.favSub = object.favSub;
    }

    listSubjects(){
        return this.favSub.join();
    }

    PRAssigment(subject){
        return `${this.name} has submitted a PR for ${subject}`;
    }

    sprintChallenge(subject){
        return `${this.name} has begun sprint challenge on ${subject}`;
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

class ProjectManager extends Instructor{
    constructor(object){
        super(object);
        this.gradClassName = object.gradClassName;
        this.favInstructor = object.favInstructor;
    }

    standUp(channel){
        return `${this.name} announces to ${channel}, @channel standy times!!`;
    }

    debugsCode(student,subject){
        return `${this.name} debugs ${student.name}\'s code on ${subject}`;
    }
}


let pm = new ProjectManager({
    name : "Juan",
    age : 45,
    location : "Granada",
    speciality : "Redux",
    favLanguage : "Java",
    catchPhrase : "Suck it idiot",
    gradClassName : "CS16",
    favInstructor : "Luis"
});

let student = new Student({
    name : "Jose",
    age : 22,
    location : "Calicasas",
    pB : "Not study",
    className : "CS132",
    favSub : ["HTML","JavaScript<3","Java"]
});

