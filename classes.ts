// available since ES6

class Employee {

    // # marks a member private - that's the preferred syntax for javascript

    #id: number; // private can be used too, but it's not the preferred javascript syntax, so keep that in mind!
    protected name: string; // protected is a word, but private is a hash, that's really consistent, bravo (is not!)
    address: string;
    thingNotInConstructor!: string; // exclamation mark will "allow it to be nullable", otherwise we get an error due to strictness (strict mode) (but that's ok!)
    initializedThing: number = 123;
    #hiddenItem: string;

    // why should I use # instead of private?
    // ts is typically an interpreted "language", it's not compiled, but transpiled
    // what is private in ts might not actually be a js private construct = what's then transpiled into js might not contain
    // real private protection, as the protection is ensured by ts and not needed if transpiller works as designed
    // but we trust the ts transpiller with other things (e.g. enums), so why shouldn't we trust it with the rest?

    // to, personally, if i use ts, I should use ts native code, not js code (even if supported)
    // something like java vs kotlin
    
    #HIDE_ME_WITH_HASH: string;
    private HIDE_ME_WITH_PRIVATE: string; // <-- atm I'd prefer this syntax

    // in typescript, you cannot have multiple constructors
    // thus you cannot have both a default constructor and a parametrized constructor
    
    // constructors without params
    // constructor() { }

    // constructor
    constructor(id: number, name: string, address: string, hiddenItem: string) {
        this.#hiddenItem = hiddenItem;
        this.#id = id;
        this.name = name;
        this.address = address;
        this.#HIDE_ME_WITH_HASH = this.#id.toString();
        this.HIDE_ME_WITH_PRIVATE = this.#id.toString();
    }

    #moreSalt(salt: number): number {
        return salt * 2;
    }

    protected sayHello(): string {
        return `Hello ${this.name}!`;
    }

    // methods
    getNameWithAddressAndSalt(salt: number): string { 
        //return this.name + " " + this.address + " " + salt;
        // better way to print this - less error prone (compared to plusses and quotes)
        return `name: ${this.name}, address: ${this.address}, salt: ${this.#moreSalt(salt)}`;
    }

    speak() {
        console.log(this.sayHello());
    }

    giveString(): string {
        return "blahblahblahblahblahblahblahblahblah";
    }

}

class Employee2 extends Employee {
    
    constructor(id: number, name: string, address: string, hiddenItem: string) {
        super(id, name, address, hiddenItem);
    }

    doFunnyStuff(): void {
        console.log(this.sayHello());
    }
}


// ----------------------------------------------------------------
// contructors

let john = new Employee(1, "John", "123 Main St", "hidden item");

john.thingNotInConstructor = "nope";

console.log(john);

//----------------------------------------------------------------
// methods

let peter = new Employee(2, "Peter", "123 Main St", "hidden item 2");

console.log(peter.getNameWithAddressAndSalt(10));

// peter.hiddenItem = "hidden item"; // -> error, it's private

// there's this thing ... if we call:

let peter_fun = peter.giveString // we can pass methods? even member methods? YES WE CAN!

console.log("================================================================");
console.log("peter.giveString : " + peter.giveString); // prints the method definition, the actual function we can pass
console.log("peter.giveString() : " + peter.giveString()); // prints the result of the function
console.log("peter_fun() :" + peter_fun()); 
console.log("================================================================");

// ----------------------------------------------------------------
// visibility :-)

// # is used in javascript as private
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_class_fields
// private also works
// protected too

// ----------------------------------------------------------------

// inheritance

class Manager extends Employee {

    constructor(id: number, name: string, address: string, hiddenItem: string) {
        super(id, name, address, hiddenItem);

        this.sayHello();

    }

    protected override sayHello(): string {
        return "Mike says hello, " + super.sayHello();
    }

}

let mike = new Manager(1, "Mike", "123 Main St", "hidden item");

john.speak();
mike.speak();

//----------------------------------------------------------------

// Static members

class Cookie {

    private flavour: string;

    static text = "Welcome to my cookie";

    static textMe(): string {
        return "text me";
    }

    constructor(flavour: string) {
        this.flavour = flavour;
    }


}

console.log(Cookie.textMe());
console.log(Cookie.text);

//----------------------------------------------------------------

// getters and setters

// done in a weird way, but ok

class Bag {

    private contents: string;

    constructor() {
        this.contents = "empty";
    }

    get bagContents() : string {
        return this.contents;
    }

    set bagContents(value: string) {
        this.contents = value;
    }

}

let bag = new Bag();
console.log(bag.bagContents);
bag.bagContents = "new bag contents";
console.log(bag.bagContents);

// ok, it seems it defines convenience methods for our private member
