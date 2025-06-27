// Function

// function myFunction() {
//   let x = 20;
//   let y = 30;
//   console.log(x + y);
// }
// myFunction();

// function myFunction() {
//   let x = 20;
//   let y = 30;
//   return x + y;
// }
// console.log(myFunction());

// function greeting() {
//   let name = "Khemra";
//   return `Hello ${name} How are you?`;
// }
// console.log(greeting());

// Parameter

// function sum(x, y) {
//   return x + y;
// }
// console.log(sum(100, 200));

// Arow Function (ES6)

// const myFunc = (x, y) => x * y;
// console.log(myFunc(2, 5));

// Function Expression
// const myFunction = function () {
//   return;
// };

// Higher Order & CallBack Function

function greeting(cbf) {
  return `Hello ${cbf()} How are you?`;
}
// function name() {
//   return "Khemara";
// }

console.log(
  greeting(function () {
    return "Khemara";
  })
);

function welcome(cb, name) {
  return `Welcome to ${cb(name)}.`;
}
// function names(n) {
//   return n;
// }
console.log(
  welcome(function (n) {
    return n;
  }, "KIT")
);
