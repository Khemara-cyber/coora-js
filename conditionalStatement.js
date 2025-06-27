// Conditional Statement
// <, >, <=, >=, == , ===, !=, !==, !

// == and != just compare value only without compare its type
// === and !== compare all condition include its type

const condition = 50;

if (condition > 10) {
  console.log("This is true");
} else {
  console.log("This is false");
}

// Multiple Conditions
// &&, ||

const isFreeTime = true;
const hasMoney = false;

if (isFreeTime && hasMoney) {
  console.log("Traveling");
} else {
  console.log("Stay Home!");
}

// Truthy and Falsy
// "", 0, null, undefined, NaN (falsy)

// Ternary Operator

20 > 10 ? console.log("True") : console.log("False");

// function aging(age) {
//   return age >= 18 ? "Adult" : "Young";
// }
const aging = (age) => (age >= 18 ? "Adult" : "Young");
console.log(aging(18));

// Switch
// Case Break Default

const enrolment = 0;

switch (enrolment) {
  case 1:
    console.log("One Enroll");
    break;
  case 2:
    console.log("Two Enroll");
    break;
  default:
    console.log("No Enrollment");
}
