// alert("Hello World");

// print to the document
document.writeln("Hello World");

// print to the console
console.log("Hello World");

// conditionals
let myAge = 20;

if (myAge > 20) {
    document.write("you are over 20");
} else if (myAge > 10) {
    document.write("you are over 10");
} else {
    document.write("you are not over 10");
}

// loops
var age = 5;

while (age < 10) {
    console.log("your age is less than 10");
    age++;
}

document.writeln("you are now above 10");

let links = document.getElementsByTagName("a");
for (i = 1; i < links.length; i++) {
    console.log("This is link" + i);
}

document.write("all links looped");

// break and continue
/**
 * break stops the flow of the loop
 * continue skips the code within the code and goes to the top
 */

for (i = 1; i < 10; i++) {
    if (i === 3 || i === 5) {
        continue;
    }
    console.log(i);

    if (i === 7) {
        break;
    }
}

// objects
let myCar = {
    maxSpeed: 70,
    driver: "Nana",
    drive: function() {
        console.log("I am driving");
    },
    logDriver: function() {
        console.log("The driver is " + this.driver);
    },
};

console.log(myCar.driver);
myCar.drive();
myCar.logDriver();

// contructor function
let Car = function(maxSpeed, driver) {
    this.maxSpeed = maxSpeed;
    this.driver = driver;
    this.drive = function() {
        console.log("I am driving");
    };
    this.logDriver = function() {
        console.log("The driver is " + this.driver);
    };
};

let myCar1 = new Car(70, "Nana");
let myCar2 = new Car(30, "John");

console.log(myCar1.driver);
console.log(myCar2.driver);
myCar1.drive();