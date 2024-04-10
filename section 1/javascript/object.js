let student = {
     name: "John",
     age: 21,
     email: "john@example.com",
     phone:  '456621455',
     course: 'javascript',
}
console.log(student)
//to access values of key
console.log(student.name)
console.log(student["age"]) //same as above

// replace value
student.course="python"
console.log(student)

// add new key-value pair
student.city= "New York"
console.log(student)


console.log('----------------------------------------')

const smartphones = {
     brand: 'Samsung',
     model: 'Galaxy S20',     
     color: ['Black','White','Blue','Green','Red'] ,       
     price: 50000,         
     ram: '8GB',
     storage: '128GB',
     camera: '48MP',
     battery:  '5000mAh'       
}
console.log(smartphones)
console.log(smartphones.color[2])
smartphones.color[2]= "Violet";
console.log(smartphones)

console.log('----------------------------------------')

const phones = [
     {brand:'Apple',model:'iphone 11', price: 70000, color: ['White','Black','Green','Red']},
     {brand:'Samsung', model:'Galaxy S10',price: 50000, color: ['White','Black','blue','Green','Red']},
     {brand:'OnePlus', model:'8T',price: 45000, color: ['White','Black','blue','Green',]},
     {brand:'Xiaomi', model:'Mi 10',price: 40000, color: ['White','Black','blue','Green','Red']}
]
console.log(phones)
console.log(phones[1].model)
console.log(phones[3].color[3])
phones[2].model = '8T Pro'
console.log(phones)


