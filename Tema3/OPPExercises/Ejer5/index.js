/**
    Write a Student class extending Lambdasian.
    Its constructor takes a single argument - an object with the following keys:
        All the keys used to initialize instances of Lambdasian.
        previousBackground i.e. what the Student used to do before Lambda School
        className i.e. CS132
        favSubjects. i.e. an array of the student's favorite subjects ['HTML', 'CSS', 'JS']
    The constructor calls the parent constructor passing to it what it needs.
    The constructor should also initialize previousBackground, className and favSubjects properties on the instance.
    Student instances have the following methods:
        listSubjects a method that returns all of the student's favSubjects in a single string: Loving HTML, CSS, JS!.
        PRAssignment a method that receives a subject as an argument and returns student.name has submitted a PR for {subject}
        sprintChallenge similar to PRAssignment but returns student.name has begun sprint challenge on {subject}
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


a = {
    name : "Jose",
    age : 25,
    location : "Granada",
    pB : "Not study",
    className : "CS132",
    favSub : ["HTML","JavaScript","PHP"]
};

b = new Student(a);