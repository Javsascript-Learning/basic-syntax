// Create an Array #1
var numbers = new Array()
numbers[0] = 1
numbers[1] = 2
numbers[2] = 3
numbers[3] = 4
numbers[4] = 5

// Iteration #1
numbers.forEach(value => {
    console.log(`${value}`)
})
// Iteration #2
for (var i = 0; i < numbers.length; i++) {
    console.log(numbers[i])
}
// Iteration #3
// while(numbers.length) {
//     console.log(numbers)
// }

// Create an Array #2
var names = ["kaveh","kiarash"]

// push it to the end of the Array
names.push("mohammad")

// Iterate #1
names.forEach((value,index) => {
    console.log(`${index} : ${value}`)
})

// Iterate #2
for (var  i = 0; i < names.length; i++) {
    console.log(names[i])
}

/* if I put for loop or forEach after names.pop(), mohammad will be deleted from list,
* because pop() delete only the last array */
names.pop()


// Delete an array using index
delete names[0]

// FIND AN ARRAY
//Return value (string), kiarash
console.log(names.find(name => name === "kiarash"))
//Return undefined, means reza is not exist
console.log(names.find(name => name === "reza"))

// findindex : if the value exists in Array , return 1 , otherwise -1
const result = names.findIndex(name => name == "kiarash")
console.log(result)




