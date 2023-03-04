//----------------------------------------------------------------
// (ES) modules
//----------------------------------------------------------------

/*
The ECMAScript modules (in short ES modules) is a JavaScript modules format 
which is the official standard format to package JavaScript code for reuse. 
The ES modules format generally offers an easier route to writing isomorphic 
JavaScript, which can run in the browser or on a server.
*/

import { LoginInterface, User } from './interfaces'; // importing interfaces
import { Bag } from './classes'; // importing classes

// do not use - it's not idiomatic
//import * as Blabla from './interfaces'; // then we can refer to the exported things in this way: Blabla.LoginInterface

class DBLogin implements LoginInterface {
    login(username: string, password: string): User {
        let bag = new Bag()
        bag.bagContents = password
        return {
            age: 18,
            email: "email@email.com",
            id: 1,
            name: username,
            printEmail: () => console.log(bag.bagContents)
        }
    }
}

let db = new DBLogin()
db.login("John", "password")

// NOTE: when "running" a js file, code in all imports will be executed

//----------------------------------------------------------------

// Object destructuring and array destructuring

let user: User = { age: 18, email: "email@email.com", id: 1, name: "Bob", printEmail: () => console.log("blah") }

console.log("xxxxxxxxxxxxxx")

// how to access the properties?
let nameOfUser = user.name;
let emailOfUser = user.email;

// but we can also do it by object destructuring -> "wrapping in a new composed object"
let { name, email }: User = { age: 18, email: "email@email.com", id: 1, name: "Bob", printEmail: () => console.log("blah") }

// but what if we do not want to name them name and email - we can rename them
let { name: userName, email: userEmail }: User = { age: 18, email: "email@email.com", id: 1, name: "Bob", printEmail: () => console.log("blah") }

console.log("Well hello there ${userName} with ${userEmail}!")

// now array destructuring

let [name1, cookie, uff] : string[] = ["John", "Bob", "Carol"];
let [user1, user2] : User[] = [ 
    { age: 18, email: "email@email.com", id: 1, name: "John", printEmail: () => console.log("John") }, 
    { age: 18, email: "email@email.com", id: 2, name: "Andrew", printEmail: () => console.log("Andrew") },
    { age: 18, email: "email@email.com", id: 3, name: "Peter", printEmail: () => console.log("Peter") } ];

console.log(user1.email);
console.log(uff);

let [item1, item2, ...restOfItems]: string[] = [ "item1", "item2", "item3", "item4", "item5", "item6", "item7", "item8" ];

console.log("\nlist rest of items:");
for (let item of restOfItems) {
    console.log(item);
}

let result: string[] = restOfItems.filter(item => item.includes("6"));
console.log(result);

//----------------------------------------------------------------
