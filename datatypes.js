// Data Types
// Primitive: String,Number,Boolean,Null,Undefinded
// None-Promitive: Function,Araay,Object
let name = "khemara";
// console.log(typeof name);

// Null Vs Undefinded

// const email = null;

// let names = undefined;

// console.log(names);

// Primitive Vs None-Primitive Data Types

let x = 10;
let y = x; // copy form x

x = 50;
console.log(x, y);

const obj = { name: "Khemara", age: 20 }; // reference to main source.
const newObj = obj; // it is not copy form obj / it reference to main source.

obj.name = "Rickie";
console.log(obj, newObj);
