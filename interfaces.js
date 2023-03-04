"use strict";
// properties of an interface? must be kidding me :-D
// what is the difference between a class and a interface?
Object.defineProperty(exports, "__esModule", { value: true });
// when implementing an interface, we just provide the respective constructor? ok
class Driver {
    constructor(name, age, id, email) {
        this.name = name;
        this.age = age;
        this.id = id;
        this.email = email;
    }
    get getName() {
        return this.name;
    }
    printEmail() {
        console.log(this.email);
    }
}
class Accountant {
    constructor(name, age, id, email) {
        this.name = name;
        this.age = age;
        this.id = id;
        this.email = email;
    }
    printEmail() {
        console.log(this.email);
    }
}
let driver = new Driver("John", 30, 1, "john@example.com");
console.log(driver.getName); // John
// ok...
//----------------------------------------------------------------
class Thing {
    constructor(stuff) {
        this.stuff = stuff;
    }
}
//----------------------------------------------------------------
// an interface is a type , so we have type safety here
let johnTheGuy = {
    name: "John",
    age: 30,
    id: 123,
    email: "john@example.com",
    printEmail: () => console.log("blah")
};
// isntanceof works with classes only
if (johnTheGuy instanceof Accountant) {
    console.log("is instance of");
}
class One {
}
class Two {
}
let x = new One();
let y = new Two();
// this call seems to do two things - declares a class which implements the person interface and then instantiates it
// but why can't we do a instanceof check aginst the Person interface?
let z = {
    age: 30,
    name: "John",
    phone: "123"
};
if (x instanceof One) {
    console.log("x is instance of One");
}
// this is now a datatype
var Users = {
    name: "John",
    age: 30,
    id: 30,
    email: "john@example.com"
};
class Friend {
    constructor(address) {
        this.address = address;
    }
}
let friend = new Friend({ street: "123 Main Street", city: "London" });
console.log(friend); // London
// optional interface values
let user = {
    name: "John",
    id: 123,
    email: "john@example.com"
};
let employee = {
    name: "John",
    id: 123,
    email: "john@example.com",
    salary: 1000
};
