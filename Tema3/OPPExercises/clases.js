export class Lambdasian{
    constructor(object){
        this.name = object.name;
        this.age = object.age;
        this.location = object.location;
    }

    speak(){
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
}

export class Student extends Lambdasian{
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

export class Instructor extends Lambdasian{
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

export class ProjectManager extends Instructor{
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