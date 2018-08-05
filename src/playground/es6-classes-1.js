class Person {
    constructor(name='Anonymous', age=0) {
        this.name = name;
        this.age = age;
    }

    getGreeting() {
        return `Hi ${this.name} !`;
    }

    getDescription() {
        return `${this.name} is ${this.age} Year(s) Old.`;
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }

    hasMajor() {
        return !!this.major;
    }

    getDescription() {
        let description = super.getDescription();
        if (this.hasMajor()) {
            description += ` His Major is ${this.major}`;
        }

        return description;
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }

    getGreeting() {
        let greeting = super.getGreeting();
        if (this.homeLocation) {
            greeting += ` I'm Visiting From ${this.homeLocation}`;
        }
        return greeting;
    }
}

const me = new Traveler('Abhishek Baghel', 20, 'Gwalior');
console.log(me.getGreeting());
const other = new Traveler();
console.log(other.getGreeting());