let fruits= ['apple', 'banana', 'mango']
console.log(fruits)

// array methods
console.log('----------------------------')
// 1. push() - add element at the end of the array
// 2. pop() - remove element from the end of the array
// 3. shift() - remove element from the beginning of the array
// 4. unshift() - add elementat the beginning of the array
// 5. splice()  - modify array by adding, removing and replacing elements of the array
// 6. slice() - copy element from the array
// 7. indexof() - find the index of the element
// 8. concat() - combine two arrays into one array
// 9. map() - iterate over the array
// 10. filter() - filter the elements of the array
// 11. forEach() - iterate over the array

console.log(fruits[2])
console.log(fruits.length)
fruits.push("orange")
console.log(fruits.slice(1,3))

fruits.push("kiwi");
console.log(fruits)

fruits.pop(); //removes kiwi
console.log(fruits)

fruits.shift()
console.log(fruits)

fruits.unshift('apple')
console.log(fruits)


let veg = ['potato', 'onion','carrot' ,'tomato']
let newArray = veg.concat(fruits)
console.log(newArray)

let index = fruits.indexOf('mango')
console.log(index)

console.log('-------------------------')

let num =  [1,2,3,4,5,6,7,8,9,10]

// iteration using loop
for (let i=0; i<num.length;i++){
    console.log(num[i]**2)
}

// iteration  using forEach method
num.forEach((i)=>{
    console.log(i**2);
})

// iteration using map
let squaredNum = num.map((n)=> n**2 )
console.log(squaredNum)

// filter function
let evenNum = []
for (let i=0; i<num.length; i++){
    if(num[i] % 2 == 0){
        evenNum.push(num[i])
    }
}
console.log(evenNum)


let even = num.filter((x) => x%2==0)
console.log(even)

let odd = num.filter((x)=> x%2!=0)
console.log(odd)


console.log('-------------------------')
let colour= ['red','blue', 'green', 'yellow', 'black']
let newcolour = colour.filter((c)=>c.length > 4);
console.log(newcolour)



console.log('-------------------------')
let price= [200,5000,644,2304,987,1569,7855,1000,2340];
let newprice = price.filter((p)=> p>=1000 && p<=3000 );
console.log(newprice)

