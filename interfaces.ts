// properties of an interface? must be kidding me :-D
// what is the difference between a class and a interface?

// https://timmousk.com/blog/typescript-interface/

/*
A class is a blueprint from which we can create objects that share the same configuration - properties and methods. 
An interface is a group of related properties and methods that describe an object, but neither provides implementation
nor initialisation for them.
*/

// i'd say, that when we "instantiate" an interface, we do two things:
// 1. implement the interface (create a anonymous class)
// 2. instantiate the anonymous class
// then we can pass the class instance anywhere, where the interface is referenced

// downside, well ... we can't do instanceof, since this only works on classes, not interfaces

// so an interface is like a class, but with non init properties and abstract methods???

// interfaces are custom types

export interface User {
    name: string;
    age: number;
    id: number;
    email: string;

    printEmail(): void;
}

// or equivalently

type Person = {
    name: string;
    age: number;
    phone: string;
}

// when implementing an interface, we just provide the respective constructor? ok

class Driver implements User {

    constructor(public name: string, public age: number, public id: number, public email: string) {   
    }

    get getName(): string {
        return this.name;
        
    }

    printEmail(): void {
        console.log(this.email);
    }

}

class Accountant implements User {

    constructor(public name: string, public age: number, public id: number, public email: string) {   
    }

    printEmail(): void {
        console.log(this.email);
    }

}

let driver: Driver = new Driver("John", 30, 1, "john@example.com");

console.log(driver.getName); // John

// ok...

//----------------------------------------------------------------

class Thing {
    
    stuff: string;

    constructor(stuff: string) {
        this.stuff = stuff;
    }

}

//----------------------------------------------------------------

// an interface is a type , so we have type safety here

let johnTheGuy: Accountant = {
    name: "John",
    age: 30,
    id: 123,
    email: "john@example.com",
    printEmail: () => console.log("blah")
}

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
let z : Person = {
    age: 30,
    name: "John",
    phone: "123"
}

if (x instanceof One) {
    console.log("x is instance of One");
}

// ----------------------------------------------------------------
// Interfaces
// ----------------------------------------------------------------

interface UserInterface {
    name: string,
    age?: number, // optional parameter
    id: number,
    email: string
}

// this is now a datatype

var Users = {
    name: "John",
    age: 30,
    id: 30,
    email: "john@example.com"
}

interface Address {
    street: string,
    city: string,
}

class Friend {

    address: Address;

    constructor(address: Address) {
        this.address = address
    }

}

let friend = new Friend({street: "123 Main Street", city: "London"})
console.log(friend); // London

// optional interface values

let user: UserInterface = {
    name: "John",
    id: 123,
    email: "john@example.com"
}

interface EmployeeInterface extends UserInterface {
    salary: number
}

let employee: EmployeeInterface = {
    name: "John",
    id: 123,
    email: "john@example.com",
    salary: 1000
}

// interfaces can also have method definitions (of course)
interface Login {
    login(): User;
}

// how do we use an interface which is defined here somewhere else?
// we need to mark it with export keyword

export interface LoginInterface {
    login(username: string, password: string): User;
}

// some final words:

// there's no concept of "interfaces" in javascript
// all interface related ts code will be removed from js code

// if you want to retain the type code - then use classes

// in backend programming (API), we should use classes

// the relationship between interfaces and classes in js (and ts) is a tiny bit different ... 
// or better said, their usage is a bit different - interfaces can be directly instantiated (via automatic anonymous classes) - which
// seems to be a typicall thing of a non-type-safe world where data is widly flung around, while classes are more "rigid" in this manner
// they need to be instantiated properly - the good thing is, they are "stable" and very suitable for things like API calls, where consistency of
// exchanged data is important

// my takeaway - just use it as in java, it's safe and consistent

