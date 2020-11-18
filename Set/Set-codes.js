var set = new Set()
set.add(1990)
set.add('Kaveh')
set.add({
    name : 'Kiarash',
    family : 'Rezahanjani',
    bornIn : 'Tehran'
})
set.add([1,2,3,4,5])

// ITERATIONS > N.01
set.forEach(item =>{
    console.log(item)
})

//N.02
for (var i of set) {
    console.log(i)
}

//N.03
for (var i in set) {
    console.log(i)
}

// delete method
set.delete('Kaveh')

for (var i of set) {
    console.log(i)
}

// has method > return true or false
console.log(set.has(1990))

// clear method
set.clear()
console.log(set)


/* There is a diffrence between Set and Array, the diffrent is in Array when we want to store repeatedly values,
it show those values,however, in Set we have no repeatedly values and it clear them automatically in our set,
pay attention to Set below */

var numbers = [1,2,3,3,3,4,4,5,6]
var numbersChanged = new Set(numbers)

for (var count of numbersChanged) {
    console.log(count)
} // Output ==> 1 2 3 4 5 6 . in Set the repeatedly values has been deleted automatically.



