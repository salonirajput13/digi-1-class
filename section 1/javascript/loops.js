// types of loops
// 1. for loop
// 2. while loop

for (let i=1; 1<=10; i++){
    console.log(i);
}

let a=" "
for (let i=1; i<=5 ; i++) {
    a= a + i + " "
}
console.log(a)

console.log(-----------------------------------------------)

let count = 0
while (count<=5){
    console.log("count :" + count)
    count++
}

let fruits = ['apple', 'banana', 'cherry']
for (let i=0;  i<fruits.length; i++){
    console.log(fruits[i])
}

// calculating the sum of all given number in an array
nums=[4,6,8]
sum=0
for (let j=0;j< nums.length;j++){
   sum += nums[j];  
}
console.log('The sum is:'+sum)