"use strict";
//----------------------------------------------------------------
// (ES) modules
//----------------------------------------------------------------
Object.defineProperty(exports, "__esModule", { value: true });
const classes_1 = require("./classes"); // importing classes
// do not use - it's not idiomatic
//import * as Blabla from './interfaces'; // then we can refer to the exported things in this way: Blabla.LoginInterface
class DBLogin {
    login(username, password) {
        let bag = new classes_1.Bag();
        bag.bagContents = password;
        return {
            age: 18,
            email: "email@email.com",
            id: 1,
            name: username,
            printEmail: () => console.log(bag.bagContents)
        };
    }
}
let db = new DBLogin();
db.login("John", "password");
// NOTE: when "running" a js file, code in all imports will be executed
//----------------------------------------------------------------
// Object destructuring and array destructuring
let user = { age: 18, email: "email@email.com", id: 1, name: "Bob", printEmail: () => console.log("blah") };
console.log("xxxxxxxxxxxxxx");
// how to access the properties?
let nameOfUser = user.name;
let emailOfUser = user.email;
// but we can also do it by object destructuring -> "wrapping in a new composed object"
let { name, email } = { age: 18, email: "email@email.com", id: 1, name: "Bob", printEmail: () => console.log("blah") };
// but what if we do not want to name them name and email - we can rename them
let { name: userName, email: userEmail } = { age: 18, email: "email@email.com", id: 1, name: "Bob", printEmail: () => console.log("blah") };
console.log("Well hello there ${userName} with ${userEmail}!");
// now array destructuring
let [name1, cookie, uff] = ["John", "Bob", "Carol"];
let [user1, user2] = [
    { age: 18, email: "email@email.com", id: 1, name: "John", printEmail: () => console.log("John") },
    { age: 18, email: "email@email.com", id: 2, name: "Andrew", printEmail: () => console.log("Andrew") },
    { age: 18, email: "email@email.com", id: 3, name: "Peter", printEmail: () => console.log("Peter") }
];
console.log(user1.email);
console.log(uff);
let [item1, item2, ...restOfItems] = ["item1", "item2", "item3", "item4", "item5", "item6", "item7", "item8"];
console.log("\nlist rest of items:");
for (let item of restOfItems) {
    console.log(item);
}
let result = restOfItems.filter(item => item.includes("6"));
console.log(result);
//----------------------------------------------------------------
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
