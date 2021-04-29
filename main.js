const student = {
    firstName: "John",
    lastName: "Smith",
    class: 12,
};

// 1. Create a method that prints the following:
student.jSmithIt = function () {
    return "John smith is a student in class 12";
};
console.log(student.jSmithIt());

// 2. Create a person object. Include the person's first and last name, age, job, city etc. Create a method to print data from the object e.g. "John Smith is a 41 year old engineer living in France".

const person = {
    firstName: "John",
    lastName: "Smith",
    age: 41,
    job: "engineer",
    city: "France",
};

function printIntro() {
    console.log(
        `${this.firstName} ${this.lastName} is a ${this.age} years old ${this.job} living in ${this.city}`
    );
}

let printMrSmith = printIntro.bind(person);
printMrSmith();

// 3. Write a method to get the length of the person object.

function personLen() {
    me = 0;
    for (i in person) {
        me++;
    }
    return me;
}

let printLen = personLen.bind(person);
console.log(printLen());
