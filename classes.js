"use strict";
// available since ES6
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Employee_instances, _Employee_id, _Employee_hiddenItem, _Employee_HIDE_ME_WITH_HASH, _Employee_moreSalt;
class Employee {
    // in typescript, you cannot have multiple constructors
    // thus you cannot have both a default constructor and a parametrized constructor
    // constructors without params
    // constructor() { }
    // constructor
    constructor(id, name, address, hiddenItem) {
        _Employee_instances.add(this);
        // # marks a member private - that's the preferred syntax for javascript
        _Employee_id.set(this, void 0); // private can be used too, but it's not the preferred javascript syntax, so keep that in mind!
        this.initializedThing = 123;
        _Employee_hiddenItem.set(this, void 0);
        // why should I use # instead of private?
        // ts is typically an interpreted "language", it's not compiled, but transpiled
        // what is private in ts might not actually be a js private construct = what's then transpiled into js might not contain
        // real private protection, as the protection is ensured by ts and not needed if transpiller works as designed
        // but we trust the ts transpiller with other things (e.g. enums), so why shouldn't we trust it with the rest?
        // to, personally, if i use ts, I should use ts native code, not js code (even if supported)
        // something like java vs kotlin
        _Employee_HIDE_ME_WITH_HASH.set(this, void 0);
        __classPrivateFieldSet(this, _Employee_hiddenItem, hiddenItem, "f");
        __classPrivateFieldSet(this, _Employee_id, id, "f");
        this.name = name;
        this.address = address;
        __classPrivateFieldSet(this, _Employee_HIDE_ME_WITH_HASH, __classPrivateFieldGet(this, _Employee_id, "f").toString(), "f");
        this.HIDE_ME_WITH_PRIVATE = __classPrivateFieldGet(this, _Employee_id, "f").toString();
    }
    sayHello() {
        return `Hello ${this.name}!`;
    }
    // methods
    getNameWithAddressAndSalt(salt) {
        //return this.name + " " + this.address + " " + salt;
        // better way to print this - less error prone (compared to plusses and quotes)
        return `name: ${this.name}, address: ${this.address}, salt: ${__classPrivateFieldGet(this, _Employee_instances, "m", _Employee_moreSalt).call(this, salt)}`;
    }
    speak() {
        console.log(this.sayHello());
    }
    giveString() {
        return "blahblahblahblahblahblahblahblahblah";
    }
}
_Employee_id = new WeakMap(), _Employee_hiddenItem = new WeakMap(), _Employee_HIDE_ME_WITH_HASH = new WeakMap(), _Employee_instances = new WeakSet(), _Employee_moreSalt = function _Employee_moreSalt(salt) {
    return salt * 2;
};
class Employee2 extends Employee {
    constructor(id, name, address, hiddenItem) {
        super(id, name, address, hiddenItem);
    }
    doFunnyStuff() {
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
let peter_fun = peter.giveString; // we can pass methods? even member methods? YES WE CAN!
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
    constructor(id, name, address, hiddenItem) {
        super(id, name, address, hiddenItem);
        this.sayHello();
    }
    sayHello() {
        return "Mike says hello, " + super.sayHello();
    }
}
let mike = new Manager(1, "Mike", "123 Main St", "hidden item");
john.speak();
mike.speak();
//----------------------------------------------------------------
// Static members
class Cookie {
    static textMe() {
        return "text me";
    }
    constructor(flavour) {
        this.flavour = flavour;
    }
}
Cookie.text = "Welcome to my cookie";
console.log(Cookie.textMe());
console.log(Cookie.text);
//----------------------------------------------------------------
// getters and setters
// done in a weird way, but ok
class Bag {
    constructor() {
        this.contents = "empty";
    }
    get bagContents() {
        return this.contents;
    }
    set bagContents(value) {
        this.contents = value;
    }
}
let bag = new Bag();
console.log(bag.bagContents);
bag.bagContents = "new bag contents";
console.log(bag.bagContents);
// ok, it seems it defines convenience methods for our private member
