// Arrays
const studentNames = ["Alice Baker", "Bob Carris"]
studentNames.push("Cynthia Dawson", "Daniel Jackson")
studentNames.unshift("Ace Smith", "Aaron Johnson")
studentNames.pop()
// studentNames.shift()
// studentNames.shift()

// Removes the 2nd element from the array stored in the studentNames variable
studentNames.splice(1, 1)

// This example of splice() adds two new elements, starting at index 1.
// First argument of '1' means that we start at index 1.
// Second argument of '0' means that we're not removing any elements from the array.
// And then from the 3rd argument and on, we're adding elements to the array.
studentNames.splice(1, 0, "Bruce Wayne", "Peter Parker")

// console.log(studentNames)

// Objects
const person = {
    name: "Alice Baker"
}
person.age = 23
person['isStudent'] = true
// console.log(person)
// console.log(person.age)

person.name = "Bruce Wayne"
const keyName = 'age'
// console.log(person[keyName])
person[keyName] = 58
person['phone-number'] = '1234567890'
// console.log(person['phone-number'])

person.phoneNumber = person['phone-number']

// Deleting a key and value pair
delete person['phone-number']

// console.log(person)

// Loops
// console.log(studentNames)

function buyIceCream(pricePerScoop = 1, numberOfScoops = 1){
    console.log(`Ask server for ${numberOfScoops} scoop(s) of ice cream...`)
    console.log(`Pay $${pricePerScoop * numberOfScoops} for ice cream.`)
    console.log('Waiting to retrieve order...')
    console.log('Got ice cream!')
}

// for(let counter = 0; counter < 10; counter++){
//     console.log('Welcome to Flatburger restaurant!')
//     buyIceCream()
// }

// let counter = 0
// while(counter < 10){
//     console.log('Welcome to Flatburger restaurant!')
//     buyIceCream()
//     counter++
// }

// Another potential use case for a while loop
// while(true){
    // stuff happens here....

    //if(something happens where we'd want to break from the loop){
    //     break
    // }

    // otherwise continue doing stuff
// }

// Looping through an array's elements with a regular for loop
// for(let index = 0; index < studentNames.length; index++){
//     console.log(studentNames[index])
// }

// Array iteration with for...of
// for(const name of studentNames){
//     console.log(name)
// }

// Object iteration with for...in
// for(const key in person){
    // console.log(key)
//     console.log(person[key])
// }

// forEach() array iterator method
// studentNames.forEach((name) => {
//     console.log(`Hi ${name}!`)
// })

// function forEach(array, callback){
//     for(let index = 0; index < array.length; index++){
//         callback(array[index], index)
//     }
// }

console.log(studentNames)

// map() Array iterator method
// const studentIntros = studentNames.map((name) => {
//     return `Hi ${name}!`
// })

// console.log(studentIntros)

const numbers = [7, 14, 21, 28]

// filter() Array iterator method
// const filteredNumbers = numbers.filter((number) => {
//     return number < 15
// })
// console.log(filteredNumbers)

// Get an array containing student names that start with the letter 'A' using the filter Array iterator method
const filteredNames = studentNames.filter((name) => {
    return name[0] === 'B'
})
console.log(filteredNames)

// find() Array iterator method
// const foundNumber = numbers.find(number => {
//     return number < 15
// })
// console.log(foundNumber)

const foundName = studentNames.find((name) => {
    return name[0] === 'B'
})
console.log(foundName)