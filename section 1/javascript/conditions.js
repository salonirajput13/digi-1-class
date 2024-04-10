// Types of Conditions
// 1. if (to check sible condition)
// 2. if-else (to check sinle cpnditions)
// 3. if-else-if (to check multiple conditions )
// 4. ternary operator (to check single condition)

let age = 10
if(age>=18){
    console.log("You are eligible to Vote")
}

let a= 10
if (a>=18){
    console.log("You are eligible to vote")
}
else{
    console.log("You are not eligile to vote")
}


let temp= 45
if (temp<0){
    console.log("stay home")
}
else {
    console.log("Digipodium aa jao")
}

// if-else-if or ladder program
let marks = 80;
if(marks >=90){
    console.log("Grade A")
}else if(marks>=80){
    console.log("Grade B")
}else if(marks>=70){
    console.log("Grade C")
}else if(marks>=60){
    console.log("Grade D")
}else{
    console.log("Fail")
}

let c = 20
let result = c>10 ? "Greater than 10" : "less than 10"
console.log(result)

