/*
Extend the functionality of the Student by adding a prop called grade and setting it equal to a number between 1-100.
Now that our students have a grade build out a method on the Instructor (this will be used by BOTH instructors and PM's) that will randomly add or subtract points to a student's grade. Math.random will help.
Add a graduate method to a student.
This method, when called, will check the grade of the student and see if they're ready to graduate from Lambda School
If the student's grade is above a 70% let them graduate! Otherwise go back to grading their assignments to increase their score.
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
        this.grad = 25;
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

    toCorrect(student){
        let note = Math.floor((Math.random * 200) - 100)
        student.grad+=note;
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

    toCorrect(student){
        let note = Math.floor((Math.random * 200) - 100)
        student.grad+=note;
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