// =================================================================
// DATATYPES
// =================================================================

let hello : string = "some string";
let upperHello = hello.toLocaleUpperCase();

console.log(hello);
console.log(upperHello);

// =================================================================

let ageless : number;
let age : number = 10.3;

console.log(age);

let result : string = age.toString();

ageless = parseInt("20ahoj");

console.log(ageless);

// =================================================================

// in typescript, all variables must be initialized before they can be used
// this is because everything is compiled to javascript
// javascript does not know anything about datatypes = it cannot just provide a default value out of nothing
 
let pravda : boolean = true;
let pravda2 : boolean;

console.log(pravda);

// =================================================================

let list = [1, 2, 3, 4, 5, 6, 7, 8, 9,];
let list2 : string[] = ["1", "2", "3", "4", "5", "6"];

let list3 : Array<string> = ["1", "2", "3", "4", "5"];

let listofany : any[];

let stringList : string[] = [];
// or (equivalent to line above)
let otherList : Array<string> = []; // the type information will be removed when compiled to javascript

console.log(list3);
console.log(stringList.length);
console.log(list3.length);

let empList = ["hello", "world", "hello", "world", "hello", "world", "hello"];
let numberList = [1, 2, 3, 4, 5, 6, 7, 8];

let result2 = numberList.filter(x => x % 2 === 0).map(x => x.toString() + " says mooo!");
console.log(result2);

// can give an undefined result value
let result3 = empList.find(x => x === "cookies");
if (result3 === undefined) {
    console.log("bummer");
}
console.log(result3);

// reduce! :-)
let sum = numberList.reduce((a, b) => a + b, 0);
console.log(sum);

// ----------------------------------------------------------------

/*
The difference between let and var is in the scope of the variables they create: 
Variables declared by let are only available inside the block where they're defined. 
Variables declared by var are available throughout the function in which they're declared.
*/
enum Color { Red, Green, Blue, Violet, Purple }
let colorList : Color[] = [Color.Red, Color.Green, Color.Blue];
let c : Color = Color.Purple;

// const?
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const
/*
The const declaration creates block-scoped constants, much like variables declared using the let keyword. 
The value of a constant can't be changed through reassignment (i.e. by using the assignment operator), 
and it can't be redeclared (i.e. through a variable declaration). 
However, if a constant is an object or array its properties or items can be updated or removed.
*/
// generates a nicer? javascript code
const enum Color2 { Red, Green, Blue, Violet, Purple }
let c2 : Color2 = Color2.Purple;

// check the generated code

// it's extremely simplified - the reason is, that if we do not want to use the
// enum anywhere "else" in the code, make them const and tsc will trim the code down to bare minimum

const enum Potatoes { Big, Small, Medium, Dirty, VeryDirty }
let potatoe : Potatoes = Potatoes.VeryDirty;

// with const, tsc will assign the same value to the created variables
// it seems that this is ok, since tsc will check comparisons before
// code generation and will not allow to generate code which would
// make a direct comparison between those two values
// ... unless we break the type safety (e.g. force value comparison)

// ----------------------------------------------------------------

// tuples
let numberPair: [number, number] = [1, 2];
function swapNumbers(pair: [number, number]): [number, number] {
    return [pair[1], pair[0]];
}
console.log(numberPair);
let swappedNumbers = swapNumbers(numberPair);
console.log(swappedNumbers);

numberPair[0] = 3;
numberPair[1] = 3;
//numberPair[2] = 3; // will complain!

// in contrast and array
let someValue = list[1000]; // will return undefined
console.log(someValue);

// TUPLES takeaways: (compared e.g. to arrays)
// the types of elements can be different (and they are type checked)
// they are like bounded arrays (const length arrays)

// ----------------------------------------------------------------

// any (DO NOT USE ANY!!!!!)

// it avoids type checking, which defeats the purpose of ts

// it's like ? in java

let department: any;

department = [10,20];

console.log(department);


department = "cookies";

console.log(department);

// "noImplicitAny": true in tsconfig.json will prevent ts from inferring the type of any (true by default)
// function fn(s) { // with true, this produces an error (otherwise a warning)
//       console.log(s.subtr(3));
// }

// ----------------------------------------------------------------

// functions








