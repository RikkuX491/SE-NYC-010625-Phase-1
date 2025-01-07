const studentName = "Alice Baker"
console.log(studentName)

function printStudentDetails(){
    const studentAge = 23
    console.log(studentName)
    console.log(studentAge)
}
printStudentDetails()
// console.log(studentAge)

if(3 === 3){
    const food = "Hamburger"
    let drink = "Pina Colada"
    // var sport = "Tennis"
    // console.log(food)
}
// console.log(food)
// console.log(drink)
// console.log(sport)

function buyIceCream(pricePerScoop = 1, numberOfScoops = 1, getTotalIceCreamPrice){
    console.log(getTotalIceCreamPrice)
    // console.log(price)

    // if(price === undefined){
    //     price = 1
    // }

    console.log(`Ask server for ${numberOfScoops} scoop(s) of ice cream...`)
    console.log(`Pay $${getTotalIceCreamPrice(pricePerScoop, numberOfScoops)} for ice cream.`)
    console.log('Waiting to retrieve order...')
    console.log('Got ice cream!')

    // Returning a function from our buyIceCream() function
    return () => {
        console.log('Thanks for shopping!')
    }
}

function getTotalPrice(price, scoops){
    return price * scoops
}

// buyIceCream(2, 4, (price, scoops) => price * scoops)

// Storing the returnedFunction into a variable and will call returnValue() in the next step
// const returnValue = buyIceCream(2, 4, (price, scoops) => price * scoops)
// returnValue()
// buyIceCream(2, 4, returnValue)

// Named function
// function sum (num1, num2){
//     return num1 + num2
// }

// Anonymous function
// const sum = function (num1, num2){
//     return num1 + num2
// }

// Arrow function
const sum = (num1, num2) => num1 + num2
// console.log(sum)


// const sumNumber = sum(4, 5)
// console.log(sumNumber)


// buyIceCream(2, 4, getTotalPrice)
// buyIceCream(3)
// buyIceCream()

// getTotalPrice(3, 4)