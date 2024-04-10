console.log("hello world")
console.log("Saloni Singh")
console.log("This is my first js code")

console.log("--------------------------")

// Type of variables
// 1. var
// 2. let
// 3. const
var name="saloni"
console.log(name)

// difference btw let and const
var city="lucknow"
console.log(city)

const country="India"
console.log(country)

//const country=("USA")
//console.log(country)

console.log("--------------------------")

// difference btw var and let
var a = 10
// redeclaration is possible
var a = 20
console.log(a)
// reassigning is possible
a = 30
console.log(a)

let b = 100
console.log(b)
// redeclaration is not possible
//let b = 200

// reassignment is possible
b=300
console.log(b)

// String Concatenation
let  firstName ="Saloni";
let lastName = "Singh";
let  fullName = firstName + " " +lastName;
console.log(fullName);

// question
let bs = 50000;
let hra = (bs * 10) / 100;
let da = (bs * 5) / 100;
var gs =bs +hra + da ;
console.log(bs)
console.log(hra)
console.log(da)
console.log(gs)